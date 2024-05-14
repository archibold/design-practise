import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
    title: "Natur.ally",
    description: "The beauty you want to joy",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={"bg-main h-screen flex flex-col"}>
                <nav className="hidden md:flex h-[80px] bg-white ">
                    <Image
                        className="ml-[40px]"
                        src="/logo.svg"
                        alt="Natur.ally Logo"
                        height={32}
                        width={147}
                    />
                </nav>
                {children}
            </body>
        </html>
    );
}
