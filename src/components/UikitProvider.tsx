import {PropsWithChildren} from "react";
import {ThemeProvider} from "next-themes";

export const UikitProvider = (props: PropsWithChildren) => {
    return (
        <ThemeProvider attribute="class">
            <div className="p-4 min-h-max">
                {props.children}
            </div>
        </ThemeProvider>
    )
}