import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { HexAlphaColorPicker, HexColorPicker } from "react-colorful";
import { makeStyles } from "tss-react/mui";
import { colorToHex as colorToHexDefault } from "../utils/color";
import { ColorSwatchButton } from "./ColorSwatchButton";
const useStyles = makeStyles({ name: { ColorPicker } })((theme) => ({
    gradientPicker: {
        // Increase specificity to override the styles
        "&&": {
            width: "100%",
        },
    },
    colorTextInput: {
        marginTop: theme.spacing(1),
    },
    swatchContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        marginTop: theme.spacing(1),
    },
}));
/**
 * Component for the user to choose a color from a gradient-based hue/saturation
 * (and optionally alpha) color-picker or from the given swatch colors.
 */
export function ColorPicker({ value, onChange, swatchColors, colorToHex = colorToHexDefault, disableAlpha = false, labels = {}, }) {
    const { classes } = useStyles();
    const { textFieldPlaceholder = 'Ex: "#7cb5ec"' } = labels;
    const inputRef = useRef(null);
    useEffect(() => {
        // Any time the color changes external to the text input, update the text
        // input to show the latest value, unless the input is currently focused
        // (since the user may be in the middle of editing)
        if (inputRef.current && inputRef.current !== document.activeElement) {
            inputRef.current.value = value;
        }
    }, [value]);
    const swatchColorObjects = (swatchColors !== null && swatchColors !== void 0 ? swatchColors : []).map((swatchColor) => typeof swatchColor === "string" ? { value: swatchColor } : swatchColor);
    const colorValueAsHex = colorToHex(value);
    return (_jsxs(_Fragment, { children: [disableAlpha ? (_jsx(HexColorPicker, { color: colorValueAsHex !== null && colorValueAsHex !== void 0 ? colorValueAsHex : "#000000", onChange: (color) => onChange(color, "gradient"), className: classes.gradientPicker })) : (_jsx(HexAlphaColorPicker, { color: colorValueAsHex !== null && colorValueAsHex !== void 0 ? colorValueAsHex : "#000000", onChange: (color) => onChange(color, "gradient"), className: classes.gradientPicker })), _jsx(TextField, { placeholder: textFieldPlaceholder, variant: "outlined", size: "small", defaultValue: value || "", inputRef: inputRef, spellCheck: false, className: classes.colorTextInput, onChange: (event) => {
                    const newColor = event.target.value;
                    const newHexColor = colorToHex(newColor);
                    if (newHexColor) {
                        onChange(newHexColor, "text");
                    }
                }, fullWidth: true }), swatchColorObjects.length > 0 && (_jsx("div", { className: classes.swatchContainer, children: swatchColorObjects.map((swatchColor) => (_jsx(ColorSwatchButton, { value: swatchColor.value, label: swatchColor.label, onClick: () => { var _a; return onChange((_a = swatchColor.value) !== null && _a !== void 0 ? _a : "", "swatch"); }, 
                    // We'll show the swatch as active if this swatch color is naively
                    // equal to the current color, if this swatch is for "transparent"
                    // and no color is set, or if the color matches when parsing and
                    // converting both colors to hex.
                    active: swatchColor.value == value ||
                        (!swatchColor.value && !value) ||
                        (!!swatchColor.value &&
                            !!colorValueAsHex &&
                            colorToHex(swatchColor.value) === colorValueAsHex) }, swatchColor.value))) }))] }));
}
