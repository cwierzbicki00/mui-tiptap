"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_material_1 = require("@mui/icons-material");
const context_1 = require("../context");
const MenuButton_1 = __importDefault(require("./MenuButton"));
/**
 * A control button removes all inline formatting of marks by calling Tiptap’s
 * unsetAllMarks command (https://tiptap.dev/api/commands/unset-all-marks).
 */
function MenuButtonRemoveFormatting(props) {
    const editor = (0, context_1.useRichTextEditorContext)();
    return ((0, jsx_runtime_1.jsx)(MenuButton_1.default, Object.assign({ tooltipLabel: "Remove inline formatting", IconComponent: icons_material_1.FormatClear, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().unsetAllMarks(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().unsetAllMarks().run() }, props)));
}
exports.default = MenuButtonRemoveFormatting;
