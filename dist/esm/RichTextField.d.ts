/// <reference types="react" />
import { type MenuBarProps } from "./MenuBar";
import { type RichTextContentProps } from "./RichTextContent";
export type RichTextFieldClasses = ReturnType<typeof useStyles>["classes"];
export type RichTextFieldProps = {
    /**
     * Which style to use for the field. "outlined" shows a border around the controls,
     * editor, and footer, which updates depending on hover/focus states, like MUI's
     * OutlinedInput. "standard" does not include any outer border.
     */
    variant?: "outlined" | "standard";
    /** Class applied to the root element. */
    className?: string;
    /**
     * Whether the outlined field should appear as disabled. Typically the
     * editor's `editable` field would also be set to `false` when setting this to
     * true.
     */
    disabled?: boolean;
    /**
     * Any additional content to render inside the outlined field, below the
     * editor content.
     */
    footer?: React.ReactNode;
    /**
     * The controls content to show inside the menu bar. Typically will be set to
     * a <MenuControlsContainer> containing several MenuButton* components,
     * depending on what controls you want to include in the menu bar (and what
     * extensions you've enabled).
     */
    controls?: React.ReactNode;
    /**
     * If true, the controls rendered via `controls` will not be debounced. If not
     * debounced, then upon every editor interaction (caret movement, character
     * typed, etc.), the entire controls content will re-render, which tends to be
     * very expensive and can bog down the editor performance, so debouncing is
     * generally recommended. Controls are often expensive since they need to
     * check a lot of editor state, with `editor.can()` commands and whatnot. By
     * default false.
     */
    disableDebounceRenderControls?: boolean;
    /** Override or extend existing styles. */
    classes?: Partial<RichTextFieldClasses>;
    /**
     * Override any props for the child MenuBar component (rendered if `controls`
     * is provided).
     */
    MenuBarProps?: Partial<MenuBarProps>;
    /**
     * Override any props for the child RichTextContent component.
     */
    RichTextContentProps?: Partial<RichTextContentProps>;
};
declare const useStyles: (params: void, muiStyleOverridesParams?: {
    props: Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"content" | "root" | "outlined" | "standard" | "menuBar" | "menuBarContent", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
/**
 * Renders the Tiptap rich text editor content and a controls menu bar.
 *
 * With the "outlined" variant, renders a bordered UI similar to the Material UI
 * `TextField`. The "standard" variant does not have an outline/border.
 *
 * Must be a child of the RichTextEditorProvider so that the `editor` context is
 * available.
 */
export default function RichTextField({ variant, controls, disableDebounceRenderControls, disabled, className, classes: overrideClasses, footer, MenuBarProps, RichTextContentProps, }: RichTextFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
