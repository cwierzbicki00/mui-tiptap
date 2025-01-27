import { jsx as _jsx } from "react/jsx-runtime";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { MenuItem } from "@mui/material";
import { useCallback, useMemo } from "react";
import { makeStyles } from "tss-react/mui";
import { useRichTextEditorContext } from "../context";
import MenuButtonTooltip from "./MenuButtonTooltip";
import { MENU_BUTTON_FONT_SIZE_DEFAULT } from "./MenuButton";
import MenuSelect from "./MenuSelect";
const useStyles = makeStyles({ name: { MenuSelectTextAlign } })((theme) => ({
    selectInput: {
        // We use a fixed width equal to the size of the menu button icon so that
        // the Select element won't change sizes even if we show the "blank"
        // interface when the selected content contains multiple different text
        // alignments.
        width: MENU_BUTTON_FONT_SIZE_DEFAULT,
    },
    menuItem: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    menuOption: {
        // These styles ensure the item fills its MenuItem container, and the
        // tooltip appears in the same place when hovering over the item generally
        // (not just the text of the item)
        display: "flex",
        width: "100%",
        justifyContent: "center",
    },
    menuButtonIcon: {
        fontSize: MENU_BUTTON_FONT_SIZE_DEFAULT,
        // For consistency with toggle button default icon color and the Select
        // dropdown arrow icon color
        // https://github.com/mui/material-ui/blob/2cb9664b16d5a862a3796add7c8e3b088b47acb5/packages/mui-material/src/ToggleButton/ToggleButton.js#L60,
        // https://github.com/mui/material-ui/blob/0b7beb93c9015da6e35c2a31510f679126cf0de1/packages/mui-material/src/NativeSelect/NativeSelectInput.js#L96
        color: theme.palette.action.active,
    },
}));
const DEFAULT_ALIGNMENT_OPTIONS = [
    {
        value: "left",
        label: "Left",
        shortcutKeys: ["mod", "Shift", "L"],
        IconComponent: FormatAlignLeftIcon,
    },
    {
        value: "center",
        label: "Center",
        shortcutKeys: ["mod", "Shift", "E"],
        IconComponent: FormatAlignCenterIcon,
    },
    {
        value: "right",
        label: "Right",
        shortcutKeys: ["mod", "Shift", "R"],
        IconComponent: FormatAlignRightIcon,
    },
    {
        value: "justify",
        label: "Justify",
        shortcutKeys: ["mod", "Shift", "J"],
        IconComponent: FormatAlignJustifyIcon,
    },
];
export default function MenuSelectTextAlign({ options = DEFAULT_ALIGNMENT_OPTIONS, emptyLabel = "", alignmentOptions, ...menuSelectProps }) {
    var _a, _b, _c;
    const { classes, cx } = useStyles();
    const editor = useRichTextEditorContext();
    // Handle the deprecated name for the `options` prop if present
    options =
        (_a = alignmentOptions === null || alignmentOptions === void 0 ? void 0 : alignmentOptions.map((option) => ({
            ...option,
            value: option.alignment,
        }))) !== null && _a !== void 0 ? _a : options;
    const handleAlignmentSelect = useCallback((event) => {
        const alignment = event.target.value;
        editor === null || editor === void 0 ? void 0 : editor.chain().setTextAlign(alignment).focus().run();
    }, [editor]);
    // Figure out which settings the user has enabled with the heading extension
    const textAlignExtensionOptions = useMemo(() => {
        const textAlignExtension = editor === null || editor === void 0 ? void 0 : editor.extensionManager.extensions.find((extension) => extension.name == "textAlign");
        return textAlignExtension === null || textAlignExtension === void 0 ? void 0 : textAlignExtension.options;
    }, [editor]);
    const enabledAlignments = useMemo(() => {
        return new Set(textAlignExtensionOptions === null || textAlignExtensionOptions === void 0 ? void 0 : textAlignExtensionOptions.alignments);
    }, [textAlignExtensionOptions]);
    // Only set the Select `value` as non-empty if all alignments are the same
    // (which we'll know if `isActive({ textAlign: alignment })` returns true).
    // This allows the user to change all current selected nodes' alignments to
    // any alignment, including the default alignment. If we instead set the
    // `value` as the default for instance, attempting to change multiple node's
    // alignments to that default would not work (not triggering "onChange").
    const selectedValue = (_b = Array.from(enabledAlignments).find((alignment) => editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: alignment }))) !== null && _b !== void 0 ? _b : "";
    return (_jsx(MenuSelect, { onChange: handleAlignmentSelect, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) ||
            !Array.from(enabledAlignments).some((alignment) => editor.can().setTextAlign(alignment)), 
        // Override the rendering of the selected value so that we don't show
        // tooltips on hovering (like we do for the menu options)
        renderValue: (value) => {
            let content;
            if (value) {
                const alignmentOptionForValue = options.find((option) => option.value === value);
                content = alignmentOptionForValue ? (_jsx(alignmentOptionForValue.IconComponent, { className: classes.menuButtonIcon })) : (value);
            }
            else {
                content = emptyLabel;
            }
            return _jsx("span", { className: classes.menuOption, children: content });
        }, "aria-label": "Text alignments", tooltipTitle: "Align", value: selectedValue, displayEmpty: true, ...menuSelectProps, inputProps: {
            ...menuSelectProps.inputProps,
            className: cx(classes.selectInput, (_c = menuSelectProps.inputProps) === null || _c === void 0 ? void 0 : _c.className),
        }, children: options
            .filter((alignmentOption) => enabledAlignments.has(alignmentOption.value))
            .map((alignmentOption) => {
            var _a;
            return (_jsx(MenuItem, { value: alignmentOption.value, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().setTextAlign(alignmentOption.value)), className: classes.menuItem, children: _jsx(MenuButtonTooltip, { label: (_a = alignmentOption.label) !== null && _a !== void 0 ? _a : "", shortcutKeys: alignmentOption.shortcutKeys, placement: "right", contentWrapperClassName: classes.menuOption, children: _jsx(alignmentOption.IconComponent, { className: classes.menuButtonIcon }) }) }, alignmentOption.value));
        }) }));
}
