import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-code" />
import { Code } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonCode(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Code", tooltipShortcutKeys: ["mod", "E"], IconComponent: Code, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("code")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleCode(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleCode().run(), ...props }));
}
