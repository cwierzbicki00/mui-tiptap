"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const mui_1 = require("tss-react/mui");
const styles_1 = require("./styles");
const fieldContainerClasses = (0, styles_1.getUtilityClasses)(FieldContainer.name, ["root", "outlined", "standard", "focused", "disabled", "notchedOutline"]);
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
const useStyles = (0, mui_1.makeStyles)({
    name: { FieldContainer },
    uniqId: "Os7ZPW", // https://docs.tss-react.dev/nested-selectors#ssr
})((theme, _params, classes) => {
    // Based on the concept behind and styles of OutlinedInput and NotchedOutline
    // styles here, to imitate outlined input appearance in material-ui
    // https://github.com/mui-org/material-ui/blob/a4972c5931e637611f6421ed2a5cc3f78207cbb2/packages/material-ui/src/OutlinedInput/OutlinedInput.js#L9-L37
    // https://github.com/mui/material-ui/blob/a4972c5931e637611f6421ed2a5cc3f78207cbb2/packages/material-ui/src/OutlinedInput/NotchedOutline.js
    return {
        root: {},
        // Class/styles applied to the root element if the component is using the
        // "outlined" variant
        outlined: {
            borderRadius: theme.shape.borderRadius,
            padding: 1,
            position: "relative",
            [`&:hover .${classes.notchedOutline}`]: {
                borderColor: theme.palette.text.primary,
            },
            [`&.${classes.focused} .${classes.notchedOutline}`]: {
                borderColor: theme.palette.primary.main,
                borderWidth: 2,
            },
            [`&.${classes.disabled} .${classes.notchedOutline}`]: {
                borderColor: theme.palette.action.disabled,
            },
        },
        // Class/styles applied to the root element if the component is using the
        // "standard" variant
        standard: {},
        // Class/styles applied to the root element if the component is focused (if the
        // `focused` prop is true)
        focused: {},
        // Styles applied to the root element if the component is disabled (if the
        // `disabled` prop is true)
        disabled: {},
        notchedOutline: {
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            borderColor: theme.palette.mode === "light"
                ? "rgba(0, 0, 0, 0.23)"
                : "rgba(255, 255, 255, 0.23)",
            borderStyle: "solid",
            borderWidth: 1,
            pointerEvents: "none",
            overflow: "hidden",
            zIndex: styles_1.Z_INDEXES.NOTCHED_OUTLINE,
        },
    };
});
/**
 * Renders an element with classes and styles that correspond to the state and
 * style-variant of a user-input field, the content of which should be passed in as
 * `children`.
 */
function FieldContainer({ variant = "outlined", children, focused, disabled, classes: overrideClasses = {}, className, }) {
    const { classes, cx } = useStyles(undefined, {
        props: { classes: overrideClasses },
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: cx(fieldContainerClasses.root, classes.root, variant === "outlined"
            ? [fieldContainerClasses.outlined, classes.outlined]
            : [fieldContainerClasses.standard, classes.standard], 
        // Note that we want focused and disabled styles of equal specificity to
        // trump default root/outlined/standard styles, so they should be defined
        // in this order
        focused && [fieldContainerClasses.focused, classes.focused], disabled && [fieldContainerClasses.disabled, classes.disabled], className), children: [children, variant === "outlined" && ((0, jsx_runtime_1.jsx)("div", { className: cx(fieldContainerClasses.notchedOutline, classes.notchedOutline), "aria-hidden": true }))] }));
}
exports.default = FieldContainer;
