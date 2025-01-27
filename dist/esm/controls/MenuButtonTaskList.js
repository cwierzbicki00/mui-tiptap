import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="@tiptap/extension-task-list" />
import { Checklist } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonTaskList(props) {
    var _a;
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Task checklist", tooltipShortcutKeys: ["mod", "Shift", "9"], IconComponent: Checklist, selected: (_a = editor === null || editor === void 0 ? void 0 : editor.isActive("taskList")) !== null && _a !== void 0 ? _a : false, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().toggleTaskList(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().toggleTaskList().run(), ...props }));
}
