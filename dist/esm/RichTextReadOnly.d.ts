import { type EditorOptions } from "@tiptap/react";
import type { Except, SetRequired } from "type-fest";
export type RichTextReadOnlyProps = SetRequired<Partial<Except<EditorOptions, "editable">>, "extensions">;
/**
 * An all-in-one component to directly render read-only Tiptap editor content.
 *
 * When to use this component:
 * - You just want to render editor HTML/JSON content directly, without any
 *   outlined field styling, menu bar, extra setup, etc.
 * - You want a convenient way to render content that re-renders as the
 *   `content` prop changes.
 *
 * Though RichtextEditor (or useEditor, RichTextEditorProvider, and
 * RichTextContent) can be used as read-only via the editor's `editable` prop,
 * this is a simpler and more efficient version that only renders content and
 * nothing more (e.g., skips instantiating the editor at all if there's no
 * content to display, and does not contain additional rendering logic related
 * to controls, outlined field UI state, etc.).
 *
 * Example:
 * <RichTextReadOnly content="<p>Hello world</p>" extensions={[StarterKit]} />
 */
export default function RichTextReadOnly(props: RichTextReadOnlyProps): import("react/jsx-runtime").JSX.Element | null;
