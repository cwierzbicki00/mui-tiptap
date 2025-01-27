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
const react_1 = require("@tiptap/react");
const react_2 = require("react");
const RichTextEditorProvider_1 = __importDefault(require("./RichTextEditorProvider"));
const RichTextField_1 = __importDefault(require("./RichTextField"));
/**
 * An all-in-one component to directly render a MUI-styled Tiptap rich text
 * editor field.
 *
 * NOTE: changes to `content` will not trigger re-rendering of the component.
 * i.e., by default the `content` prop is essentially "initial content". To
 * change content after rendering, you can use a hook and call
 * `rteRef.current?.editor?.setContent(newContent)`. See README "Re-rendering
 * `RichTextEditor` when `content` changes" for more details.
 *
 * Example:
 * <RichTextEditor ref={rteRef} content="<p>Hello world</p>" extensions={[...]} />
 */
const RichTextEditor = (0, react_2.forwardRef)(function RichTextEditor(_a, ref) {
    var { className, renderControls, RichTextFieldProps = {}, children, editorDependencies = [], 
    // We default to `editable=true` just like `useEditor` does
    editable = true } = _a, editorProps = __rest(_a, ["className", "renderControls", "RichTextFieldProps", "children", "editorDependencies", "editable"]);
    const editor = (0, react_1.useEditor)(Object.assign({ editable: editable }, editorProps), editorDependencies);
    // Allow consumers of this component to access the editor via ref
    (0, react_2.useImperativeHandle)(ref, () => ({
        editor: editor,
    }));
    // Update editable state if/when it changes
    (0, react_2.useEffect)(() => {
        if (!editor || editor.isDestroyed || editor.isEditable === editable) {
            return;
        }
        // We use queueMicrotask to avoid any flushSync console errors as
        // mentioned here (though setEditable shouldn't trigger them in practice)
        // https://github.com/ueberdosis/tiptap/issues/3764#issuecomment-1546854730
        queueMicrotask(() => editor.setEditable(editable));
    }, [editable, editor]);
    return ((0, jsx_runtime_1.jsxs)(RichTextEditorProvider_1.default, { editor: editor, children: [(0, jsx_runtime_1.jsx)(RichTextField_1.default, Object.assign({ disabled: !editable, controls: renderControls === null || renderControls === void 0 ? void 0 : renderControls(editor), className: className }, RichTextFieldProps)), children === null || children === void 0 ? void 0 : children(editor)] }));
});
exports.default = RichTextEditor;
