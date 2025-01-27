import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-blockquote" />
import { FormatQuote } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonBlockquote(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Blockquote", tooltipShortcutKeys: ["mod", "Shift", "B"], IconComponent: FormatQuote, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("blockquote")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleBlockquote(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleBlockquote().run(), ...props }));
}
