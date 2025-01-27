import { jsx as _jsx } from "react/jsx-runtime";
import { Fade, Paper, Popper, useTheme, } from "@mui/material";
import { isNodeSelection, posToDOMRect } from "@tiptap/core";
import { useCallback } from "react";
import { makeStyles } from "tss-react/mui";
import { Z_INDEXES, getUtilityClasses } from "./styles";
const controlledBubbleMenuClasses = getUtilityClasses(ControlledBubbleMenu.name, ["root", "paper"]);
const useStyles = makeStyles({ name: { ControlledBubbleMenu } })((theme) => ({
    root: {
        zIndex: Z_INDEXES.BUBBLE_MENU,
    },
    paper: {
        backgroundColor: theme.palette.background.default,
    },
}));
// The `BubbleMenu` React component provided by Tiptap in @tiptap/react and the
// underlying BubbleMenuPlugin don't work very well in practice. There are two
// primary problems:
// 1) BubbleMenu places its tippy DOM element *within* the editor DOM structure,
//    so it can get clipped by the edges of the editor, especially noticeable
//    when there is no content in the editor yet (so it'll get sliced off at the
//    top of the editor). It's not possible to use a React Portal there as a
//    workaround due to the way in which the element is dynamically
//    created/destroyed via tippy inside Tiptap, preventing interactivity (see
//    https://github.com/ueberdosis/tiptap/issues/2292).
// 2) The BubbleMenu visibility cannot be controlled programmatically. Its
//    `shouldShow` callback only runs when editor internal state changes, so we
//    can't control it beyond that without wacky hacks. See the issue here
//    https://github.com/ueberdosis/tiptap/issues/2305.
//
// This alternative component has a simpler API, with just an `open` flag, which
// properly responds to all changes in React props, and it uses MUI's Popper
// rather than relying on tippy, so we inherently get "Portal" behavior and
// don't have to worry about visual clipping.
export default function ControlledBubbleMenu({ editor, open, className, classes: overrideClasses = {}, children, anchorEl, container, disablePortal, placement = "top", fallbackPlacements = [
    "top",
    "bottom",
    "top-start",
    "bottom-start",
    "top-end",
    "bottom-end",
], flipPadding = 8, PaperProps, }) {
    const { classes, cx } = useStyles(undefined, {
        props: { classes: overrideClasses },
    });
    const theme = useTheme();
    const defaultAnchorEl = useCallback(() => {
        // The logic here is taken from the positioning implementation in Tiptap's BubbleMenuPlugin
        // https://github.com/ueberdosis/tiptap/blob/16bec4e9d0c99feded855b261edb6e0d3f0bad21/packages/extension-bubble-menu/src/bubble-menu-plugin.ts#L183-L193
        const { ranges } = editor.state.selection;
        const from = Math.min(...ranges.map((range) => range.$from.pos));
        const to = Math.max(...ranges.map((range) => range.$to.pos));
        return {
            getBoundingClientRect: () => {
                if (isNodeSelection(editor.state.selection)) {
                    const node = editor.view.nodeDOM(from);
                    if (node instanceof HTMLElement) {
                        return node.getBoundingClientRect();
                    }
                }
                return posToDOMRect(editor.view, from, to);
            },
        };
    }, [editor]);
    return (_jsx(Popper, { open: open, placement: placement, modifiers: [
            {
                name: "offset",
                options: {
                    // Add a slight vertical offset for the popper from the current selection
                    offset: [0, 6],
                },
            },
            {
                name: "flip",
                enabled: true,
                options: {
                    // We'll reposition (to one of the below fallback placements) whenever our Popper goes
                    // outside of the editor. (This is necessary since our children aren't actually rendered
                    // here, but instead with a portal, so the editor DOM node isn't a parent.)
                    boundary: editor.options.element,
                    fallbackPlacements: fallbackPlacements,
                    padding: flipPadding,
                },
            },
            {
                // Don't allow the bubble menu to overflow outside of the its clipping parents
                // or viewport
                name: "preventOverflow",
                enabled: true,
                options: {
                    // Check for overflow in the y-axis direction instead of x-axis direction
                    // (the default for top and bottom placements), since that's likely to be
                    // the more problematic direction when scrolling. (Theoretically it would be
                    // nice to have it check all axes which seemingly could be done with
                    // `mainAxis: false`, but for an element that is wide and tall, this ends up
                    // not placing the Popper in a visible location, so the behavior of
                    // `altAxis: true` seems preferable.)
                    altAxis: true,
                    boundary: "clippingParents",
                    padding: 8,
                },
            },
            // If we want to add an arrow to the Popper, we'll seemingly need to implement a lot
            // of custom styling and whatnot, like in
            // https://github.com/mui-org/material-ui/blob/84671ab1d6db4f6901d60206f2375bd51862c66e/docs/src/pages/components/popper/ScrollPlayground.js#L19-L103,
            // which is probably not worth it
        ], anchorEl: anchorEl !== null && anchorEl !== void 0 ? anchorEl : defaultAnchorEl, className: cx(controlledBubbleMenuClasses.root, classes.root, className), container: container, disablePortal: disablePortal, transition: true, children: ({ TransitionProps }) => (_jsx(Fade, { ...TransitionProps, timeout: {
                enter: theme.transitions.duration.enteringScreen,
                // Exit immediately rather than using a transition, since the
                // content of the bubble menu will usually be updating as the editor
                // content and thus `open` state changes, and we don't want it to
                // "flash" with incorrect content during the transition
                exit: 0,
            }, children: _jsx(Paper, { elevation: 7, ...PaperProps, className: cx(controlledBubbleMenuClasses.paper, classes.paper, PaperProps === null || PaperProps === void 0 ? void 0 : PaperProps.className), children: children }) })) }));
}
