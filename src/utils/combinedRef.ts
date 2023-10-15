import {ForwardedRef, MutableRefObject} from "react";

export const combinedRef =
    <T = HTMLElement>(parentRef: ForwardedRef<T>, localRef: MutableRefObject<T>) =>
    (ref: T) => {
        if (typeof parentRef === "function") {
            parentRef(ref);
        } else if (parentRef !== null) {
            parentRef.current = ref;
        }
        localRef.current = ref;
    };
