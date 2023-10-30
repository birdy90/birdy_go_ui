import {PropsWithChildren} from "react";
import {ThemeProvider} from "next-themes";

export const UikitProvider = (props: PropsWithChildren) => {
    return (
        <ThemeProvider attribute="class">
            {props.children}
        </ThemeProvider>
    )
}