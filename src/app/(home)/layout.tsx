import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import type { ReactNode } from "react";

interface RootLayoutProops {
    children: ReactNode;
}

export default function HomeLayout({ children }: RootLayoutProops) {
    return (
        <body>
            <Header />
            {children}
            <Footer />
        </body>
    );
}
