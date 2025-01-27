import { type Editor, type EditorOptions } from "@tiptap/react";
import { type DependencyList } from "react";
import type { Except, SetRequired } from "type-fest";
import { type RichTextFieldProps } from "./RichTextField";
export interface RichTextEditorProps extends SetRequired<Partial<EditorOptions>, "extensions"> {
    /**
     * Render the controls content to show inside the menu bar atop the editor
     * content. Typically you will want to render a <MenuControlsContainer>
     * containing several MenuButton* components, depending on what controls you
     * want to include in the menu bar (and what extensions you've enabled).
     * If not provided, no menu bar will be shown.
     *
     * This is a render prop and we can't simply accept a ReactNode directly
     * because we need to ensure that the controls content is re-rendered whenever
     * the editor selection, content, etc. is updated (which is triggered via
     * useEditor within this component). If a ReactNode were directly passed in,
     * it would only re-render whenever the *parent* of RichTextEditor re-renders,
     * which wouldn't be sufficient.
     */
    renderControls?: (editor: Editor | null) => React.ReactNode;
    /**
     * Props applied to the RichTextField element inside (except `controls`, which
     * is controlled via `renderControls`, as this ensures proper re-rendering as
     * the editor changes).
     */
    RichTextFieldProps?: Except<RichTextFieldProps, "controls">;
    /**
     * Optional content to render alongside/after the inner RichTextField, where
     * you can access the editor via the parameter to this render prop, or in a
     * child component via `useRichTextEditorContext()`. Useful for including
     * plugins like mui-tiptap's LinkBubbleMenu and TableBubbleMenu, or other
     * custom components (e.g. a menu that utilizes Tiptap's FloatingMenu). (This
     * is a render prop rather than just a ReactNode for the same reason as
     * `renderControls`; see above.)
     */
    children?: (editor: Editor | null) => React.ReactNode;
    /**
     * A dependency array for the useEditor hook, which will re-create the editor
     * when any value in the array changes.
     */
    editorDependencies?: DependencyList;
    /** Class applied to the root element. */
    className?: string;
}
export type RichTextEditorRef = {
    editor: Editor | null;
};
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
declare const RichTextEditor: import("react").ForwardRefExoticComponent<RichTextEditorProps & import("react").RefAttributes<RichTextEditorRef>>;
export default RichTextEditor;
