"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("@tiptap/react");
const react_2 = require("react");
const mui_1 = require("tss-react/mui");
const context_1 = require("./context");
const styles_1 = require("./styles");
const richTextContentClasses = (0, styles_1.getUtilityClasses)(RichTextContent.name, ["root", "readonly", "editable"]);
const useStyles = (0, mui_1.makeStyles)({ name: { RichTextContent } })((theme) => {
    return {
        root: {
            // We add `as CSSObject` to get around typing issues with our editor
            // styles function. For future reference, this old issue and its solution
            // are related, though not quite right
            // https://github.com/garronej/tss-react/issues/2
            // https://github.com/garronej/tss-react/commit/9dc3f6f9f70b6df0bd83cd5689c3313467fb4f06
            "& .ProseMirror": Object.assign({}, (0, styles_1.getEditorStyles)(theme)),
        },
        // Styles applied when the editor is in read-only mode (editable=false)
        readonly: {},
        // Styles applied when the editor is editable (editable=true)
        editable: {},
    };
});
/**
 * A component for rendering a MUI-styled version of Tiptap rich text editor
 * content.
 *
 * Must be a child of the RichTextEditorProvider so that the `editor` context is
 * available.
 */
function RichTextContent({ className, classes: overrideClasses = {}, }) {
    const { classes, cx } = useStyles(undefined, {
        props: { classes: overrideClasses },
    });
    const editor = (0, context_1.useRichTextEditorContext)();
    const editorClasses = (0, react_2.useMemo)(() => cx(richTextContentClasses.root, className, classes.root, (editor === null || editor === void 0 ? void 0 : editor.isEditable)
        ? [richTextContentClasses.editable, classes.editable]
        : [richTextContentClasses.readonly, classes.readonly]), [className, classes, cx, editor === null || editor === void 0 ? void 0 : editor.isEditable]);
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { className: editorClasses, component: react_1.EditorContent, editor: editor }));
}
exports.default = RichTextContent;
