export type RichTextContentClasses = ReturnType<typeof useStyles>["classes"];
export type RichTextContentProps = {
    /** Optional additional className to provide to the root element. */
    className?: string;
    /** Override or extend existing styles. */
    classes?: Partial<RichTextContentClasses>;
};
declare const useStyles: (params: void, muiStyleOverridesParams?: {
    props: Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "readonly" | "editable", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
/**
 * A component for rendering a MUI-styled version of Tiptap rich text editor
 * content.
 *
 * Must be a child of the RichTextEditorProvider so that the `editor` context is
 * available.
 */
export default function RichTextContent({ className, classes: overrideClasses, }: RichTextContentProps): import("react/jsx-runtime").JSX.Element;
export {};
