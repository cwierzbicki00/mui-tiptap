import debounce from "lodash/debounce";
import { useEffect, useMemo, useState } from "react";
/**
 * A hook for getting the Tiptap editor focused state, but debounced to prevent
 * "flashing" for brief blur/refocus moments, like when interacting with the
 * menu bar buttons.
 *
 * This is useful for showing the focus state visually, as with the `focused`
 * prop of <FieldContainer />.
 */
export default function useDebouncedFocus({ editor, wait = 250, }) {
    const [isFocusedDebounced, setIsFocusedDebounced] = useState(!!(editor === null || editor === void 0 ? void 0 : editor.isFocused));
    const updateIsFocusedDebounced = useMemo(() => debounce((focused) => setIsFocusedDebounced(focused), wait), [wait]);
    useEffect(() => {
        const isFocused = !!(editor === null || editor === void 0 ? void 0 : editor.isFocused);
        updateIsFocusedDebounced(isFocused);
        // We'll immediately "flush" to update the focused state of the outlined field when
        // the editor *becomes* focused (e.g. when a user first clicks into it), but we'll
        // debounce otherwise, since the editor can lose focus as a user interacts with the
        // menu bar, for instance. It feels fine to have a visual delay losing the focus
        // outline, but awkward to have delay in gaining the focus outline.
        if (isFocused) {
            updateIsFocusedDebounced.flush();
        }
        return () => {
            updateIsFocusedDebounced.cancel();
        };
    }, [editor === null || editor === void 0 ? void 0 : editor.isFocused, updateIsFocusedDebounced]);
    return isFocusedDebounced;
}
