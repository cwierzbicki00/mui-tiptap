/// <reference types="react" />
import { type PaperProps, type PopperProps } from "@mui/material";
import { type Editor } from "@tiptap/core";
export type ControlledBubbleMenuClasses = ReturnType<typeof useStyles>["classes"];
export type ControlledBubbleMenuProps = {
    editor: Editor;
    open: boolean;
    children: React.ReactNode;
    /**
     * To override the anchor element to which the bubble menu is positioned.
     * By default, uses the current cursor position and selection.
     */
    anchorEl?: PopperProps["anchorEl"];
    /**
     * To override the HTML element into which the bubble menu Popper portal
     * children (DOM content) are appended. Uses MUI's Popper default if not
     * provided (the body of the top-level document object).
     *
     * Can be useful to override with a reference to a modal/dialog's element
     * (like the `ref` of a MUI <Dialog />), for instance, so that this bubble
     * menu can still appear on top of that, without needing to use messy z-index
     * overrides.
     *
     * Example:
     *
     * <Dialog open={open} ref={dialogRef}>
     *   <RichTextEditor ...>
     *     {() => (
     *       <>
     *         <MyControlledBubbleMenu container={dialogRef.current} />
     *         <LinkBubbleMenu container={dialogRef.current} />
     *         <TableBubbleMenu container={dialogRef.current} />
     *       </>
     *     )}
     *   </RichTextEditor>
     * </Dialog>
     */
    container?: PopperProps["container"];
    /**
     * If true, the `children` will be under the DOM hierarchy of the parent
     * component of the ControlledBubbleMenu.
     */
    disablePortal?: PopperProps["disablePortal"];
    /**
     * The placement to use for this bubble menu. By default "top". See
     * https://popper.js.org/docs/v2/constructors/#options (and
     * https://mui.com/material-ui/api/popper/).
     */
    placement?: PopperProps["placement"];
    /**
     * Alternate consecutive placements to try if the first placement does not
     * fit. By default tries other bottom and top placements (avoiding sides,
     * since the editor caret will tend to move horizontally as a user
     * types/interacts).
     */
    fallbackPlacements?: PopperProps["placement"][];
    /**
     * Applies virtual padding to the element when testing whether to flip the
     * placement. (i.e. if the element had the additional padding, would it exceed
     * its boundary and so need to be flipped?) See
     * https://popper.js.org/docs/v2/modifiers/flip/#padding and
     * https://popper.js.org/docs/v2/utils/detect-overflow/#padding. By default
     * 8px on all sides.
     */
    flipPadding?: number | {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    /** Class applied to the root Popper element. */
    className?: string;
    /** Override or extend existing styles. */
    classes?: Partial<ControlledBubbleMenuClasses>;
    /**
     * Override the default props for the Paper containing the bubble menu
     * content.
     */
    PaperProps?: Partial<PaperProps>;
};
declare const useStyles: (params: void, muiStyleOverridesParams?: {
    props: Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "paper", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
export default function ControlledBubbleMenu({ editor, open, className, classes: overrideClasses, children, anchorEl, container, disablePortal, placement, fallbackPlacements, flipPadding, PaperProps, }: ControlledBubbleMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
