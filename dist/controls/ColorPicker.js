"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_colorful_1 = require("react-colorful");
const mui_1 = require("tss-react/mui");
const color_1 = require("../utils/color");
const ColorSwatchButton_1 = require("./ColorSwatchButton");
const useStyles = (0, mui_1.makeStyles)({ name: { ColorPicker } })((theme) => ({
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
function ColorPicker({ value, onChange, swatchColors, colorToHex = color_1.colorToHex, disableAlpha = false, labels = {}, }) {
    const { classes } = useStyles();
    const { textFieldPlaceholder = 'Ex: "#7cb5ec"' } = labels;
    const inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        // Any time the color changes external to the text input, update the text
        // input to show the latest value, unless the input is currently focused
        // (since the user may be in the middle of editing)
        if (inputRef.current && inputRef.current !== document.activeElement) {
            inputRef.current.value = value;
        }
    }, [value]);
    const swatchColorObjects = (swatchColors !== null && swatchColors !== void 0 ? swatchColors : []).map((swatchColor) => typeof swatchColor === "string" ? { value: swatchColor } : swatchColor);
    const colorValueAsHex = colorToHex(value);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [disableAlpha ? ((0, jsx_runtime_1.jsx)(react_colorful_1.HexColorPicker, { color: colorValueAsHex !== null && colorValueAsHex !== void 0 ? colorValueAsHex : "#000000", onChange: (color) => onChange(color, "gradient"), className: classes.gradientPicker })) : ((0, jsx_runtime_1.jsx)(react_colorful_1.HexAlphaColorPicker, { color: colorValueAsHex !== null && colorValueAsHex !== void 0 ? colorValueAsHex : "#000000", onChange: (color) => onChange(color, "gradient"), className: classes.gradientPicker })), (0, jsx_runtime_1.jsx)(material_1.TextField, { placeholder: textFieldPlaceholder, variant: "outlined", size: "small", defaultValue: value || "", inputRef: inputRef, spellCheck: false, className: classes.colorTextInput, onChange: (event) => {
                    const newColor = event.target.value;
                    const newHexColor = colorToHex(newColor);
                    if (newHexColor) {
                        onChange(newHexColor, "text");
                    }
                }, fullWidth: true }), swatchColorObjects.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: classes.swatchContainer, children: swatchColorObjects.map((swatchColor) => ((0, jsx_runtime_1.jsx)(ColorSwatchButton_1.ColorSwatchButton, { value: swatchColor.value, label: swatchColor.label, onClick: () => { var _a; return onChange((_a = swatchColor.value) !== null && _a !== void 0 ? _a : "", "swatch"); }, 
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
exports.ColorPicker = ColorPicker;
