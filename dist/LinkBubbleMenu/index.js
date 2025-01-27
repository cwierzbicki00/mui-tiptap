"use strict";
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
/// <reference types="@tiptap/extension-link" />
const mui_1 = require("tss-react/mui");
const ControlledBubbleMenu_1 = __importDefault(require("../ControlledBubbleMenu"));
const context_1 = require("../context");
const LinkBubbleMenuHandler_1 = require("../extensions/LinkBubbleMenuHandler");
const EditLinkMenuContent_1 = __importDefault(require("./EditLinkMenuContent"));
const ViewLinkMenuContent_1 = __importDefault(require("./ViewLinkMenuContent"));
const useStyles = (0, mui_1.makeStyles)({ name: { LinkBubbleMenu } })((theme) => ({
    content: {
        padding: theme.spacing(1.5, 2, 0.5),
    },
}));
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
function LinkBubbleMenu(_a) {
    var { labels } = _a, controlledBubbleMenuProps = __rest(_a, ["labels"]);
    const { classes } = useStyles();
    const editor = (0, context_1.useRichTextEditorContext)();
    if (!(editor === null || editor === void 0 ? void 0 : editor.isEditable)) {
        return null;
    }
    if (!("linkBubbleMenuHandler" in editor.storage)) {
        throw new Error("You must add the LinkBubbleMenuHandler extension to the useEditor `extensions` array in order to use this component!");
    }
    const handlerStorage = editor.storage
        .linkBubbleMenuHandler;
    // Update the menu step if the bubble menu state has changed
    const menuState = handlerStorage.state;
    let linkMenuContent = null;
    if (menuState === LinkBubbleMenuHandler_1.LinkMenuState.VIEW_LINK_DETAILS) {
        linkMenuContent = ((0, jsx_runtime_1.jsx)(ViewLinkMenuContent_1.default, { editor: editor, onCancel: editor.commands.closeLinkBubbleMenu, onEdit: editor.commands.editLinkInBubbleMenu, onRemove: () => {
                // Remove the link and place the cursor at the end of the link (which
                // requires "focus" to take effect)
                editor
                    .chain()
                    .unsetLink()
                    .setTextSelection(editor.state.selection.to)
                    .focus()
                    .run();
            }, labels: labels }));
    }
    else if (menuState === LinkBubbleMenuHandler_1.LinkMenuState.EDIT_LINK) {
        linkMenuContent = ((0, jsx_runtime_1.jsx)(EditLinkMenuContent_1.default, { editor: editor, onCancel: editor.commands.closeLinkBubbleMenu, onSave: ({ text, link }) => {
                editor
                    .chain()
                    // Make sure if we're updating a link, we update the link for the
                    // full link "mark"
                    .extendMarkRange("link")
                    // Update the link href and its text content
                    .insertContent({
                    type: "text",
                    marks: [
                        {
                            type: "link",
                            attrs: {
                                href: link,
                            },
                        },
                    ],
                    text: text,
                })
                    // Note that as of "@tiptap/extension-link" 2.0.0-beta.37 when
                    // `autolink` is on (which we want), adding the link mark directly
                    // via `insertContent` above wasn't sufficient for the link mark to
                    // be applied (though specifying it above is still necessary), so we
                    // insert the content there and call `setLink` separately here.
                    // Unclear why this separate command is necessary, but it does the
                    // trick.
                    .setLink({
                    href: link,
                })
                    // Place the cursor at the end of the link (which requires "focus"
                    // to take effect)
                    .focus()
                    .run();
                editor.commands.closeLinkBubbleMenu();
            }, labels: labels }));
    }
    return ((0, jsx_runtime_1.jsx)(ControlledBubbleMenu_1.default, Object.assign({ editor: editor, open: menuState !== LinkBubbleMenuHandler_1.LinkMenuState.HIDDEN }, handlerStorage.bubbleMenuOptions, controlledBubbleMenuProps, { children: (0, jsx_runtime_1.jsx)("div", { className: classes.content, children: linkMenuContent }) })));
}
exports.default = LinkBubbleMenu;
