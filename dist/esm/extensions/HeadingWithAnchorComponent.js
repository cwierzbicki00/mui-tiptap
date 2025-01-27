import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link as LinkIcon } from "@mui/icons-material";
import { getText, getTextSerializersFromSchema, } from "@tiptap/core";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import { useMemo } from "react";
import { makeStyles } from "tss-react/mui";
import { getUtilityClasses } from "../styles";
import slugify from "../utils/slugify";
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
const useStyles = makeStyles({
    name: { HeadingWithAnchorComponent },
    uniqId: "kNc4LD", // https://docs.tss-react.dev/nested-selectors#ssr
})((theme, _params, classes) => ({
    root: {
        // Reference the "link" class defined below so that when the header is
        // hovered over, we make the anchor link visible.
        [`&:hover .${classes.link}`]: {
            opacity: 100,
        },
    },
    container: {
        // Use inline-block so that the container is only as big as the inner
        // heading content
        display: "inline-block",
        // Use relative position so that the link is positioned relative to
        // the inner heading content position (via this common container)
        position: "relative",
    },
    link: {
        position: "absolute",
        left: -21,
        color: `${theme.palette.text.secondary} !important`,
        opacity: 0,
        transition: theme.transitions.create("opacity"),
        textDecoration: "none",
        outline: "none",
        [theme.breakpoints.down("sm")]: {
            left: -18,
        },
        // As described here https://github.com/ueberdosis/tiptap/issues/3775,
        // updates to editor isEditable do not trigger re-rendering of node views.
        // Even editor state changes external to a given ReactNodeView component
        // will not trigger re-render (which is probably a good thing most of the
        // time, in terms of performance). As such, we always render the link in the
        // DOM, but hide it with CSS when the editor is editable.
        '.ProseMirror[contenteditable="true"] &': {
            display: "none",
        },
    },
    linkIcon: {
        // Looks better to have at an angle, similar to the GitHub icon
        transform: "rotate(-45deg)",
        fontSize: "1.25rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.15rem",
        },
    },
}));
const headingWithAnchorComponentClasses = getUtilityClasses(HeadingWithAnchorComponent.name, [
    "root",
    "container",
    "link",
    "linkIcon",
]);
export default function HeadingWithAnchorComponent({ editor, node, extension, }) {
    const { classes, cx } = useStyles();
    // Some of the logic here is based on the renderHTML definition from the
    // original Heading Node
    // (https://github.com/ueberdosis/tiptap/blob/c9eb6a6299796450c7c1cfdc3552d76070c78c65/packages/extension-heading/src/heading.ts#L58-L65)
    const hasLevel = extension.options.levels.includes(node.attrs.level);
    const level = hasLevel ? node.attrs.level : extension.options.levels[0];
    const HeadingTag = `h${level}`;
    // Create an anchor ID based on the text content of the header (like
    // GitHub/GitLab do). Note that we use Tiptap's `getText` rather than
    // `node.textContent` so that nodes like Mentions can produce text for this
    // purpose (see https://github.com/ueberdosis/tiptap/pull/1875 and
    // https://github.com/ueberdosis/tiptap/issues/1336 for instance)
    const textSerializers = useMemo(() => getTextSerializersFromSchema(editor.schema), [editor.schema]);
    const headingId = slugify(getText(node, {
        textSerializers: textSerializers,
    }));
    return (_jsx(NodeViewWrapper, { as: HeadingTag, id: headingId, ...extension.options.HTMLAttributes, className: cx(headingWithAnchorComponentClasses.root, classes.root), 
        // Handle @tiptap/extension-text-align. Ideally we'd be able to inherit
        // this style from TextAlign's GlobalAttributes directly, but those are
        // only applied via `renderHTML` and not the `NodeView` renderer
        // (https://github.com/ueberdosis/tiptap/blob/6c34dec33ac39c9f037a0a72e4525f3fc6d422bf/packages/extension-text-align/src/text-align.ts#L43-L49),
        // so we have to do this manually/redundantly here.
        style: { textAlign: node.attrs.textAlign }, children: _jsxs("span", { className: cx(headingWithAnchorComponentClasses.container, classes.container), children: [_jsx("a", { href: `#${headingId}`, contentEditable: false, className: cx(headingWithAnchorComponentClasses.link, classes.link), children: _jsx(LinkIcon, { className: cx(headingWithAnchorComponentClasses.linkIcon, classes.linkIcon) }) }), _jsx(NodeViewContent, { as: "span" })] }) }));
}
