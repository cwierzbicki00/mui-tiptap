import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormatSize } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useRichTextEditorContext } from "../context";
import { getAttributesForEachSelected } from "../utils/getAttributesForEachSelected";
import { MENU_BUTTON_FONT_SIZE_DEFAULT } from "./MenuButton";
import MenuSelect from "./MenuSelect";
const useStyles = makeStyles({ name: { MenuSelectFontSize } })({
    selectInput: {
        // We use a fixed width so that the Select element won't change sizes as
        // the selected option changes (which would shift other elements in the
        // menu bar), since the options may be different sizes
        width: 17,
        // Ensure that if we render an icon as the value, it's vertically aligned
        // properly
        display: "flex",
        alignItems: "center",
    },
    fontSizeIcon: {
        fontSize: MENU_BUTTON_FONT_SIZE_DEFAULT,
    },
});
const DEFAULT_FONT_SIZE_SELECT_OPTIONS = [
    "8px",
    "9px",
    "10px",
    "11px",
    "12px",
    "14px",
    "16px",
    "18px",
    "24px",
    "30px",
    "36px",
    "48px",
    "60px",
    "72px",
    "96px",
];
function stripPxFromValue(value) {
    return value.replace("px", "");
}
// Use this as a sentinel value so we can handle the case that the user's
// selection includes multiple different font sizes. There won't be a visible
// "option" in the Select for this value, and this will allow the user to set
// the current font size to "Default" or to any of the multiple values, and have
// it take effect. See more comments around `currentFontSize` below.
const MULTIPLE_SIZES_SELECTED_VALUE = "MULTIPLE";
/** A font-size selector for use with the mui-tiptap FontSize extension.  */
export default function MenuSelectFontSize({ options = DEFAULT_FONT_SIZE_SELECT_OPTIONS, sizeOptions, hideUnsetOption = false, unsetOptionLabel = "Default", unsetOptionContent, emptyLabel, emptyValue, ...menuSelectProps }) {
    var _a;
    const { classes, cx } = useStyles();
    const editor = useRichTextEditorContext();
    // Handle deprecated legacy names for some props:
    emptyLabel = emptyValue !== null && emptyValue !== void 0 ? emptyValue : emptyLabel;
    unsetOptionLabel = unsetOptionContent !== null && unsetOptionContent !== void 0 ? unsetOptionContent : unsetOptionLabel;
    options = sizeOptions !== null && sizeOptions !== void 0 ? sizeOptions : options;
    const optionObjects = (options !== null && options !== void 0 ? options : []).map((option) => (typeof option === "string" ? { value: option } : option));
    // Determine if all of the selected content shares the same set font size.
    // Scenarios:
    // 1) If there is exactly one font size amongst the selected content and all
    //    of the selected content has the font size set, we'll show that as the
    //    current Selected value (as a user would expect).
    // 2) If there are multiple sizes used in the selected content or some
    //    selected content has font size set and other content does not, we'll
    //    assign the Select's `value` to a sentinel variable so that users can
    //    unset the sizes or can change to any given size.
    // 3) Otherwise (no font size is set in any selected content), we'll show the
    //    unsetOption as selected.
    const allCurrentTextStyleAttrs = editor
        ? getAttributesForEachSelected(editor.state, "textStyle")
        : [];
    const isTextStyleAppliedToEntireSelection = !!(editor === null || editor === void 0 ? void 0 : editor.isActive("textStyle"));
    const currentFontSizes = allCurrentTextStyleAttrs.map((attrs) => { var _a; return (_a = attrs.fontSize) !== null && _a !== void 0 ? _a : ""; } // Treat any null/missing font-size as ""
    );
    if (!isTextStyleAppliedToEntireSelection) {
        // If there is some selected content that does not have textStyle, we can
        // treat it the same as a selected textStyle mark with fontSize set to null
        // or ""
        currentFontSizes.push("");
    }
    const numUniqueCurrentFontSizes = new Set(currentFontSizes).size;
    let currentFontSize;
    if (numUniqueCurrentFontSizes === 1) {
        // There's exactly one font size selected, so show that
        currentFontSize = currentFontSizes[0];
    }
    else if (numUniqueCurrentFontSizes > 1) {
        // There are multiple font sizes (either explicitly, or because some of the
        // selection has a font size set and some does not). This is similar to what
        // Microsoft Word and Google Docs do, for instance, showing the font size
        // input as blank when there are multiple values. If we simply set
        // currentFontSize as "" here, then the "unset option" would show as
        // selected, which would prevent the user from unsetting the font sizes
        // for the selected content (since Select onChange does not fire when the
        // currently selected option is chosen again).
        currentFontSize = MULTIPLE_SIZES_SELECTED_VALUE;
    }
    else {
        // Show as unset (empty), since there are no font sizes in any of the
        // selected content. This will show the "unset option" with the
        // unsetOptionLabel as selected, if `hideUnsetOption` is false.
        currentFontSize = "";
    }
    return (_jsxs(MenuSelect, { onChange: (event) => {
            const value = event.target.value;
            if (value) {
                editor === null || editor === void 0 ? void 0 : editor.chain().setFontSize(value).focus().run();
            }
            else {
                editor === null || editor === void 0 ? void 0 : editor.chain().unsetFontSize().focus().run();
            }
        }, disabled: 
        // Pass an arbitrary value to can().setFontSize() just to check `can()`
        !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().setFontSize("12px"), renderValue: (value) => {
            if (!value || value === MULTIPLE_SIZES_SELECTED_VALUE) {
                // If a specific font size isn't set, show an icon to indicate what
                // this does, so it's visually similar to other menu button controls,
                // more intuitive, and more meaningful and compact than some other
                // placeholder value here
                return emptyLabel !== null && emptyLabel !== void 0 ? emptyLabel : _jsx(FormatSize, { className: classes.fontSizeIcon });
            }
            return stripPxFromValue(value);
        }, displayEmpty: true, "aria-label": "Font sizes", tooltipTitle: "Font size", ...menuSelectProps, 
        // We don't want to pass any non-string falsy values here, always falling
        // back to ""
        value: currentFontSize || "", inputProps: {
            ...menuSelectProps.inputProps,
            className: cx(classes.selectInput, (_a = menuSelectProps.inputProps) === null || _a === void 0 ? void 0 : _a.className),
        }, children: [!hideUnsetOption && (
            // Allow users to unset the font size
            _jsx(MenuItem, { value: "", children: unsetOptionLabel })), _jsx(MenuItem, { style: { display: "none" }, value: MULTIPLE_SIZES_SELECTED_VALUE }), optionObjects.map((option) => {
                var _a;
                return (_jsx(MenuItem, { value: option.value, children: (_a = option.label) !== null && _a !== void 0 ? _a : stripPxFromValue(option.value) }, option.value));
            })] }));
}
