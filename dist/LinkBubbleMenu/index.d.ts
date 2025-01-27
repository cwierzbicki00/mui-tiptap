import type { Except } from "type-fest";
import { type ControlledBubbleMenuProps } from "../ControlledBubbleMenu";
import { type EditLinkMenuContentProps } from "./EditLinkMenuContent";
import { type ViewLinkMenuContentProps } from "./ViewLinkMenuContent";
export interface LinkBubbleMenuProps extends Partial<Except<ControlledBubbleMenuProps, "open" | "editor" | "children">> {
    /**
     * Override the default text content/labels in this interface. For any value
     * that is omitted in this object, it falls back to the default content.
     */
    labels?: ViewLinkMenuContentProps["labels"] & EditLinkMenuContentProps["labels"];
}
/**
 * A component that renders a bubble menu when viewing, creating, or editing a
 * link. Requires the mui-tiptap LinkBubbleMenuHandler extension and Tiptap's
 * Link extension (@tiptap/extension-link, https://tiptap.dev/api/marks/link) to
 * both be included in your editor `extensions` array.
 *
 * Pairs well with the `<MenuButtonEditLink />` component.
 *
 * If you're using `RichTextEditor`, include this component via
 * `RichTextEditor`’s `children` render-prop. Otherwise, include the
 * `LinkBubbleMenu` as a child of the component where you call `useEditor` and
 * render your `RichTextField` or `RichTextContent`. (The bubble menu itself
 * will be positioned appropriately no matter where you put it in your React
 * tree, as long as it is re-rendered whenever the Tiptap `editor` forces an
 * update, which will happen if it's a child of the component using
 * `useEditor`).
 */
export default function LinkBubbleMenu({ labels, ...controlledBubbleMenuProps }: LinkBubbleMenuProps): import("react/jsx-runtime").JSX.Element | null;
