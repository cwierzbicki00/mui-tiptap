import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-bullet-list" />
import { FormatListBulleted } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonBulletedList(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Bulleted list", tooltipShortcutKeys: ["mod", "Shift", "8"], IconComponent: FormatListBulleted, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("bulletList")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleBulletList(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleBulletList().run(), ...props }));
}
