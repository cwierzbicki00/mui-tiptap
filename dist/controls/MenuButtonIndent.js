"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_material_1 = require("@mui/icons-material");
const context_1 = require("../context");
const MenuButton_1 = __importDefault(require("./MenuButton"));
function MenuButtonIndent(props) {
    const editor = (0, context_1.useRichTextEditorContext)();
    return ((0, jsx_runtime_1.jsx)(MenuButton_1.default, Object.assign({ tooltipLabel: "Indent", tooltipShortcutKeys: ["Tab"], IconComponent: icons_material_1.FormatIndentIncrease, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().sinkListItem("listItem"), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().sinkListItem("listItem").run() }, props)));
}
exports.default = MenuButtonIndent;
