"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/// <reference types="@tiptap/extension-bullet-list" />
const icons_material_1 = require("@mui/icons-material");
const context_1 = require("../context");
const MenuButton_1 = __importDefault(require("./MenuButton"));
function MenuButtonBulletedList(props) {
    var _a;
    const editor = (0, context_1.useRichTextEditorContext)();
    return ((0, jsx_runtime_1.jsx)(MenuButton_1.default, Object.assign({ tooltipLabel: "Bulleted list", tooltipShortcutKeys: ["mod", "Shift", "8"], IconComponent: icons_material_1.FormatListBulleted, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("bulletList")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleBulletList(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleBulletList().run() }, props)));
}
exports.default = MenuButtonBulletedList;
