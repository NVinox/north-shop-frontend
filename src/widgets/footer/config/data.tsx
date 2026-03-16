import { ReactNode } from "react";

import { InstagramIcon, VKIcon, FacebookIcon, OKIcon } from "@/shared/icons";

import {
	POSTS_ROUTE_URL,
	ABOUT_ROUTE_URL,
	POLICY_ROUTE_URL,
	CONTACTS_ROUTE_URL,
	VACANCIES_ROUTE_URL,
	ABOUT_ROUTE_TEXT,
	POSTS_ROUTE_TEXT,
	POLICY_ROUTE_TEXT,
	CONTACTS_ROUTE_TEXT,
	VACANCIES_ROUTE_TEXT,
} from "@/shared/constants";

interface ILink {
	id: number;
	text: string;
	href: string;
}

interface ISocial {
	id: number;
	href: string;
	icon: ReactNode;
	socialName: string;
}

export const LINKS: ILink[] = [
	{ id: 1, text: ABOUT_ROUTE_TEXT, href: ABOUT_ROUTE_URL },
	{ id: 2, text: CONTACTS_ROUTE_TEXT, href: CONTACTS_ROUTE_URL },
	{ id: 3, text: VACANCIES_ROUTE_TEXT, href: VACANCIES_ROUTE_URL },
	{ id: 4, text: POSTS_ROUTE_TEXT, href: POSTS_ROUTE_URL },
	{ id: 5, text: POLICY_ROUTE_TEXT, href: POLICY_ROUTE_URL },
];

export const SOCIALS: ISocial[] = [
	{ id: 1, href: "#", icon: <InstagramIcon />, socialName: "Instagram" },
	{ id: 2, href: "#", icon: <VKIcon />, socialName: "VK" },
	{ id: 3, href: "#", icon: <FacebookIcon />, socialName: "Facebook" },
	{ id: 4, href: "#", icon: <OKIcon />, socialName: "OK" },
];
