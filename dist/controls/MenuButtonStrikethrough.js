"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/// <reference types="@tiptap/extension-strike" />
const icons_material_1 = require("@mui/icons-material");
const context_1 = require("../context");
const MenuButton_1 = __importDefault(require("./MenuButton"));
function MenuButtonStrikethrough(props) {
    var _a;
    const editor = (0, context_1.useRichTextEditorContext)();
    return ((0, jsx_runtime_1.jsx)(MenuButton_1.default, Object.assign({ tooltipLabel: "Strikethrough", tooltipShortcutKeys: ["mod", "Shift", "X"], IconComponent: icons_material_1.StrikethroughS, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("strike")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleStrike(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleStrike().run() }, props)));
}
exports.default = MenuButtonStrikethrough;
