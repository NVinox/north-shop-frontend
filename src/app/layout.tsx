import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

import { HOME_META_TITLE, HOME_META_DESCRIPTION } from "@/constants";

import "./globals.css";

const rubik = Rubik({
	variable: "--font-rubik",
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: HOME_META_TITLE,
	description: HOME_META_DESCRIPTION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body
				className={`${rubik.variable} font-sans antialiased min-h-screen flex flex-col`}
			>
				<Header />
				<main className="grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
