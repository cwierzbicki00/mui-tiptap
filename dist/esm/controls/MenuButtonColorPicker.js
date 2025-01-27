import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { FormatColorBar } from "../icons";
import { ColorPickerPopper } from "./ColorPickerPopper";
import MenuButton, { MENU_BUTTON_FONT_SIZE_DEFAULT, } from "./MenuButton";
const useStyles = makeStyles({ name: { MenuButtonColorPicker } })((theme) => ({
    menuButtonIcon: {
        fontSize: MENU_BUTTON_FONT_SIZE_DEFAULT,
    },
    colorIndicatorIcon: {
        position: "absolute",
    },
    colorIndicatorIconDisabled: {
        color: theme.palette.action.disabled,
    },
}));
export function MenuButtonColorPicker({ value: colorValue, onChange, swatchColors, labels, hideColorIndicator = false, popperId, PopperProps, ColorPickerProps, ...menuButtonProps }) {
    const { classes, cx } = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => setAnchorEl(null);
    const { IconComponent, children, ...otherMenuButtonProps } = menuButtonProps;
    return (_jsxs(_Fragment, { children: [_jsx(MenuButton, { onClick: (e) => anchorEl ? handleClose() : setAnchorEl(e.currentTarget), "aria-describedby": popperId, ...otherMenuButtonProps, children: children !== null && children !== void 0 ? children : (_jsxs(_Fragment, { children: [IconComponent && (_jsx(IconComponent, { className: classes.menuButtonIcon })), !hideColorIndicator && colorValue && (_jsx(FormatColorBar, { className: cx(classes.menuButtonIcon, classes.colorIndicatorIcon, menuButtonProps.disabled && classes.colorIndicatorIconDisabled), style: menuButtonProps.disabled ? undefined : { color: colorValue } }))] })) }), _jsx(ColorPickerPopper, { id: popperId, open: !!anchorEl, anchorEl: anchorEl, value: colorValue !== null && colorValue !== void 0 ? colorValue : "", onSave: (newColor) => {
                    onChange(newColor);
                    handleClose();
                }, onCancel: handleClose, swatchColors: swatchColors, ColorPickerProps: ColorPickerProps, labels: labels, ...PopperProps })] }));
}
