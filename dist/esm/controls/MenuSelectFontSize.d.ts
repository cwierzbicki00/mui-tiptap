import type { ReactNode } from "react";
import type { Except } from "type-fest";
import { type MenuSelectProps } from "./MenuSelect";
export type FontSizeSelectOptionObject = {
    /**
     * The underlying `font-size` CSS value string, which can be any valid CSS
     * font-size (https://developer.mozilla.org/en-US/docs/Web/CSS/font-size); ex:
     * "12px", "2rem", "small".
     *
     * If a custom `label` is not provided for an option, a value that include
     * pixels like "12px" will be displayed in this component as just "12" for
     * simplicity (but it will still properly set the fontSize using the original
     * "12px" value).
     */
    value: string;
    /**
     * A customized user-facing label to show for this font-size value. If not
     * provided, uses the `value` as the option label (with any "px" removed).
     */
    label?: ReactNode;
};
/**
 * A size option shown in the select dropdown. If given as a string, that string
 * is used both as the CSS `font-size` value and the user-facing `label`
 * (equivalent to using an object with just the `value` set as that string).
 */
export type FontSizeSelectOption = string | FontSizeSelectOptionObject;
export interface MenuSelectFontSizeProps extends Except<MenuSelectProps<string>, "value" | "children"> {
    /**
     * Override the list of the size option strings shown in the dropdown.
     */
    options?: FontSizeSelectOption[];
    /** @deprecated Use `options` prop instead. */
    sizeOptions?: string[];
    /**
     * Override the label content shown for the Select's MenuItem option that
     * allows a user to unset the font-size of the selected text. If not provided,
     * uses "Default" as the displayed text. To hide this select option entirely,
     * set `hideUnsetOption` to true.
     */
    unsetOptionLabel?: ReactNode;
    /** @deprecated Use `unsetOptionLabel` prop instead. */
    unsetOptionContent?: ReactNode;
    /**
     * If true, hides the additional first select option to "unset" the font-size
     * back to its default. By default false.
     */
    hideUnsetOption?: boolean;
    /**
     * What to render in the Select when either no font-size is currently set for
     * the selected text, or when multiple different values are set. By default,
     * uses the FormatSize MUI icon.
     */
    emptyLabel?: React.ReactNode;
    /** @deprecated Use `emptyLabel` prop instead. */
    emptyValue?: React.ReactNode;
}
/** A font-size selector for use with the mui-tiptap FontSize extension.  */
export default function MenuSelectFontSize({ options, sizeOptions, hideUnsetOption, unsetOptionLabel, unsetOptionContent, emptyLabel, emptyValue, ...menuSelectProps }: MenuSelectFontSizeProps): import("react/jsx-runtime").JSX.Element;
