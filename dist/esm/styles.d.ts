import { type CSSObject, type Theme } from "@mui/material";
type StyleRules = Record<string, CSSObject>;
export declare const Z_INDEXES: {
    readonly TABLE_ELEMENT: 1;
    readonly MENU_BAR: 2;
    readonly NOTCHED_OUTLINE: 2;
    readonly BUBBLE_MENU: 3;
};
export declare function getEditorStyles(theme: Theme): StyleRules;
/**
 * Get the background color styles to use for user-provided images being previewed.
 *
 * Useful for handling transparent images better in dark mode, since they typically
 * would have been created on a light-colored background context (e.g. may have black
 * text labels that wouldn't be readable in dark mode otherwise).
 */
export declare function getImageBackgroundColorStyles(theme: Theme): {
    backgroundColor?: string;
    color?: string;
};
/**
 * Get a utility class of the form "MuiTiptap-Foo-root" for the <Foo />
 * component and "root" (root element) slot.
 *
 * For convenience in users targeting certain CSS selectors to override
 * component styles, similar to what MUI does with its "Mui<Component>-<slot>"
 * classes (as described here
 * https://mui.com/material-ui/experimental-api/classname-generator/#setup and
 * somewhat here
 * https://mui.com/base-ui/getting-started/customization/#applying-custom-css-rules).
 *
 * A utility class is just used for targeting elements and overriding styles in
 * nested components (rather than us delivering CSS for the utility class
 * directly, since we instead use tss-react to generate CSS).
 */
export declare function getUtilityClass(componentName: string, slot: string): string;
/**
 * Get a Record mapping each slot name for a component to its utility class for
 * that component.
 *
 * These returned utility classes are used for targeting and overriding styles
 * in nested components (rather than us delivering CSS for the utility classes
 * directly, since we instead use tss-react to generate CSS).
 *
 * Ex: {"root": "MuiTiptap-Foo-root"} for the <Foo /> component.
 */
export declare function getUtilityClasses<T extends string>(componentName: string, slots: T[]): Record<T, string>;
export {};
