import { jsx as _jsx } from "react/jsx-runtime";
import { FormatIndentIncrease } from "@mui/icons-material";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonIndent(props) {
    const editor = useRichTextEditorContext();
    return (_jsx(MenuButton, { tooltipLabel: "Indent", tooltipShortcutKeys: ["Tab"], IconComponent: FormatIndentIncrease, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) || !editor.can().sinkListItem("listItem"), onClick: () => editor === null || editor === void 0 ? void 0 : editor.chain().focus().sinkListItem("listItem").run(), ...props }));
}
