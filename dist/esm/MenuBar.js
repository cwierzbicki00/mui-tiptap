import { jsx as _jsx } from "react/jsx-runtime";
import { Collapse } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Z_INDEXES, getUtilityClasses } from "./styles";
const menuBarClasses = getUtilityClasses(MenuBar.name, [
    "root",
    "sticky",
    "nonSticky",
    "content",
]);
const useStyles = makeStyles({
    name: { MenuBar },
})((theme, { stickyOffset }) => {
    return {
        root: {
            borderBottomColor: theme.palette.divider,
            borderBottomStyle: "solid",
            borderBottomWidth: 1,
        },
        sticky: {
            position: "sticky",
            top: stickyOffset !== null && stickyOffset !== void 0 ? stickyOffset : 0,
            zIndex: Z_INDEXES.MENU_BAR,
            background: theme.palette.background.default,
        },
        nonSticky: {},
        content: {},
    };
});
/**
 * A collapsible, optionally-sticky container for showing editor controls atop
 * the editor content.
 */
export default function MenuBar({ hide, disableSticky, stickyOffset, children, className, classes: overrideClasses, }) {
    const { classes, cx } = useStyles({ stickyOffset }, {
        props: { classes: overrideClasses },
    });
    return (_jsx(Collapse, { in: !hide, 
        // For performance reasons, we set unmountOnExit to avoid rendering the
        // menu bar unless it's needed/shown
        unmountOnExit: true, 
        // Note that we have to apply the sticky CSS classes to the container
        // (rather than the menu bar itself) in order for it to behave
        // properly
        className: cx(menuBarClasses.root, classes.root, disableSticky
            ? [menuBarClasses.nonSticky, classes.nonSticky]
            : [menuBarClasses.sticky, classes.sticky], className), children: _jsx("div", { className: classes.content, children: children }) }));
}
