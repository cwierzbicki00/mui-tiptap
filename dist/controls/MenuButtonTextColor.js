"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const context_1 = require("../context");
const icons_1 = require("../icons");
const utils_1 = require("../utils");
const MenuButtonColorPicker_1 = require("./MenuButtonColorPicker");
function MenuButtonTextColor(_a) {
    var { IconComponent = icons_1.FormatColorTextNoBar, tooltipLabel = "Text color", defaultTextColor = "" } = _a, menuButtonProps = __rest(_a, ["IconComponent", "tooltipLabel", "defaultTextColor"]);
    const editor = (0, context_1.useRichTextEditorContext)();
    // Determine if all of the selected content shares the same set color.
    const allCurrentTextStyleAttrs = editor
        ? (0, utils_1.getAttributesForEachSelected)(editor.state, "textStyle")
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
    return ((0, jsx_runtime_1.jsx)(MenuButtonColorPicker_1.MenuButtonColorPicker, Object.assign({ IconComponent: IconComponent, tooltipLabel: tooltipLabel, value: currentColor, onChange: (newColor) => {
            editor === null || editor === void 0 ? void 0 : editor.chain().focus().setColor(newColor).run();
        }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().setColor("#000") }, menuButtonProps, { labels: Object.assign({ removeColorButton: "Reset" }, menuButtonProps.labels) })));
}
exports.default = MenuButtonTextColor;
