import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NodeViewWrapper } from "@tiptap/react";
import throttle from "lodash/throttle";
import { useMemo, useRef } from "react";
import { makeStyles } from "tss-react/mui";
import { ResizableImageResizer } from "./ResizableImageResizer";
const IMAGE_MINIMUM_WIDTH_PIXELS = 15;
const useStyles = makeStyles({ name: { ResizableImageComponent } })((theme) => ({
    imageContainer: {
        // Use inline-block so that the container is only as big as the inner
        // img
        display: "inline-block",
        // Use relative position so that the resizer is positioned relative to
        // the img dimensions (via their common container)
        position: "relative",
    },
    image: {
        // We need display:block in order for the container element to be
        // sized properly (no extra space below the image)
        display: "block",
    },
    imageSelected: {
        // This "selected" state outline style is copied from our standard editor
        // styles (which are kept there as well so they appear even if not using our
        // custom resizable image).
        outline: `3px solid ${theme.palette.primary.main}`,
    },
    resizer: {
        // As described here https://github.com/ueberdosis/tiptap/issues/3775,
        // updates to editor isEditable do not trigger re-rendering of node views.
        // Even editor state changes external to a given ReactNodeView component
        // will not trigger re-render (which is probably a good thing most of the
        // time, in terms of performance). As such, we always render the resizer
        // component with React (and so in the DOM), but hide it with CSS when the
        // editor is not editable. This also means its mouse event listeners will
        // also not fire, as intended.
        '.ProseMirror[contenteditable="false"] &': {
            display: "none",
        },
    },
}));
function ResizableImageComponent({ node, selected, updateAttributes }) {
    var _a;
    const { classes, cx } = useStyles();
    const { attrs } = node;
    const imageRef = useRef(null);
    const handleResize = useMemo(() => 
    // Throttle our "on resize" handler, since the event fires very rapidly during
    // dragging, so rendering would end up stuttering a bit without a throttle
    throttle((event) => {
        if (!imageRef.current) {
            return;
        }
        const originalBoundingRect = imageRef.current.getBoundingClientRect();
        // Get the "width" and "height" of the resized image based on the user's
        // cursor position after movement, if we were to imagine a box drawn from
        // the top left corner of the image to their cursor. (clientX/Y and
        // getBoundingClientRect both reference positions relative to the viewport,
        // allowing us to use them to calculate the new "resized" image dimensions.)
        const resizedWidth = event.clientX - originalBoundingRect.x;
        const resizedHeight = event.clientY - originalBoundingRect.y;
        // We always preserve the original image aspect ratio, setting only the
        // `width` to a specific number upon resize (and leaving the `height` of the
        // `img` as "auto"). So to determine the new width, we'll take the larger of
        // (a) the new resized width after the user's latest drag resize movement,
        // (b) the width proportional to the new resized height given the image
        // aspect ratio, or (c) a minimum width to prevent mistakes. This is similar
        // to what Google Docs image resizing appears to be doing, which feels
        // intuitive.
        const resultantWidth = Math.max(resizedWidth, (originalBoundingRect.width / originalBoundingRect.height) *
            resizedHeight, 
        // Set a minimum width, since any smaller is probably a mistake, and we
        // don't want images to get mistakenly shrunken below a size which makes
        // it hard to later select/resize the image
        IMAGE_MINIMUM_WIDTH_PIXELS);
        updateAttributes({
            width: Math.round(resultantWidth),
        });
    }, 50, { trailing: true } // Make sure our last event triggers a callback
    ), [updateAttributes]);
    return (_jsx(NodeViewWrapper, { style: {
            // Handle @tiptap/extension-text-align. Ideally we'd be able to inherit
            // this style from TextAlign's GlobalAttributes directly, but those are
            // only applied via `renderHTML` and not the `NodeView` renderer
            // (https://github.com/ueberdosis/tiptap/blob/6c34dec33ac39c9f037a0a72e4525f3fc6d422bf/packages/extension-text-align/src/text-align.ts#L43-L49),
            // so we have to do this manually/redundantly here.
            textAlign: attrs.textAlign,
            width: "100%",
        }, children: _jsxs("div", { className: classes.imageContainer, children: [_jsx("img", { ref: imageRef, src: attrs.src, height: "auto", width: attrs.width ? attrs.width : undefined, 
                    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                    alt: attrs.alt || undefined,
                    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                    title: attrs.title || undefined, className: cx(classes.image, 
                    // For consistency with the standard Image extension selection
                    // class/UI:
                    selected && "ProseMirror-selectednode", 
                    // We'll only show the outline when the editor content is selected
                    selected && classes.imageSelected), style: {
                        // If no width has been specified, we use auto max-width
                        maxWidth: attrs.width ? undefined : "auto",
                        // Always specify the aspect-ratio if it's been defined, to improve
                        // initial render (so auto-height works before the image loads)
                        aspectRatio: (_a = attrs.aspectRatio) !== null && _a !== void 0 ? _a : undefined,
                    }, "data-drag-handle": true, 
                    // When the image loads, we'll update our width and aspect-ratio based
                    // on the image's natural size, if they're not set. That way, all future
                    // renders will know the image width/height prior to load/render,
                    // preventing flashing
                    onLoad: (event) => {
                        const newAttributes = {};
                        if (!attrs.width) {
                            newAttributes.width = event.currentTarget.naturalWidth;
                        }
                        if (!attrs.aspectRatio) {
                            newAttributes.aspectRatio = String(event.currentTarget.naturalWidth /
                                event.currentTarget.naturalHeight);
                        }
                        if (newAttributes.width || newAttributes.aspectRatio) {
                            updateAttributes(newAttributes);
                        }
                    } }), selected && (_jsx(ResizableImageResizer, { onResize: handleResize, className: classes.resizer }))] }) }));
}
export default ResizableImageComponent;
