import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-italic" />
import { FormatItalic } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonItalic(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Italic", tooltipShortcutKeys: ["mod", "I"], IconComponent: FormatItalic, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("italic")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleItalic(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleItalic().run(), ...props }));
}
