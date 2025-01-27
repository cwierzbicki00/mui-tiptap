import type React from "react";
export type FieldContainerClasses = ReturnType<typeof useStyles>["classes"];
export type FieldContainerProps = {
    /**
     * Which style to use for the field. "outlined" shows a border around the children,
     * which updates its appearance depending on hover/focus states, like MUI's
     * OutlinedInput. "standard" does not include any outer border.
     */
    variant?: "outlined" | "standard";
    /** The content to render inside the container. */
    children: React.ReactNode;
    /** Class applied to the `root` element. */
    className?: string;
    /** Override or extend existing styles. */
    classes?: Partial<FieldContainerClasses>;
    focused?: boolean;
    disabled?: boolean;
};
declare const useStyles: (params: void, muiStyleOverridesParams?: {
    props: Record<string, unknown>;
    ownerState?: Record<string, unknown> | undefined;
} | undefined) => {
    classes: Record<"root" | "disabled" | "outlined" | "focused" | "notchedOutline" | "standard", string>;
    theme: import("@mui/material").Theme;
    css: import("tss-react").Css;
    cx: import("tss-react").Cx;
};
/**
 * Renders an element with classes and styles that correspond to the state and
 * style-variant of a user-input field, the content of which should be passed in as
 * `children`.
 */
export default function FieldContainer({ variant, children, focused, disabled, classes: overrideClasses, className, }: FieldContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
