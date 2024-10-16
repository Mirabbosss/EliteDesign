import "../css/global.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Архитектура",
  description: "Архитектура",
};

interface RootLayoutProops{
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProops) {
  return (
    <html lang="en">
        {children}
    </html>
  );
}
