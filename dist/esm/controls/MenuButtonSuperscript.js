import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-superscript" />
import { Superscript } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonSuperscript(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Superscript", tooltipShortcutKeys: ["mod", "."], IconComponent: Superscript, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("superscript")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleSuperscript(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleSuperscript().run(), ...props }));
}
