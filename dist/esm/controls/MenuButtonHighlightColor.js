import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-highlight" />
import { useRichTextEditorContext } from "../context";
import { FormatInkHighlighterNoBar } from "../icons";
import { MenuButtonColorPicker, } from "./MenuButtonColorPicker";
/**
 * Control for a user to choose a text highlight color, for the
 * @tiptap/extension-highlight when it's configured with
 * `Highlight.configure({ multicolor: true })`.
 *
 * See also MenuButtonHighlightToggle for a simple "on off" highlight toggle
 * control, for use with the Highlight extension when not using multicolor.
 */
export default function MenuButtonHighlightColor({ defaultMarkColor = "#ffff00", ...menuButtonProps }) {
    const editor = useRichTextEditorContext();
    const currentHighlightColor = (editor === null || editor === void 0 ? void 0 : editor.isActive("highlight"))
        ? // If there's no color set for the highlight (as can happen with the
            // highlight keyboard shortcut, toggleHighlight/setHighlight when no
            // explicit color is provided, and the "==thing==" syntax), fall back to
            // the provided defaultMarkColor
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            editor.getAttributes("highlight").color ||
                defaultMarkColor
        : "";
    return (_jsx(MenuButtonColorPicker, { IconComponent: FormatInkHighlighterNoBar, tooltipLabel: "Highlight color", tooltipShortcutKeys: ["mod", "Shift", "H"], value: currentHighlightColor, onChange: (newColor) => {
            if (newColor) {
                editor === null || editor === void 0 ? void 0 : editor.chain().focus().setHighlight({ color: newColor }).run();
            }
            else {
                editor === null || editor === void 0 ? void 0 : editor.chain().focus().unsetHighlight().run();
            }
        }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleHighlight(), ...menuButtonProps, labels: {
            removeColorButton: "None",
            removeColorButtonTooltipTitle: "Remove highlighting from this text",
            ...menuButtonProps.labels,
        } }));
}
