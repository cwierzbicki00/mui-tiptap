"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizableImageResizer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const mui_1 = require("tss-react/mui");
const useStyles = (0, mui_1.makeStyles)({ name: { ResizableImageResizer } })((theme) => ({
    root: {
        position: "absolute",
        // The `outline` styles of the selected image add 3px to the edges, so we'll
        // position this offset by 3px outside to the bottom right
        bottom: -3,
        right: -3,
        width: 12,
        height: 12,
        background: theme.palette.primary.main,
        cursor: "nwse-resize",
    },
}));
function ResizableImageResizer({ onResize, className, }) {
    const { classes, cx } = useStyles();
    const [mouseDown, setMouseDown] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const handleMouseMove = (event) => {
            onResize(event);
        };
        if (mouseDown) {
            // If the user is currently holding down the resize handle, we'll have mouse
            // movements fire the onResize callback (since the user would be "dragging" the
            // handle)
            window.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseDown, onResize]);
    (0, react_1.useEffect)(() => {
        const handleMouseUp = () => setMouseDown(false);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);
    const handleMouseDown = (0, react_1.useCallback)((_event) => {
        setMouseDown(true);
    }, []);
    return (
    // There isn't a great role to use here (perhaps role="separator" is the
    // closest, as described here https://stackoverflow.com/a/43022983/4543977,
    // but we don't do keyboard-based resizing at this time so it doesn't make
    // sense to have it keyboard focusable)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0, jsx_runtime_1.jsx)("div", { 
        // TODO(Steven DeMartini): Add keyboard support and better accessibility
        // here, and allow users to override the aria-label when that happens to
        // support localization.
        // aria-label="resize image"
        className: cx(classes.root, className), onMouseDown: handleMouseDown }));
}
exports.ResizableImageResizer = ResizableImageResizer;