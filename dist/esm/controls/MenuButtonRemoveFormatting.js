import { jsx as _jsx } from "react/jsx-runtime";
import { FormatClear } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
/**
 * A control button removes all inline formatting of marks by calling Tiptap’s
 * unsetAllMarks command (https://tiptap.dev/api/commands/unset-all-marks).
 */
export default function MenuButtonRemoveFormatting(props) {
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Remove inline formatting", IconComponent: FormatClear, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().unsetAllMarks(), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().unsetAllMarks().run(), ...props }));
}
