import { useEffect, useRef } from "react";
/** When the given key is pressed down, execute the given callback. */
export default function useKeyDown(key, callback) {
    // Use a ref in case `callback` isn't memoized
    const callbackRef = useRef(callback);
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    useEffect(() => {
        function handleKeyDown(event) {
            if (key === event.key) {
                callbackRef.current(event);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [key]);
}
