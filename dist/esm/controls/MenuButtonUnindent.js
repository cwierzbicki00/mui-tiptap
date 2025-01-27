import { jsx as _jsx } from "react/jsx-runtime";
import { FormatIndentDecrease } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonUnindent(props) {
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Unindent", tooltipShortcutKeys: ["Shift", "Tab"], IconComponent: FormatIndentDecrease, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().liftListItem("listItem"), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().liftListItem("listItem").run(), ...props }));
}
