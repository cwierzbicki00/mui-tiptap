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
/// <reference types="@tiptap/extension-paragraph" />
const material_1 = require("@mui/material");
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const context_1 = require("../context");
const styles_1 = require("../styles");
const getAttributesForEachSelected_1 = require("../utils/getAttributesForEachSelected");
const MenuButtonTooltip_1 = __importDefault(require("./MenuButtonTooltip"));
const MenuSelect_1 = __importDefault(require("./MenuSelect"));
const useStyles = (0, mui_1.makeStyles)({ name: { MenuSelectHeading } })((theme) => {
    const editorStyles = (0, styles_1.getEditorStyles)(theme);
    return {
        selectInput: {
            // We use a fixed width so that the Select element won't change sizes as
            // the selected option changes (which would shift other elements in the
            // menu bar)
            width: 77,
        },
        menuOption: {
            // These styles ensure the item fills its MenuItem container, and the
            // tooltip appears in the same place when hovering over the item generally
            // (not just the text of the item)
            display: "block",
            width: "100%",
        },
        headingOption: {
            marginBlockStart: 0,
            marginBlockEnd: 0,
            fontWeight: "bold",
        },
        headingOption1: {
            fontSize: editorStyles["& h1"].fontSize,
        },
        headingOption2: {
            fontSize: editorStyles["& h2"].fontSize,
        },
        headingOption3: {
            fontSize: editorStyles["& h3"].fontSize,
        },
        headingOption4: {
            fontSize: editorStyles["& h4"].fontSize,
        },
        headingOption5: {
            fontSize: editorStyles["& h5"].fontSize,
        },
        headingOption6: {
            fontSize: editorStyles["& h6"].fontSize,
        },
    };
});
const HEADING_OPTION_VALUES = {
    Paragraph: "Paragraph",
    Heading1: "Heading 1",
    Heading2: "Heading 2",
    Heading3: "Heading 3",
    Heading4: "Heading 4",
    Heading5: "Heading 5",
    Heading6: "Heading 6",
};
const HEADING_OPTION_VALUE_TO_LEVEL = {
    [HEADING_OPTION_VALUES.Heading1]: 1,
    [HEADING_OPTION_VALUES.Heading2]: 2,
    [HEADING_OPTION_VALUES.Heading3]: 3,
    [HEADING_OPTION_VALUES.Heading4]: 4,
    [HEADING_OPTION_VALUES.Heading5]: 5,
    [HEADING_OPTION_VALUES.Heading6]: 6,
};
const LEVEL_TO_HEADING_OPTION_VALUE = {
    1: HEADING_OPTION_VALUES.Heading1,
    2: HEADING_OPTION_VALUES.Heading2,
    3: HEADING_OPTION_VALUES.Heading3,
    4: HEADING_OPTION_VALUES.Heading4,
    5: HEADING_OPTION_VALUES.Heading5,
    6: HEADING_OPTION_VALUES.Heading6,
};
function MenuSelectHeading(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var { labels } = _a, menuSelectProps = __rest(_a, ["labels"]);
    const { classes, cx } = useStyles();
    const editor = (0, context_1.useRichTextEditorContext)();
    const handleHeadingType = (0, react_1.useCallback)((event) => {
        const value = event.target.value;
        if (value === HEADING_OPTION_VALUES.Paragraph) {
            editor === null || editor === void 0 ? void 0 : editor.chain().setParagraph().focus().run();
        }
        else if (value in HEADING_OPTION_VALUE_TO_LEVEL) {
            editor === null || editor === void 0 ? void 0 : editor.chain().setHeading({
                level: HEADING_OPTION_VALUE_TO_LEVEL[value],
            }).focus().run();
        }
    }, [editor]);
    let selectedValue = "";
    if (editor === null || editor === void 0 ? void 0 : editor.isActive("paragraph")) {
        selectedValue = HEADING_OPTION_VALUES.Paragraph;
    }
    else if (editor === null || editor === void 0 ? void 0 : editor.isActive("heading")) {
        const currentNodeHeadingAttributes = (0, getAttributesForEachSelected_1.getAttributesForEachSelected)(editor.state, "heading");
        const currentNodeLevels = currentNodeHeadingAttributes.map((attrs) => attrs.level);
        const numCurrentNodeLevels = new Set(currentNodeLevels).size;
        // We only want to show a selected level value if all of the selected nodes
        // have the same level. (That way a user can properly change the level when
        // selecting across two separate headings, and so we don't mistakenly just
        // show the first of the selected nodes' levels and not allow changing all
        // selected to that heading level. See
        // https://github.com/ueberdosis/tiptap/issues/3481.)
        const level = numCurrentNodeLevels === 1 ? currentNodeLevels[0] : undefined;
        if (level && level in LEVEL_TO_HEADING_OPTION_VALUE) {
            selectedValue =
                LEVEL_TO_HEADING_OPTION_VALUE[level];
        }
    }
    const isCurrentlyParagraphOrHeading = selectedValue !== "";
    const canSetParagraph = editor === null || editor === void 0 ? void 0 : editor.can().setParagraph();
    // We have to pass a level when running `can`, so this is just an arbitrary one
    const canSetHeading = editor === null || editor === void 0 ? void 0 : editor.can().setHeading({ level: 1 });
    // Figure out which settings the user has enabled with the heading extension
    const enabledHeadingLevels = (0, react_1.useMemo)(() => {
        var _a;
        const headingExtension = editor === null || editor === void 0 ? void 0 : editor.extensionManager.extensions.find((extension) => extension.name == "heading");
        return new Set((_a = headingExtension === null || headingExtension === void 0 ? void 0 : headingExtension.options.levels) !== null && _a !== void 0 ? _a : []);
    }, [editor]);
    return (
    // We currently have to specify that the value is of type
    // `HeadingOptionValue | ""` rather than just `HeadingOptionValue` due to
    // the bug reported here https://github.com/mui/material-ui/issues/34083. We
    // need it to support "" as a possible value in the `renderValue` function
    // below since we have `displayEmpty=true`, and the types don't properly
    // handle that scenario.
    (0, jsx_runtime_1.jsxs)(MenuSelect_1.default, Object.assign({ onChange: handleHeadingType, disabled: !(editor === null || editor === void 0 ? void 0 : editor.isEditable) ||
            (!isCurrentlyParagraphOrHeading && !canSetParagraph && !canSetHeading), displayEmpty: true, renderValue: (selected) => {
            var _a, _b;
            let result;
            if (selected === "") {
                // Handle the deprecated `emptyValue` label name, falling back to the
                // newer `labels.empty`, and finally our default empty label
                result = (_b = (_a = labels === null || labels === void 0 ? void 0 : labels.emptyValue) !== null && _a !== void 0 ? _a : labels === null || labels === void 0 ? void 0 : labels.empty) !== null && _b !== void 0 ? _b : (0, jsx_runtime_1.jsx)("em", { children: "Change to\u2026" });
            }
            else if (selected === HEADING_OPTION_VALUES.Paragraph) {
                result = labels === null || labels === void 0 ? void 0 : labels.paragraph;
            }
            else if (selected === HEADING_OPTION_VALUES.Heading1) {
                result = labels === null || labels === void 0 ? void 0 : labels.heading1;
            }
            else if (selected === HEADING_OPTION_VALUES.Heading2) {
                result = labels === null || labels === void 0 ? void 0 : labels.heading2;
            }
            else if (selected === HEADING_OPTION_VALUES.Heading3) {
                result = labels === null || labels === void 0 ? void 0 : labels.heading3;
            }
            else if (selected === HEADING_OPTION_VALUES.Heading4) {
                result = labels === null || labels === void 0 ? void 0 : labels.heading4;
            }
            else if (selected === HEADING_OPTION_VALUES.Heading5) {
                result = labels === null || labels === void 0 ? void 0 : labels.heading5;
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            }
            else if (selected === HEADING_OPTION_VALUES.Heading6) {
                result = labels === null || labels === void 0 ? void 0 : labels.heading6;
            }
            return result !== null && result !== void 0 ? result : selected;
        }, "aria-label": "Text headings", tooltipTitle: "Styles" }, menuSelectProps, { value: selectedValue, inputProps: Object.assign(Object.assign({}, menuSelectProps.inputProps), { className: cx(classes.selectInput, (_b = menuSelectProps.inputProps) === null || _b === void 0 ? void 0 : _b.className) }), children: [(0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: HEADING_OPTION_VALUES.Paragraph, disabled: !isCurrentlyParagraphOrHeading && !canSetParagraph, children: (0, jsx_runtime_1.jsx)(MenuButtonTooltip_1.default, { label: "", shortcutKeys: ["mod", "alt", "0"], placement: "right", contentWrapperClassName: classes.menuOption, children: (_c = labels === null || labels === void 0 ? void 0 : labels.paragraph) !== null && _c !== void 0 ? _c : HEADING_OPTION_VALUES.Paragraph }) }), enabledHeadingLevels.has(1) && ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: HEADING_OPTION_VALUES.Heading1, disabled: !canSetHeading, children: (0, jsx_runtime_1.jsx)(MenuButtonTooltip_1.default, { label: "", shortcutKeys: ["mod", "alt", "1"], placement: "right", contentWrapperClassName: cx(classes.menuOption, classes.headingOption, classes.headingOption1), children: (_d = labels === null || labels === void 0 ? void 0 : labels.heading1) !== null && _d !== void 0 ? _d : HEADING_OPTION_VALUES.Heading1 }) })), enabledHeadingLevels.has(2) && ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: HEADING_OPTION_VALUES.Heading2, disabled: !canSetHeading, children: (0, jsx_runtime_1.jsx)(MenuButtonTooltip_1.default, { label: "", shortcutKeys: ["mod", "alt", "2"], placement: "right", contentWrapperClassName: cx(classes.menuOption, classes.headingOption, classes.headingOption2), children: (_e = labels === null || labels === void 0 ? void 0 : labels.heading2) !== null && _e !== void 0 ? _e : HEADING_OPTION_VALUES.Heading2 }) })), enabledHeadingLevels.has(3) && ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: HEADING_OPTION_VALUES.Heading3, disabled: !canSetHeading, children: (0, jsx_runtime_1.jsx)(MenuButtonTooltip_1.default, { label: "", shortcutKeys: ["mod", "alt", "3"], placement: "right", contentWrapperClassName: cx(classes.menuOption, classes.headingOption, classes.headingOption3), children: (_f = labels === null || labels === void 0 ? void 0 : labels.heading3) !== null && _f !== void 0 ? _f : HEADING_OPTION_VALUES.Heading3 }) })), enabledHeadingLevels.has(4) && ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: HEADING_OPTION_VALUES.Heading4, disabled: !canSetHeading, children: (0, jsx_runtime_1.jsx)(MenuButtonTooltip_1.default, { label: "", shortcutKeys: ["mod", "alt", "4"], placement: "right", contentWrapperClassName: cx(classes.menuOption, classes.headingOption, classes.headingOption4), children: (_g = labels === null || labels === void 0 ? void 0 : labels.heading4) !== null && _g !== void 0 ? _g : HEADING_OPTION_VALUES.Heading4 }) })), enabledHeadingLevels.has(5) && ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: HEADING_OPTION_VALUES.Heading5, disabled: !canSetHeading, children: (0, jsx_runtime_1.jsx)(MenuButtonTooltip_1.default, { label: "", shortcutKeys: ["mod", "alt", "5"], placement: "right", contentWrapperClassName: cx(classes.menuOption, classes.headingOption, classes.headingOption5), children: (_h = labels === null || labels === void 0 ? void 0 : labels.heading5) !== null && _h !== void 0 ? _h : HEADING_OPTION_VALUES.Heading5 }) })), enabledHeadingLevels.has(6) && ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: HEADING_OPTION_VALUES.Heading6, disabled: !canSetHeading, children: (0, jsx_runtime_1.jsx)(MenuButtonTooltip_1.default, { label: "", shortcutKeys: ["mod", "alt", "6"], placement: "right", contentWrapperClassName: cx(classes.menuOption, classes.headingOption, classes.headingOption6), children: (_j = labels === null || labels === void 0 ? void 0 : labels.heading6) !== null && _j !== void 0 ? _j : HEADING_OPTION_VALUES.Heading6 }) }))] })));
}
exports.default = MenuSelectHeading;
