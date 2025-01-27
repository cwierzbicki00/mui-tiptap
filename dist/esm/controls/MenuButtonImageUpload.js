import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useRichTextEditorContext } from "../context";
import { insertImages } from "../utils";
import MenuButtonAddImage from "./MenuButtonAddImage";
/**
 * Render a button for uploading one or more images to insert into the editor
 * content. You must provide the `onUploadFiles` prop in order to specify how to
 * handle the user-selected files, like uploading them to a server which returns
 * a servable image URL, or converting the image files into a local object URL
 * or base64-encoded image URL.
 */
export default function MenuButtonImageUpload({ onUploadFiles, inputProps, ...props }) {
    const editor = useRichTextEditorContext();
    const fileInput = useRef(null);
    const handleAndInsertNewFiles = async (files) => {
        if (!editor || editor.isDestroyed || files.length === 0) {
            return;
        }
        const attributesForImages = await onUploadFiles(Array.from(files));
        insertImages({
            editor,
            images: attributesForImages,
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx(MenuButtonAddImage, { tooltipLabel: "Upload images", onClick: () => { var _a; return (_a = fileInput.current) === null || _a === void 0 ? void 0 : _a.click(); }, ...props }), _jsx("input", { ref: fileInput, type: "file", accept: "image/*", multiple: true, onChange: async (event) => {
                    if (event.target.files) {
                        await handleAndInsertNewFiles(event.target.files);
                    }
                }, style: { display: "none" }, ...inputProps })] }));
}
