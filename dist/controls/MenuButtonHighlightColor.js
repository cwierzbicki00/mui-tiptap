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
/// <reference types="@tiptap/extension-highlight" />
const context_1 = require("../context");
const icons_1 = require("../icons");
const MenuButtonColorPicker_1 = require("./MenuButtonColorPicker");
/**
 * Control for a user to choose a text highlight color, for the
 * @tiptap/extension-highlight when it's configured with
 * `Highlight.configure({ multicolor: true })`.
 *
 * See also MenuButtonHighlightToggle for a simple "on off" highlight toggle
 * control, for use with the Highlight extension when not using multicolor.
 */
function MenuButtonHighlightColor(_a) {
    var { defaultMarkColor = "#ffff00" } = _a, menuButtonProps = __rest(_a, ["defaultMarkColor"]);
    const editor = (0, context_1.useRichTextEditorContext)();
    const currentHighlightColor = (editor === null || editor === void 0 ? void 0 : editor.isActive("highlight"))
        ? // If there's no color set for the highlight (as can happen with the
            // highlight keyboard shortcut, toggleHighlight/setHighlight when no
            // explicit color is provided, and the "==thing==" syntax), fall back to
            // the provided defaultMarkColor
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            editor.getAttributes("highlight").color ||
                defaultMarkColor
        : "";
    return ((0, jsx_runtime_1.jsx)(MenuButtonColorPicker_1.MenuButtonColorPicker, Object.assign({ IconComponent: icons_1.FormatInkHighlighterNoBar, tooltipLabel: "Highlight color", tooltipShortcutKeys: ["mod", "Shift", "H"], value: currentHighlightColor, onChange: (newColor) => {
            if (newColor) {
                editor === null || editor === void 0 ? void 0 : editor.chain().focus().setHighlight({ color: newColor }).run();
            }
            else {
                editor === null || editor === void 0 ? void 0 : editor.chain().focus().unsetHighlight().run();
            }
        }, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleHighlight() }, menuButtonProps, { labels: Object.assign({ removeColorButton: "None", removeColorButtonTooltipTitle: "Remove highlighting from this text" }, menuButtonProps.labels) })));
}
exports.default = MenuButtonHighlightColor;
