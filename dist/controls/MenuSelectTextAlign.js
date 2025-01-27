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
const FormatAlignCenter_1 = __importDefault(require("@mui/icons-material/FormatAlignCenter"));
const FormatAlignJustify_1 = __importDefault(require("@mui/icons-material/FormatAlignJustify"));
const FormatAlignLeft_1 = __importDefault(require("@mui/icons-material/FormatAlignLeft"));
const FormatAlignRight_1 = __importDefault(require("@mui/icons-material/FormatAlignRight"));
const material_1 = require("@mui/material");
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const context_1 = require("../context");
const MenuButtonTooltip_1 = __importDefault(require("./MenuButtonTooltip"));
const MenuButton_1 = require("./MenuButton");
const MenuSelect_1 = __importDefault(require("./MenuSelect"));
const useStyles = (0, mui_1.makeStyles)({ name: { MenuSelectTextAlign } })((theme) => ({
    selectInput: {
        // We use a fixed width equal to the size of the menu button icon so that
        // the Select element won't change sizes even if we show the "blank"
        // interface when the selected content contains multiple different text
        // alignments.
        width: MenuButton_1.MENU_BUTTON_FONT_SIZE_DEFAULT,
    },
    menuItem: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    menuOption: {
        // These styles ensure the item fills its MenuItem container, and the
        // tooltip appears in the same place when hovering over the item generally
        // (not just the text of the item)
        display: "flex",
        width: "100%",
        justifyContent: "center",
    },
    menuButtonIcon: {
        fontSize: MenuButton_1.MENU_BUTTON_FONT_SIZE_DEFAULT,
        // For consistency with toggle button default icon color and the Select
        // dropdown arrow icon color
        // https://github.com/mui/material-ui/blob/2cb9664b16d5a862a3796add7c8e3b088b47acb5/packages/mui-material/src/ToggleButton/ToggleButton.js#L60,
        // https://github.com/mui/material-ui/blob/0b7beb93c9015da6e35c2a31510f679126cf0de1/packages/mui-material/src/NativeSelect/NativeSelectInput.js#L96
        color: theme.palette.action.active,
    },
}));
const DEFAULT_ALIGNMENT_OPTIONS = [
    {
        value: "left",
        label: "Left",
        shortcutKeys: ["mod", "Shift", "L"],
        IconComponent: FormatAlignLeft_1.default,
    },
    {
        value: "center",
        label: "Center",
        shortcutKeys: ["mod", "Shift", "E"],
        IconComponent: FormatAlignCenter_1.default,
    },
    {
        value: "right",
        label: "Right",
        shortcutKeys: ["mod", "Shift", "R"],
        IconComponent: FormatAlignRight_1.default,
    },
    {
        value: "justify",
        label: "Justify",
        shortcutKeys: ["mod", "Shift", "J"],
        IconComponent: FormatAlignJustify_1.default,
    },
];
function MenuSelectTextAlign(_a) {
    var _b, _c, _d;
    var { options = DEFAULT_ALIGNMENT_OPTIONS, emptyLabel = "", alignmentOptions } = _a, menuSelectProps = __rest(_a, ["options", "emptyLabel", "alignmentOptions"]);
    const { classes, cx } = useStyles();
    const editor = (0, context_1.useRichTextEditorContext)();
    // Handle the deprecated name for the `options` prop if present
    options =
        (_b = alignmentOptions === null || alignmentOptions === void 0 ? void 0 : alignmentOptions.map((option) => (Object.assign(Object.assign({}, option), { value: option.alignment })))) !== null && _b !== void 0 ? _b : options;
    const handleAlignmentSelect = (0, react_1.useCallback)((event) => {
        const alignment = event.target.value;
        editor === null || editor === void 0 ? void 0 : editor.chain().setTextAlign(alignment).focus().run();
    }, [editor]);
    // Figure out which settings the user has enabled with the heading extension
    const textAlignExtensionOptions = (0, react_1.useMemo)(() => {
        const textAlignExtension = editor === null || editor === void 0 ? void 0 : editor.extensionManager.extensions.find((extension) => extension.name == "textAlign");
        return textAlignExtension === null || textAlignExtension === void 0 ? void 0 : textAlignExtension.options;
    }, [editor]);
    const enabledAlignments = (0, react_1.useMemo)(() => {
        return new Set(textAlignExtensionOptions === null || textAlignExtensionOptions === void 0 ? void 0 : textAlignExtensionOptions.alignments);
    }, [textAlignExtensionOptions]);
    // Only set the Select `value` as non-empty if all alignments are the same
    // (which we'll know if `isActive({ textAlign: alignment })` returns true).
    // This allows the user to change all current selected nodes' alignments to
    // any alignment, including the default alignment. If we instead set the
    // `value` as the default for instance, attempting to change multiple node's
    // alignments to that default would not work (not triggering "onChange").
    const selectedValue = (_c = Array.from(enabledAlignments).find((alignment) => editor === null || editor === void 0 ? void 0 : editor.isActive({ textAlign: alignment }))) !== null && _c !== void 0 ? _c : "";
    return ((0, jsx_runtime_1.jsx)(MenuSelect_1.default, Object.assign({ onChange: handleAlignmentSelect, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) ||
            !Array.from(enabledAlignments).some((alignment) => editor.can().setTextAlign(alignment)), 
        // Override the rendering of the selected value so that we don't show
        // tooltips on hovering (like we do for the menu options)
        renderValue: (value) => {
            let content;
            if (value) {
                const alignmentOptionForValue = options.find((option) => option.value === value);
                content = alignmentOptionForValue ? ((0, jsx_runtime_1.jsx)(alignmentOptionForValue.IconComponent, { className: classes.menuButtonIcon })) : (value);
            }
            else {
                content = emptyLabel;
            }
            return (0, jsx_runtime_1.jsx)("span", { className: classes.menuOption, children: content });
        }, "aria-label": "Text alignments", tooltipTitle: "Align", value: selectedValue, displayEmpty: true }, menuSelectProps, { inputProps: Object.assign(Object.assign({}, menuSelectProps.inputProps), { className: cx(classes.selectInput, (_d = menuSelectProps.inputProps) === null || _d === void 0 ? void 0 : _d.className) }), children: options
            .filter((alignmentOption) => enabledAlignments.has(alignmentOption.value))
            .map((alignmentOption) => {
            var _a;
            return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: alignmentOption.value, disabled: !(editor === null || editor === void 0 ? void 0 : editor.can().setTextAlign(alignmentOption.value)), className: classes.menuItem, children: (0, jsx_runtime_1.jsx)(MenuButtonTooltip_1.default, { label: (_a = alignmentOption.label) !== null && _a !== void 0 ? _a : "", shortcutKeys: alignmentOption.shortcutKeys, placement: "right", contentWrapperClassName: classes.menuOption, children: (0, jsx_runtime_1.jsx)(alignmentOption.IconComponent, { className: classes.menuButtonIcon }) }) }, alignmentOption.value));
        }) })));
}
exports.default = MenuSelectTextAlign;
