import { jsx as _jsx } from "react/jsx-runtime";
import { useRichTextEditorContext } from "../context";
import { FormatColorTextNoBar } from "../icons";
import { getAttributesForEachSelected } from "../utils";
import { MenuButtonColorPicker, } from "./MenuButtonColorPicker";
export default function MenuButtonTextColor({ IconComponent = FormatColorTextNoBar, tooltipLabel = "Text color", defaultTextColor = "", ...menuButtonProps }) {
    const editor = useRichTextEditorContext();
    // Determine if all of the selected content shares the same set color.
    const allCurrentTextStyleAttrs = editor
        ? getAttributesForEachSelected(editor.state, "textStyle")
        : [];
    const isTextStyleAppliedToEntireSelection = !!(editor === null || editor === void 0 ? void 0 : editor.isActive("textStyle"));
    const currentColors = allCurrentTextStyleAttrs.map(
    // Treat any null/missing color as the default color
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    (attrs) => attrs.color || defaultTextColor);
    if (!isTextStyleAppliedToEntireSelection) {
        // If there is some selected content that does not have textStyle, we can
        // treat it the same as a selected textStyle mark with color set to the
        // default
        currentColors.push(defaultTextColor);
    }
    const numUniqueCurrentColors = new Set(currentColors).size;
    let currentColor;
    if (numUniqueCurrentColors === 1) {
        // There's exactly one color in the selected content, so show that
        currentColor = currentColors[0];
    }
    else if (numUniqueCurrentColors > 1) {
        // There are multiple colors (either explicitly, or because some of the
        // selection has a color set and some does not and is using the default
        // color). Similar to other rich text editors like Google Docs, we'll treat
        // this as "unset" and not show a color indicator in the button or a
        // "current" color when interacting with the color picker.
        currentColor = "";
    }
    else {
        // Since no color was set anywhere in the selected content, we should show
        // the default color
        currentColor = defaultTextColor;
    }
    return (_jsx(MenuButtonColorPicker, { IconComponent: IconComponent, tooltipLabel: tooltipLabel, value: currentColor, onChange: (newColor) => {
            editor === null || editor === void 0 ? void 0 : editor.chain().focus().setColor(newColor).run();
        }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().setColor("#000"), ...menuButtonProps, labels: { removeColorButton: "Reset", ...menuButtonProps.labels } }));
}
