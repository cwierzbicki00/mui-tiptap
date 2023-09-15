"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const mui_1 = require("tss-react/mui");
const styles_1 = require("./styles");
const menuBarClasses = (0, styles_1.getUtilityClasses)(MenuBar.name, [
    "root",
    "sticky",
    "nonSticky",
    "content",
]);
const useStyles = (0, mui_1.makeStyles)({
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
            zIndex: styles_1.Z_INDEXES.MENU_BAR,
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
function MenuBar({ hide, disableSticky, stickyOffset, children, className, classes: overrideClasses, }) {
    const { classes, cx } = useStyles({ stickyOffset }, {
        props: { classes: overrideClasses },
    });
    return ((0, jsx_runtime_1.jsx)(material_1.Collapse, { in: !hide, 
        // For performance reasons, we set unmountOnExit to avoid rendering the
        // menu bar unless it's needed/shown
        unmountOnExit: true, 
        // Note that we have to apply the sticky CSS classes to the container
        // (rather than the menu bar itself) in order for it to behave
        // properly
        className: cx(menuBarClasses.root, classes.root, disableSticky
            ? [menuBarClasses.nonSticky, classes.nonSticky]
            : [menuBarClasses.sticky, classes.sticky], className), children: (0, jsx_runtime_1.jsx)("div", { className: classes.content, children: children }) }));
}
exports.default = MenuBar;
