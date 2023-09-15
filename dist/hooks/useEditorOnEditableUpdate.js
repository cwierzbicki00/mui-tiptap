"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * A hook for listening to changes in the Tiptap editor isEditable state, via
 * "update" event.
 *
 * This can be useful inside of ReactNodeViews that depend on editor isEditable
 * state. As described here https://github.com/ueberdosis/tiptap/issues/3775,
 * updates to editor isEditable do not trigger re-rendering of node views. Even
 * editor state changes external to a given ReactNodeView component will not
 * trigger re-render (which is probably a good thing most of the time, in terms
 * of performance). As such, this hook can listen for editor.isEditable changes
 * and can be used to force a re-render, update state, etc.
 */
function useEditorOnEditableUpdate({ editor, callback, }) {
    const callbackRef = (0, react_1.useRef)(callback);
    const isEditableRef = (0, react_1.useRef)(editor === null || editor === void 0 ? void 0 : editor.isEditable);
    (0, react_1.useEffect)(() => {
        callbackRef.current = callback;
    }, [callback]);
    const hasCallback = !!callback;
    (0, react_1.useEffect)(() => {
        if (!editor || editor.isDestroyed || !hasCallback) {
            return;
        }
        isEditableRef.current = editor.isEditable;
        function handleUpdate(props) {
            var _a;
            if (!editor ||
                editor.isDestroyed ||
                editor.isEditable === isEditableRef.current) {
                return;
            }
            // The editable state has changed!
            isEditableRef.current = editor.isEditable;
            (_a = callbackRef.current) === null || _a === void 0 ? void 0 : _a.call(callbackRef, props);
        }
        editor.on("update", handleUpdate);
        return () => {
            editor.off("update", handleUpdate);
        };
    }, [editor, hasCallback]);
}
exports.default = useEditorOnEditableUpdate;