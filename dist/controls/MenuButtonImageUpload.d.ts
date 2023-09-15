import type { Editor } from "@tiptap/core";
import { type ComponentPropsWithoutRef } from "react";
import type { SetOptional } from "type-fest";
import { type ImageNodeAttributes } from "../utils";
import { type MenuButtonAddImageProps } from "./MenuButtonAddImage";
export interface MenuButtonImageUploadProps extends SetOptional<MenuButtonAddImageProps, "onClick"> {
    /**
     * Take an array of user-selected files to upload, and return an array of
     * image node attributes. Typically will be an async function (i.e. will
     * return a promise) used to upload the files to a server and return URLs at
     * which the image files can be viewed subsequently.
     */
    onUploadFiles: (files: File[]) => ImageNodeAttributes[] | Promise<ImageNodeAttributes[]>;
    /**
     * Handler called with the result from `onUploadFiles`, taking the uploaded
     * files and inserting them into the Tiptap content. If not provided, by
     * default uses mui-tiptap's `insertImages` utility, which inserts the images
     * at the user's current caret position (replacing selected content if there
     * is selected content).
     */
    insertImages?: ({ images, editor, }: {
        images: ImageNodeAttributes[];
        editor: Editor | null;
    }) => void;
    /**
     * Override props used for the hidden file input. For instance, to restrict to
     * single file uploads with `multiple={false}`. Use `accept` to customize
     * which file types are accepted (by default "image/*" to restrict to standard
     * image formats; see
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept).
     */
    inputProps?: Partial<ComponentPropsWithoutRef<"input">>;
}
/**
 * Render a button for uploading one or more images to insert into the editor
 * content. You must provide the `onUploadFiles` prop in order to specify how to
 * handle the user-selected files, like uploading them to a server which returns
 * a servable image URL, or converting the image files into a local object URL
 * or base64-encoded image URL.
 */
export default function MenuButtonImageUpload({ onUploadFiles, inputProps, ...props }: MenuButtonImageUploadProps): import("react/jsx-runtime").JSX.Element;
