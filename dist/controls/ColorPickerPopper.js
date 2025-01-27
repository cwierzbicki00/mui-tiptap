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
exports.ColorPickerPopper = exports.ColorPickerPopperBody = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const styles_1 = require("../styles");
const ColorPicker_1 = require("./ColorPicker");
// NOTE: This component's state logic is able to be kept simple because the
// component is unmounted whenever the outer Popper is not open, so we don't
// have to worry about resetting the state ourselves when the user cancels, for
// instance.
function ColorPickerPopperBody({ value, onCancel, onSave, swatchColors, labels = {}, ColorPickerProps, }) {
    const { removeColorButton = "None", removeColorButtonTooltipTitle = "", cancelButton = "Cancel", saveButton = "OK", } = labels;
    // Because color can change rapidly as the user drags the color in the
    // ColorPicker gradient, we'll wait until "Save" to call the onSave prop, and
    // we'll store an internal localColor until then. (This could alternatively be
    // implemented such that we "save" directly whenever a swatch preset is
    // clicked, by looking at the `source` from `ColorPicker.onChange`, but it may
    // be useful to tweak a color from a swatch before saving.)
    const [localColor, setLocalColor] = (0, react_1.useState)(value);
    // Update our internal value whenever the `color` prop changes (since this is
    // a controlled component)
    (0, react_1.useEffect)(() => {
        setLocalColor(value);
    }, [value]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ColorPicker_1.ColorPicker, Object.assign({ swatchColors: swatchColors, value: localColor, onChange: (newColor) => {
                    setLocalColor(newColor);
                }, labels: labels }, ColorPickerProps)), (0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: "row", justifyContent: "space-between", sx: { mt: 1 }, children: [(0, jsx_runtime_1.jsx)(material_1.Tooltip, { title: removeColorButtonTooltipTitle, arrow: true, children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: () => {
                                // No color being specified can mean "none" in some scenarios
                                // (e.g. highlighting) and "default color"/reset in others (text)
                                onSave("");
                            }, size: "small", children: removeColorButton }) }), (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: onCancel, size: "small", children: cancelButton }), (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: () => {
                            onSave(localColor);
                        }, size: "small", children: saveButton })] })] }));
}
exports.ColorPickerPopperBody = ColorPickerPopperBody;
const useStyles = (0, mui_1.makeStyles)({ name: { ColorPickerPopper } })({
    root: {
        zIndex: styles_1.Z_INDEXES.BUBBLE_MENU,
        // This width seems to work well to allow exactly 8 swatches, as well as the
        // default button content
        width: 235,
    },
});
/**
 * Renders the ColorPicker inside of a Popper interface, for use with the
 * MenuButtonColorPicker.
 */
function ColorPickerPopper(_a) {
    var { value, onSave, onCancel, swatchColors, ColorPickerProps, labels } = _a, popperProps = __rest(_a, ["value", "onSave", "onCancel", "swatchColors", "ColorPickerProps", "labels"]);
    const { classes, cx } = useStyles();
    return ((0, jsx_runtime_1.jsx)(material_1.Popper, Object.assign({ transition: true, placement: "bottom-start" }, popperProps, { className: cx(classes.root, popperProps.className), children: ({ TransitionProps }) => ((0, jsx_runtime_1.jsx)(material_1.Fade, Object.assign({}, TransitionProps, { timeout: 100, children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(material_1.ClickAwayListener
                // Listen for "leading" events (the start of a click or touch)
                // rather than the trailing events (the end of a click) which is
                // the default, since it's easy to accidentally drag the
                // color-picker saturation/hue gradients beyond the edge of the
                // Popper, and we don't want to close in that situation.
                , { 
                    // Listen for "leading" events (the start of a click or touch)
                    // rather than the trailing events (the end of a click) which is
                    // the default, since it's easy to accidentally drag the
                    // color-picker saturation/hue gradients beyond the edge of the
                    // Popper, and we don't want to close in that situation.
                    mouseEvent: "onMouseDown", touchEvent: "onTouchStart", onClickAway: onCancel, children: (0, jsx_runtime_1.jsx)(material_1.Paper, { elevation: 5, sx: { p: 2.5, pb: 1 }, children: (0, jsx_runtime_1.jsx)(ColorPickerPopperBody, { value: value || "", onSave: onSave, onCancel: onCancel, swatchColors: swatchColors, ColorPickerProps: ColorPickerProps, labels: labels }) }) }) }) }))) })));
}
exports.ColorPickerPopper = ColorPickerPopper;
