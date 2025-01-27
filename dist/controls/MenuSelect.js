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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const MenuButtonTooltip_1 = __importDefault(require("./MenuButtonTooltip"));
const useStyles = (0, mui_1.makeStyles)({ name: { MenuSelect } })((theme) => {
    return {
        rootTooltipWrapper: {
            display: "inline-flex",
        },
        selectRoot: {
            // Don't show the default outline when not hovering or focused, for better
            // style consistency with the MenuButtons
            [`&:not(:hover):not(.${material_1.outlinedInputClasses.focused}) .${material_1.outlinedInputClasses.notchedOutline}`]: {
                borderWidth: 0,
            },
            [`& .${material_1.svgIconClasses.root}`]: {
                // Ensure that if an icon is used as the `renderValue` result, it uses
                // the same color as the default ToggleButton icon and the Select
                // dropdown arrow icon
                // https://github.com/mui/material-ui/blob/2cb9664b16d5a862a3796add7c8e3b088b47acb5/packages/mui-material/src/ToggleButton/ToggleButton.js#L60,
                // https://github.com/mui/material-ui/blob/0b7beb93c9015da6e35c2a31510f679126cf0de1/packages/mui-material/src/NativeSelect/NativeSelectInput.js#L96
                color: theme.palette.action.active,
            },
            [`&.${material_1.selectClasses.disabled} .${material_1.svgIconClasses.root}`]: {
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
function MenuSelect(_a) {
    var _b, _c, _d;
    var { tooltipTitle } = _a, selectProps = __rest(_a, ["tooltipTitle"]);
    const { classes, cx } = useStyles();
    // We use a controlled tooltip here because otherwise it seems the tooltip can
    // get stuck open after selecting something (as it can re-trigger the
    // Tooltip's onOpen upon clicking a MenuItem). We instead trigger it to
    // open/close based on interaction specifically with the Select (not the usual
    // Tooltip onOpen/onClose)
    const [tooltipOpen, setTooltipOpen] = (0, react_1.useState)(false);
    const select = ((0, jsx_runtime_1.jsx)(material_1.Select, Object.assign({ margin: "none", variant: "outlined", size: "small" }, selectProps, { onMouseEnter: (...args) => {
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
        }, inputProps: Object.assign(Object.assign({}, selectProps.inputProps), { className: cx(classes.input, (_b = selectProps.inputProps) === null || _b === void 0 ? void 0 : _b.className) }), 
        // Always show the dropdown options directly below the select input,
        // aligned to left-most edge
        MenuProps: Object.assign({ anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
            }, transformOrigin: {
                vertical: "top",
                horizontal: "left",
            } }, selectProps.MenuProps), className: cx(classes.selectRoot, selectProps.className), classes: Object.assign(Object.assign({}, selectProps.classes), { select: cx(classes.select, (_c = selectProps.classes) === null || _c === void 0 ? void 0 : _c.select), icon: cx(classes.selectDropdownIcon, (_d = selectProps.classes) === null || _d === void 0 ? void 0 : _d.icon) }) })));
    return tooltipTitle ? ((0, jsx_runtime_1.jsx)(MenuButtonTooltip_1.default, { label: tooltipTitle, contentWrapperClassName: classes.rootTooltipWrapper, open: tooltipOpen, children: select })) : (select);
}
exports.default = MenuSelect;
