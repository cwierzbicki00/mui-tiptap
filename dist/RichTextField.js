"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const mui_1 = require("tss-react/mui");
const FieldContainer_1 = __importDefault(require("./FieldContainer"));
const MenuBar_1 = __importDefault(require("./MenuBar"));
const RichTextContent_1 = __importDefault(require("./RichTextContent"));
const context_1 = require("./context");
const useDebouncedFocus_1 = __importDefault(require("./hooks/useDebouncedFocus"));
const styles_1 = require("./styles");
const DebounceRender_1 = __importDefault(require("./utils/DebounceRender"));
const richTextFieldClasses = (0, styles_1.getUtilityClasses)(RichTextField.name, ["root", "standard", "outlined", "menuBar", "menuBarContent", "content"]);
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
const useStyles = (0, mui_1.makeStyles)({
    name: { RichTextField },
    uniqId: "E2Alw3", // https://docs.tss-react.dev/nested-selectors#ssr
})((theme, _params, classes) => {
    return {
        // This first class is added to allow convenient user overrides. Users can
        // similarly override the other classes below.
        root: {},
        standard: {
            // We don't need horizontal spacing when not using the outlined variant
            [`& .${classes.content}`]: {
                padding: theme.spacing(1.5, 0),
            },
            [`& .${classes.menuBarContent}`]: {
                padding: theme.spacing(1, 0),
            },
        },
        outlined: {
            // Add padding around the input area and menu bar, since they're
            // contained in the outline
            [`& .${classes.content}`]: {
                padding: theme.spacing(1.5),
            },
            [`& .${classes.menuBarContent}`]: {
                padding: theme.spacing(1, 1.5),
            },
        },
        menuBar: {},
        menuBarContent: {},
        content: {},
    };
});
/**
 * Renders the Tiptap rich text editor content and a controls menu bar.
 *
 * With the "outlined" variant, renders a bordered UI similar to the Material UI
 * `TextField`. The "standard" variant does not have an outline/border.
 *
 * Must be a child of the RichTextEditorProvider so that the `editor` context is
 * available.
 */
function RichTextField({ variant = "outlined", controls, disableDebounceRenderControls = false, disabled, className, classes: overrideClasses = {}, footer, MenuBarProps, RichTextContentProps, }) {
    var _a, _b;
    const { classes, cx } = useStyles(undefined, {
        props: { classes: overrideClasses },
    });
    const editor = (0, context_1.useRichTextEditorContext)();
    // Because the user interactions with the editor menu bar buttons unfocus the editor
    // (since it's not part of the editor content), we'll debounce our visual focused
    // state so that the (outlined) field focus styles don't "flash" whenever that happens
    const isFieldFocused = (0, useDebouncedFocus_1.default)({ editor });
    return ((0, jsx_runtime_1.jsxs)(FieldContainer_1.default, { variant: variant, focused: !disabled && isFieldFocused, disabled: disabled, className: cx(richTextFieldClasses.root, classes.root, variant === "outlined"
            ? [richTextFieldClasses.outlined, classes.outlined]
            : [richTextFieldClasses.standard, classes.standard], className), children: [controls && ((0, jsx_runtime_1.jsx)(MenuBar_1.default, Object.assign({}, MenuBarProps, { classes: Object.assign(Object.assign({}, MenuBarProps === null || MenuBarProps === void 0 ? void 0 : MenuBarProps.classes), { root: cx(richTextFieldClasses.menuBar, classes.menuBar, (_a = MenuBarProps === null || MenuBarProps === void 0 ? void 0 : MenuBarProps.classes) === null || _a === void 0 ? void 0 : _a.root), content: cx(richTextFieldClasses.content, classes.menuBarContent, (_b = MenuBarProps === null || MenuBarProps === void 0 ? void 0 : MenuBarProps.classes) === null || _b === void 0 ? void 0 : _b.content) }), children: disableDebounceRenderControls ? (controls) : ((0, jsx_runtime_1.jsx)(DebounceRender_1.default, { children: controls })) }))), (0, jsx_runtime_1.jsx)(RichTextContent_1.default, Object.assign({}, RichTextContentProps, { className: cx(richTextFieldClasses.content, classes.content, RichTextContentProps === null || RichTextContentProps === void 0 ? void 0 : RichTextContentProps.className) })), footer] }));
}
exports.default = RichTextField;
