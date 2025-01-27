"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.MenuButtonColorPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const icons_1 = require("../icons");
const ColorPickerPopper_1 = require("./ColorPickerPopper");
const MenuButton_1 = __importStar(require("./MenuButton"));
const useStyles = (0, mui_1.makeStyles)({ name: { MenuButtonColorPicker } })((theme) => ({
    menuButtonIcon: {
        fontSize: MenuButton_1.MENU_BUTTON_FONT_SIZE_DEFAULT,
    },
    colorIndicatorIcon: {
        position: "absolute",
    },
    colorIndicatorIconDisabled: {
        color: theme.palette.action.disabled,
    },
}));
function MenuButtonColorPicker(_a) {
    var { value: colorValue, onChange, swatchColors, labels, hideColorIndicator = false, popperId, PopperProps, ColorPickerProps } = _a, menuButtonProps = __rest(_a, ["value", "onChange", "swatchColors", "labels", "hideColorIndicator", "popperId", "PopperProps", "ColorPickerProps"]);
    const { classes, cx } = useStyles();
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const handleClose = () => setAnchorEl(null);
    const { IconComponent, children } = menuButtonProps, otherMenuButtonProps = __rest(menuButtonProps, ["IconComponent", "children"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(MenuButton_1.default, Object.assign({ onClick: (e) => anchorEl ? handleClose() : setAnchorEl(e.currentTarget), "aria-describedby": popperId }, otherMenuButtonProps, { children: children !== null && children !== void 0 ? children : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [IconComponent && ((0, jsx_runtime_1.jsx)(IconComponent, { className: classes.menuButtonIcon })), !hideColorIndicator && colorValue && ((0, jsx_runtime_1.jsx)(icons_1.FormatColorBar, { className: cx(classes.menuButtonIcon, classes.colorIndicatorIcon, menuButtonProps.disabled && classes.colorIndicatorIconDisabled), style: menuButtonProps.disabled ? undefined : { color: colorValue } }))] })) })), (0, jsx_runtime_1.jsx)(ColorPickerPopper_1.ColorPickerPopper, Object.assign({ id: popperId, open: !!anchorEl, anchorEl: anchorEl, value: colorValue !== null && colorValue !== void 0 ? colorValue : "", onSave: (newColor) => {
                    onChange(newColor);
                    handleClose();
                }, onCancel: handleClose, swatchColors: swatchColors, ColorPickerProps: ColorPickerProps, labels: labels }, PopperProps))] }));
}
exports.MenuButtonColorPicker = MenuButtonColorPicker;
