import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-bold" />
import { FormatBold } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonBold(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Bold", tooltipShortcutKeys: ["mod", "B"], IconComponent: FormatBold, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("bold")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleBold(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleBold().run(), ...props }));
}
