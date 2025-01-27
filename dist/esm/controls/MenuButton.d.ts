import { type ToggleButtonProps } from "@mui/material";
import type { ReactNode, RefObject } from "react";
import type { Except, SetOptional } from "type-fest";
import { type MenuButtonTooltipProps } from "./MenuButtonTooltip";
export interface MenuButtonProps extends SetOptional<Except<ToggleButtonProps, "ref" | "children">, "value"> {
    /**
     * The label that will be displayed in a tooltip when hovering. Also used as
     * the underlying ToggleButton `value` if a separate `value` prop is not
     * included.
     */
    tooltipLabel: MenuButtonTooltipProps["label"];
    /**
     * (Optional) An array of the keyboard shortcut keys that trigger this action
     * will be displayed in a tooltip when hovering. If empty, no keyboard
     * shortcut is displayed.
     *
     * Use the literal string "mod" to represent Cmd on Mac and Ctrl on Windows
     * and Linux.
     *
     * Example: ["mod", "Shift", "7"] is the array that should be provided as the
     * combination for toggling an ordered list.
     *
     * For the list of pre-configured Tiptap shortcuts, see
     * https://tiptap.dev/api/keyboard-shortcuts.
     */
    tooltipShortcutKeys?: MenuButtonTooltipProps["shortcutKeys"];
    /**
     * The icon component to use for the button, rendered as button `children` if
     * provided. Must accept a className.
     */
    IconComponent?: React.ElementType<{
        className: string;
    }>;
    /**
     * Override the default button content instead of displaying the
     * <IconComponent />.
     */
    children?: ReactNode;
    /** Attaches a `ref` to the ToggleButton's root button element. */
    buttonRef?: RefObject<HTMLButtonElement>;
}
export declare const MENU_BUTTON_FONT_SIZE_DEFAULT = "1.25rem";
/**
 * A general-purpose base component for showing an editor control for use in a
 * menu.
 */
export default function MenuButton({ tooltipLabel, tooltipShortcutKeys, IconComponent, buttonRef, children, ...toggleButtonProps }: MenuButtonProps): import("react/jsx-runtime").JSX.Element;
