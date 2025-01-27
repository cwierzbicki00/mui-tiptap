import { type ImageOptions } from "@tiptap/extension-image";
export type ResizableImageOptions = ImageOptions & {
    /**
     * Return true if this is an img src we will permit to be created/rendered.
     *
     * If not provided, defaults to allowing all non-empty image `src` values.
     *
     * This option can be used to restrict which images are permitted. For
     * instance, this can be set such that only images from a certain set of
     * hostnames are allowed.
     */
    isAllowedImgSrc(src: string | null): boolean;
};
/**
 * A modified version of Tiptap’s `Image` extension
 * (https://tiptap.dev/api/nodes/image), which adds the ability to resize images
 * directly in the editor. A drag handle appears in the bottom right when
 * clicking on an image, so users can interactively change the size.
 */
declare const ResizableImage: import("@tiptap/core").Node<ResizableImageOptions, any>;
export default ResizableImage;
