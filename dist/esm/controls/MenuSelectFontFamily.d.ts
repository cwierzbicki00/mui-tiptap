import type { ReactNode } from "react";
import type { Except } from "type-fest";
import { type MenuSelectProps } from "./MenuSelect";
export type FontFamilySelectOption = {
    /**
     * The underlying `font-family` CSS value string
     * (https://developer.mozilla.org/en-US/docs/Web/CSS/font-family), used when
     * calling the Tiptap `setFontFamily` command when selecting this option.
     * Ex: "Comic Sans MS, Comic Sans"
     *
     * If set as an empty string, selecting this option will instead unset/remove
     * the font-family. (If you provide an option with an empty string `value`,
     * you will likely want to set the `hideUnsetOption` prop to true. This can be
     * useful if you want to place the "unset" option in a custom position amongst
     * the options, rather than having it appear first.)
     */
    value: string;
    /**
     * The user-facing label to show for this value. Ex: "Comic Sans". If not
     * provided, uses the `value` as the option label.
     */
    label?: ReactNode;
};
export interface MenuSelectFontFamilyProps extends Except<MenuSelectProps<string>, "value" | "children"> {
    /**
     * Provide the list of font families to show as options.
     */
    options: FontFamilySelectOption[];
    /**
     * Override the content shown for the Select's MenuItem option that allows a
     * user to unset the font-family of the selected text. If not provided, uses
     * "Default" as the displayed label. To hide this select option entirely, set
     * `hideUnsetOption` to true.
     *
     * You can also provide your own "unset" option via the `options` array by
     * setting its value to the empty string "".
     */
    unsetOptionLabel?: React.ReactNode;
    /**
     * If true, hides the additional first select option to "unset" the
     * font-family back to its default. By default false.
     */
    hideUnsetOption?: boolean;
    /**
     * What to render in the Select when either no font-family is currently set
     * for the selected text, or when multiple different values are set. By
     * default shows "Font".
     */
    emptyLabel?: React.ReactNode;
}
/** A font-family selector for use with the Tiptap FontFamily extension.  */
export default function MenuSelectFontFamily({ options, hideUnsetOption, unsetOptionLabel, emptyLabel, ...menuSelectProps }: MenuSelectFontFamilyProps): import("react/jsx-runtime").JSX.Element;
