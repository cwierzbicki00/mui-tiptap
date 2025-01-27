import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-subscript" />
import { Subscript } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonSubscript(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Subscript", tooltipShortcutKeys: ["mod", ","], IconComponent: Subscript, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("subscript")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleSubscript(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleSubscript().run(), ...props }));
}
