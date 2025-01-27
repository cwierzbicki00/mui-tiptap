import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, ClickAwayListener, Fade, Paper, Popper, Stack, Tooltip, } from "@mui/material";
import { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Z_INDEXES } from "../styles";
import { ColorPicker } from "./ColorPicker";
// NOTE: This component's state logic is able to be kept simple because the
// component is unmounted whenever the outer Popper is not open, so we don't
// have to worry about resetting the state ourselves when the user cancels, for
// instance.
export function ColorPickerPopperBody({ value, onCancel, onSave, swatchColors, labels = {}, ColorPickerProps, }) {
    const { removeColorButton = "None", removeColorButtonTooltipTitle = "", cancelButton = "Cancel", saveButton = "OK", } = labels;
    // Because color can change rapidly as the user drags the color in the
    // ColorPicker gradient, we'll wait until "Save" to call the onSave prop, and
    // we'll store an internal localColor until then. (This could alternatively be
    // implemented such that we "save" directly whenever a swatch preset is
    // clicked, by looking at the `source` from `ColorPicker.onChange`, but it may
    // be useful to tweak a color from a swatch before saving.)
    const [localColor, setLocalColor] = useState(value);
    // Update our internal value whenever the `color` prop changes (since this is
    // a controlled component)
    useEffect(() => {
        setLocalColor(value);
    }, [value]);
    return (_jsxs(_Fragment, { children: [_jsx(ColorPicker, { swatchColors: swatchColors, value: localColor, onChange: (newColor) => {
                    setLocalColor(newColor);
                }, labels: labels, ...ColorPickerProps }), _jsxs(Stack, { direction: "row", justifyContent: "space-between", sx: { mt: 1 }, children: [_jsx(Tooltip, { title: removeColorButtonTooltipTitle, arrow: true, children: _jsx(Button, { onClick: () => {
                                // No color being specified can mean "none" in some scenarios
                                // (e.g. highlighting) and "default color"/reset in others (text)
                                onSave("");
                            }, size: "small", children: removeColorButton }) }), _jsx(Button, { onClick: onCancel, size: "small", children: cancelButton }), _jsx(Button, { onClick: () => {
                            onSave(localColor);
                        }, size: "small", children: saveButton })] })] }));
}
const useStyles = makeStyles({ name: { ColorPickerPopper } })({
    root: {
        zIndex: Z_INDEXES.BUBBLE_MENU,
        // This width seems to work well to allow exactly 8 swatches, as well as the
        // default button content
        width: 235,
    },
});
/**
 * Renders the ColorPicker inside of a Popper interface, for use with the
 * MenuButtonColorPicker.
 */
export function ColorPickerPopper({ value, onSave, onCancel, swatchColors, ColorPickerProps, labels, ...popperProps }) {
    const { classes, cx } = useStyles();
    return (_jsx(Popper, { transition: true, placement: "bottom-start", ...popperProps, className: cx(classes.root, popperProps.className), children: ({ TransitionProps }) => (_jsx(Fade, { ...TransitionProps, timeout: 100, children: _jsx("div", { children: _jsx(ClickAwayListener
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
                    mouseEvent: "onMouseDown", touchEvent: "onTouchStart", onClickAway: onCancel, children: _jsx(Paper, { elevation: 5, sx: { p: 2.5, pb: 1 }, children: _jsx(ColorPickerPopperBody, { value: value || "", onSave: onSave, onCancel: onCancel, swatchColors: swatchColors, ColorPickerProps: ColorPickerProps, labels: labels }) }) }) }) })) }));
}
