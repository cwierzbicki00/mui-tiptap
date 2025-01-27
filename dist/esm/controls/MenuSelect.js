import { jsx as _jsx } from "react/jsx-runtime";
import { Select, outlinedInputClasses, selectClasses, svgIconClasses, } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";
import MenuButtonTooltip from "./MenuButtonTooltip";
const useStyles = makeStyles({ name: { MenuSelect } })((theme) => {
    return {
        rootTooltipWrapper: {
            display: "inline-flex",
        },
        selectRoot: {
            // Don't show the default outline when not hovering or focused, for better
            // style consistency with the MenuButtons
            [`&:not(:hover):not(.${outlinedInputClasses.focused}) .${outlinedInputClasses.notchedOutline}`]: {
                borderWidth: 0,
            },
            [`& .${svgIconClasses.root}`]: {
                // Ensure that if an icon is used as the `renderValue` result, it uses
                // the same color as the default ToggleButton icon and the Select
                // dropdown arrow icon
                // https://github.com/mui/material-ui/blob/2cb9664b16d5a862a3796add7c8e3b088b47acb5/packages/mui-material/src/ToggleButton/ToggleButton.js#L60,
                // https://github.com/mui/material-ui/blob/0b7beb93c9015da6e35c2a31510f679126cf0de1/packages/mui-material/src/NativeSelect/NativeSelectInput.js#L96
                color: theme.palette.action.active,
            },
            [`&.${selectClasses.disabled} .${svgIconClasses.root}`]: {
                // Matching
                // https://github.com/mui/material-ui/blob/2cb9664b16d5a862a3796add7c8e3b088b47acb5/packages/mui-material/src/ToggleButton/ToggleButton.js#L65
                color: theme.palette.action.disabled,
            },
        },
        select: {
            // Increase specificity to override MUI's styles
            "&&&": {
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(3),
            },
        },
        selectDropdownIcon: {
            // Move the caret icon closer to the right than default so the button is
            // more compact
            right: 1,
        },
        input: {
            paddingTop: "3px",
            paddingBottom: "3px",
            fontSize: "0.9em",
        },
    };
});
/** A Select that is styled to work well with other menu bar controls. */
export default function MenuSelect({ tooltipTitle, ...selectProps }) {
    var _a, _b, _c;
    const { classes, cx } = useStyles();
    // We use a controlled tooltip here because otherwise it seems the tooltip can
    // get stuck open after selecting something (as it can re-trigger the
    // Tooltip's onOpen upon clicking a MenuItem). We instead trigger it to
    // open/close based on interaction specifically with the Select (not the usual
    // Tooltip onOpen/onClose)
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const select = (_jsx(Select, { margin: "none", variant: "outlined", size: "small", ...selectProps, onMouseEnter: (...args) => {
            var _a;
            setTooltipOpen(true);
            (_a = selectProps.onMouseEnter) === null || _a === void 0 ? void 0 : _a.call(selectProps, ...args);
        }, onMouseLeave: (...args) => {
            var _a;
            setTooltipOpen(false);
            (_a = selectProps.onMouseLeave) === null || _a === void 0 ? void 0 : _a.call(selectProps, ...args);
        }, onClick: (...args) => {
            var _a;
            setTooltipOpen(false);
            (_a = selectProps.onClick) === null || _a === void 0 ? void 0 : _a.call(selectProps, ...args);
        }, inputProps: {
            ...selectProps.inputProps,
            className: cx(classes.input, (_a = selectProps.inputProps) === null || _a === void 0 ? void 0 : _a.className),
        }, 
        // Always show the dropdown options directly below the select input,
        // aligned to left-most edge
        MenuProps: {
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
            },
            transformOrigin: {
                vertical: "top",
                horizontal: "left",
            },
            ...selectProps.MenuProps,
        }, className: cx(classes.selectRoot, selectProps.className), classes: {
            ...selectProps.classes,
            select: cx(classes.select, (_b = selectProps.classes) === null || _b === void 0 ? void 0 : _b.select),
            icon: cx(classes.selectDropdownIcon, (_c = selectProps.classes) === null || _c === void 0 ? void 0 : _c.icon),
        } }));
    return tooltipTitle ? (_jsx(MenuButtonTooltip, { label: tooltipTitle, contentWrapperClassName: classes.rootTooltipWrapper, open: tooltipOpen, children: select })) : (select);
}
