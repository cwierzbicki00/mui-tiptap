/// <reference types="react" />
import { type MenuButtonTooltipProps } from "./MenuButtonTooltip";
import type { Except } from "type-fest";
import { type MenuSelectProps } from "./MenuSelect";
export type TextAlignSelectOption = {
    /**
     * Which textAlign value this option enables. Ex: "left", "right",
     * "center", "justify".
     */
    value: string;
    /**
     * What icon to show for this option in the select option dropdown.
     */
    IconComponent: React.ElementType<{
        className: string;
    }>;
    /**
     * What tooltip label to show (if any) when hovering over this option.
     */
    label?: string;
    /**
     * What keyboard shortcut keys can be used to enable this text-alignment.
     * Example: ["mod", "Shift", "L"] is the default shortcut for left-align.
     */
    shortcutKeys?: MenuButtonTooltipProps["shortcutKeys"];
};
export interface MenuSelectTextAlignProps extends Except<MenuSelectProps<string>, "children"> {
    /**
     * Override the options shown for text alignment. Use this to change the
     * label, icon, tooltip, and shortcut keys shown for each option, and/or the
     * order in which the options appear. Note that of the options provided here
     * (or if this prop is omitted and the default set of options is used), this
     * component will omit an option if it's not enabled in the TextAlign
     * extension's `alignments` option.
     */
    options?: TextAlignSelectOption[];
    /** @deprecated Use `options` prop instead. */
    alignmentOptions?: {
        /**
         * `alignment` has been renamed `value` in the new preferred `options` prop.
         */
        alignment: string;
        IconComponent: React.ElementType<{
            className: string;
        }>;
        label?: string;
        shortcutKeys?: MenuButtonTooltipProps["shortcutKeys"];
    }[];
    /**
     * What to render in the Select when the highlighted content is currently
     * using multiple different text-alignments (so no one icon applies). By
     * default renders as blank (similar to Microsoft Word and Google Docs do for
     * font size, for instance).
     */
    emptyLabel?: React.ReactNode;
}
export default function MenuSelectTextAlign({ options, emptyLabel, alignmentOptions, ...menuSelectProps }: MenuSelectTextAlignProps): import("react/jsx-runtime").JSX.Element;
