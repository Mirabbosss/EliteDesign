import type { ReactNode } from "react";

const LoginLayout = ({children} : {children: ReactNode}) => {
    return (
        <body>
            {children}
        </body> 
    );
};

export default LoginLayout;