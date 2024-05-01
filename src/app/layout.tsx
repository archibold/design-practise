import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={`${inter.className} bg-main min-h-screen`}>
                <nav className="mobile:flex h-[80px] bg-white hidden">
                    <Image
                        className="ml-[40px]"
                        src="/logo.svg"
                        alt="Vercel Logo"
                        height={32}
                        width={147}
                        priority
                    />
                </nav>
                {children}
            </body>
        </html>
    );
}
