import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEditor } from "@tiptap/react";
import { forwardRef, useEffect, useImperativeHandle, } from "react";
import RichTextEditorProvider from "./RichTextEditorProvider";
import RichTextField from "./RichTextField";
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
const RichTextEditor = forwardRef(function RichTextEditor({ className, renderControls, RichTextFieldProps = {}, children, editorDependencies = [], 
// We default to `editable=true` just like `useEditor` does
editable = true, ...editorProps }, ref) {
    const editor = useEditor({
        editable: editable,
        ...editorProps,
    }, editorDependencies);
    // Allow consumers of this component to access the editor via ref
    useImperativeHandle(ref, () => ({
        editor: editor,
    }));
    // Update editable state if/when it changes
    useEffect(() => {
        if (!editor || editor.isDestroyed || editor.isEditable === editable) {
            return;
        }
        // We use queueMicrotask to avoid any flushSync console errors as
        // mentioned here (though setEditable shouldn't trigger them in practice)
        // https://github.com/ueberdosis/tiptap/issues/3764#issuecomment-1546854730
        queueMicrotask(() => editor.setEditable(editable));
    }, [editable, editor]);
    return (_jsxs(RichTextEditorProvider, { editor: editor, children: [_jsx(RichTextField, { disabled: !editable, controls: renderControls === null || renderControls === void 0 ? void 0 : renderControls(editor), className: className, ...RichTextFieldProps }), children === null || children === void 0 ? void 0 : children(editor)] }));
});
export default RichTextEditor;
