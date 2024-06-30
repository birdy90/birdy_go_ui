import {PropsWithChildren} from "react";
import {JSX} from "react/jsx-runtime";
import IntrinsicElements = JSX.IntrinsicElements;

export interface HeaderProps extends PropsWithChildren {
    className?: string;
    level?: number;
}

export const Header = (props: HeaderProps) => {
    const {level, children} = props;
    const Component = (level ? `h${level}` : 'header') as keyof IntrinsicElements;

    return <Component>
        {children}
    </Component>
}


export const H1 = (props: HeaderProps) => <Header {...props} level={1} />;
export const H2 = (props: HeaderProps) => <Header {...props} level={2} />;
export const H3 = (props: HeaderProps) => <Header {...props} level={3} />;
export const H4 = (props: HeaderProps) => <Header {...props} level={4} />;
export const H5 = (props: HeaderProps) => <Header {...props} level={5} />;