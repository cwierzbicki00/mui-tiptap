/// <reference types="react" />
export type MenuBarClasses = ReturnType<typeof useStyles>["classes"];
export type MenuBarProps = {
    /**
     * Whether to hide the menu bar. When changing between false/true, uses the
     * collapse animation. By default false
     */
    hide?: boolean;
    /**
     * If true, the menu bar will not "stick" above the editor content on the
     * page as you scroll down past where it normally sits.
     */
    disableSticky?: boolean;
    /**
     * The menu bar's sticky `top` offset, when `disableSticky=false`.
     *
     * Useful if there's other fixed/sticky content above the editor (like an app
     * navigation toolbar). By default 0.
     */
    stickyOffset?: number;
    /** The set of controls (buttons, etc) to include in the menu bar. */
    children?: React.ReactNode;
    /** Class applied to the outermost `root` element. */
    className?: string;
    /** Override or extend existing styles. */
    classes?: Partial<MenuBarClasses>;
};
declare const useStyles: (params: {
    stickyOffset?: number | undefined;
}, muiStyleOverridesParams?: {
    props: Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"content" | "sticky" | "root" | "nonSticky", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
/**
 * A collapsible, optionally-sticky container for showing editor controls atop
 * the editor content.
 */
export default function MenuBar({ hide, disableSticky, stickyOffset, children, className, classes: overrideClasses, }: MenuBarProps): import("react/jsx-runtime").JSX.Element;
export {};
