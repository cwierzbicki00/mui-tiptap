import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-strike" />
import { StrikethroughS } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonStrikethrough(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Strikethrough", tooltipShortcutKeys: ["mod", "Shift", "X"], IconComponent: StrikethroughS, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("strike")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleStrike(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleStrike().run(), ...props }));
}
