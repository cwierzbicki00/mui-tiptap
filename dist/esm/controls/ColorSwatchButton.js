import { jsx as _jsx } from "react/jsx-runtime";
import { Check } from "@mui/icons-material";
import { forwardRef, } from "react";
import { makeStyles } from "tss-react/mui";
/**
 * Renders a button in the given color `value`, useful for showing and allowing
 * selecting a color preset.
 */
export const ColorSwatchButton = forwardRef(({ value: colorValue, label, padding, active, ...buttonProps }, ref) => {
    const { classes, cx, theme } = useStyles();
    return (_jsx("button", { ref: ref, type: "button", style: { backgroundColor: colorValue, padding }, "aria-label": label !== null && label !== void 0 ? label : colorValue, value: colorValue, ...buttonProps, className: cx(classes.root, !colorValue && classes.colorNotSet, buttonProps.className), children: active && (_jsx(Check, { fontSize: "small", className: classes.activeIcon, style: {
                color: colorValue
                    ? theme.palette.getContrastText(colorValue)
                    : undefined,
            } })) }));
});
const useStyles = makeStyles({ name: { ColorSwatchButton } })((theme) => ({
    root: {
        height: theme.spacing(2.5),
        width: theme.spacing(2.5),
        minWidth: theme.spacing(2.5),
        borderRadius: theme.shape.borderRadius,
        borderColor: theme.palette.mode === "dark"
            ? theme.palette.grey[700]
            : theme.palette.grey[400],
        borderStyle: "solid",
        borderWidth: 1,
        cursor: "pointer",
        // Use background-clip with content-box so that if a `padding` is specified by the
        // user, it adds a gap between the color and the border.
        padding: 0,
        backgroundClip: "content-box",
    },
    activeIcon: {
        height: "100%",
        width: "80%",
        verticalAlign: "middle",
    },
    colorNotSet: {
        // To indicate that a color hasn't been chosen, we'll use a checkerboard pattern
        // (https://stackoverflow.com/a/65129916/4543977)
        background: `repeating-conic-gradient(
      ${theme.palette.grey[400]} 0% 25%, ${theme.palette.common.white} 0% 50%)
      50% / 12px 12px`,
        backgroundClip: "content-box",
    },
}));
ColorSwatchButton.displayName = "ColorSwatchButton";
