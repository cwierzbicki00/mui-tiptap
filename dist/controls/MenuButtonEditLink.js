"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_material_1 = require("@mui/icons-material");
const react_1 = require("react");
const context_1 = require("../context");
const MenuButton_1 = __importDefault(require("./MenuButton"));
function MenuButtonEditLink(props) {
    const editor = (0, context_1.useRichTextEditorContext)();
    const buttonRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsx)(MenuButton_1.default, Object.assign({ buttonRef: buttonRef, tooltipLabel: "Link", tooltipShortcutKeys: ["mod", "Shift", "U"], IconComponent: icons_material_1.Link, selected: editor === null || editor === void 0 ? void 0 : editor.isActive("link"), disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable), onClick: () => 
        // When clicking the button to open the bubble menu, we'll place the
        // menu below the button
        editor === null || editor === void 0 ? void 0 : editor.commands.openLinkBubbleMenu({
            anchorEl: buttonRef.current,
            placement: "bottom",
        }) }, props)));
}
exports.default = MenuButtonEditLink;
