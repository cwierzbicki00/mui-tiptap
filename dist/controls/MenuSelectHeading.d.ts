import { type ReactNode } from "react";
import type { Except } from "type-fest";
import { type MenuSelectProps } from "./MenuSelect";
export interface MenuSelectHeadingProps extends Except<MenuSelectProps<HeadingOptionValue | "">, "value" | "children"> {
    /**
     * Override the default labels for the select options. For any value that
     * is omitted in this object, it falls back to the default content.
     */
    labels?: {
        /** Label shown for the "Paragraph" (non-heading) option. */
        paragraph?: ReactNode;
        /** Label shown for the level 1 heading (h1) option. */
        heading1?: ReactNode;
        /** Label shown for the level 2 heading (h2) option. */
        heading2?: ReactNode;
        /** Label shown for the level 3 heading (h3) option. */
        heading3?: ReactNode;
        /** Label shown for the level 4 heading (h4) option. */
        heading4?: ReactNode;
        /** Label shown for the level 5 heading (h5) option. */
        heading5?: ReactNode;
        /** Label shown for the level 6 heading (h6) option. */
        heading6?: ReactNode;
        /**
         * Label shown when the user is currently on a non-paragraph, non-heading.
         * By default shows "Change to…" in italics, since choosing a new option
         * will change the node type to one of the given heading/paragraph types.
         */
        empty?: ReactNode;
        /** @deprecated Use `labels.empty` instead. */
        emptyValue?: React.ReactNode;
    };
}
declare const HEADING_OPTION_VALUES: {
    readonly Paragraph: "Paragraph";
    readonly Heading1: "Heading 1";
    readonly Heading2: "Heading 2";
    readonly Heading3: "Heading 3";
    readonly Heading4: "Heading 4";
    readonly Heading5: "Heading 5";
    readonly Heading6: "Heading 6";
};
export type HeadingOptionValue = (typeof HEADING_OPTION_VALUES)[keyof typeof HEADING_OPTION_VALUES];
export default function MenuSelectHeading({ labels, ...menuSelectProps }: MenuSelectHeadingProps): import("react/jsx-runtime").JSX.Element;
export {};
