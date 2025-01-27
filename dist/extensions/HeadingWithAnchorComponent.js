"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_material_1 = require("@mui/icons-material");
const core_1 = require("@tiptap/core");
const react_1 = require("@tiptap/react");
const react_2 = require("react");
const mui_1 = require("tss-react/mui");
const styles_1 = require("../styles");
const slugify_1 = __importDefault(require("../utils/slugify"));
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
const useStyles = (0, mui_1.makeStyles)({
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
const headingWithAnchorComponentClasses = (0, styles_1.getUtilityClasses)(HeadingWithAnchorComponent.name, [
    "root",
    "container",
    "link",
    "linkIcon",
]);
function HeadingWithAnchorComponent({ editor, node, extension, }) {
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
    const textSerializers = (0, react_2.useMemo)(() => (0, core_1.getTextSerializersFromSchema)(editor.schema), [editor.schema]);
    const headingId = (0, slugify_1.default)((0, core_1.getText)(node, {
        textSerializers: textSerializers,
    }));
    return ((0, jsx_runtime_1.jsx)(react_1.NodeViewWrapper, Object.assign({ as: HeadingTag, id: headingId }, extension.options.HTMLAttributes, { className: cx(headingWithAnchorComponentClasses.root, classes.root), 
        // Handle @tiptap/extension-text-align. Ideally we'd be able to inherit
        // this style from TextAlign's GlobalAttributes directly, but those are
        // only applied via `renderHTML` and not the `NodeView` renderer
        // (https://github.com/ueberdosis/tiptap/blob/6c34dec33ac39c9f037a0a72e4525f3fc6d422bf/packages/extension-text-align/src/text-align.ts#L43-L49),
        // so we have to do this manually/redundantly here.
        style: { textAlign: node.attrs.textAlign }, children: (0, jsx_runtime_1.jsxs)("span", { className: cx(headingWithAnchorComponentClasses.container, classes.container), children: [(0, jsx_runtime_1.jsx)("a", { href: `#${headingId}`, contentEditable: false, className: cx(headingWithAnchorComponentClasses.link, classes.link), children: (0, jsx_runtime_1.jsx)(icons_material_1.Link, { className: cx(headingWithAnchorComponentClasses.linkIcon, classes.linkIcon) }) }), (0, jsx_runtime_1.jsx)(react_1.NodeViewContent, { as: "span" })] }) })));
}
exports.default = HeadingWithAnchorComponent;
