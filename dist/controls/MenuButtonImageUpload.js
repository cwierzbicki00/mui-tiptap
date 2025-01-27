"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const context_1 = require("../context");
const utils_1 = require("../utils");
const MenuButtonAddImage_1 = __importDefault(require("./MenuButtonAddImage"));
/**
 * Render a button for uploading one or more images to insert into the editor
 * content. You must provide the `onUploadFiles` prop in order to specify how to
 * handle the user-selected files, like uploading them to a server which returns
 * a servable image URL, or converting the image files into a local object URL
 * or base64-encoded image URL.
 */
function MenuButtonImageUpload(_a) {
    var { onUploadFiles, inputProps } = _a, props = __rest(_a, ["onUploadFiles", "inputProps"]);
    const editor = (0, context_1.useRichTextEditorContext)();
    const fileInput = (0, react_1.useRef)(null);
    const handleAndInsertNewFiles = (files) => __awaiter(this, void 0, void 0, function* () {
        if (!editor || editor.isDestroyed || files.length === 0) {
            return;
        }
        const attributesForImages = yield onUploadFiles(Array.from(files));
        (0, utils_1.insertImages)({
            editor,
            images: attributesForImages,
        });
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(MenuButtonAddImage_1.default, Object.assign({ tooltipLabel: "Upload images", onClick: () => { var _a; return (_a = fileInput.current) === null || _a === void 0 ? void 0 : _a.click(); } }, props)), (0, jsx_runtime_1.jsx)("input", Object.assign({ ref: fileInput, type: "file", accept: "image/*", multiple: true, onChange: (event) => __awaiter(this, void 0, void 0, function* () {
                    if (event.target.files) {
                        yield handleAndInsertNewFiles(event.target.files);
                    }
                }), style: { display: "none" } }, inputProps))] }));
}
exports.default = MenuButtonImageUpload;
