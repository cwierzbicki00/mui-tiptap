"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwatchButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_material_1 = require("@mui/icons-material");
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
/**
 * Renders a button in the given color `value`, useful for showing and allowing
 * selecting a color preset.
 */
exports.ColorSwatchButton = (0, react_1.forwardRef)((_a, ref) => {
    var { value: colorValue, label, padding, active } = _a, buttonProps = __rest(_a, ["value", "label", "padding", "active"]);
    const { classes, cx, theme } = useStyles();
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ ref: ref, type: "button", style: { backgroundColor: colorValue, padding }, "aria-label": label !== null && label !== void 0 ? label : colorValue, value: colorValue }, buttonProps, { className: cx(classes.root, !colorValue && classes.colorNotSet, buttonProps.className), children: active && ((0, jsx_runtime_1.jsx)(icons_material_1.Check, { fontSize: "small", className: classes.activeIcon, style: {
                color: colorValue
                    ? theme.palette.getContrastText(colorValue)
                    : undefined,
            } })) })));
});
const useStyles = (0, mui_1.makeStyles)({ name: { ColorSwatchButton: exports.ColorSwatchButton } })((theme) => ({
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
exports.ColorSwatchButton.displayName = "ColorSwatchButton";
