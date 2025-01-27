import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "@mui/icons-material";
import { useRef } from "react";
import { useRichTextEditorContext } from "../context";
import MenuButton from "./MenuButton";
export default function MenuButtonEditLink(props) {
    const editor = useRichTextEditorContext();
    const buttonRef = useRef(null);
    return (_jsx(MenuButton, { buttonRef: buttonRef, tooltipLabel: "Link", tooltipShortcutKeys: ["mod", "Shift", "U"], IconComponent: Link, selected: editor === null || editor === void 0 ? void 0 : editor.isActive("link"), disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable), onClick: () => 
        // When clicking the button to open the bubble menu, we'll place the
        // menu below the button
        editor === null || editor === void 0 ? void 0 : editor.commands.openLinkBubbleMenu({
            anchorEl: buttonRef.current,
            placement: "bottom",
        }), ...props }));
}
