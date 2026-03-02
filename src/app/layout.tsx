import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
    title: "42GRAM - Official Website",
    description: "42GRAM is an electronic music artist from the Netherlands. Book now for events worldwide.",
    icons: {
        icon: "https://ext.same-assets.com/1093960037/2983012332.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ClientBody>{children}</ClientBody>
        </html>
    );
}
