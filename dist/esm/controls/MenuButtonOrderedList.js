import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-ordered-list" />
import { FormatListNumbered } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonOrderedList(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Ordered list", tooltipShortcutKeys: ["mod", "Shift", "7"], IconComponent: FormatListNumbered, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("orderedList")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleOrderedList(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleOrderedList().run(), ...props }));
}
