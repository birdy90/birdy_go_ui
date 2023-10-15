import {NextUIProvider} from "@nextui-org/react";
import {PropsWithChildren} from "react";

export const ThemeProvider = (props: PropsWithChildren) => {
    return (
        <NextUIProvider>
            {props.children}
        </NextUIProvider>
    )
}