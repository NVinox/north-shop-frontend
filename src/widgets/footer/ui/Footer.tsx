import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import {
	VKIcon,
	OKIcon,
	LogoIcon,
	PhoneIcon,
	FacebookIcon,
	InstagramIcon,
	DesignByLogoIcon,
	LogoTitleRoundIcon,
} from "@/shared/icons";
import {
	CONTACT_PHONE,
	POSTS_ROUTE_TEXT,
	ABOUT_ROUTE_TEXT,
	POLICY_ROUTE_TEXT,
	CONTACTS_ROUTE_TEXT,
	VACANCIES_ROUTE_TEXT,
	POSTS_ROUTE_URL,
	ABOUT_ROUTE_URL,
	POLICY_ROUTE_URL,
	CONTACTS_ROUTE_URL,
	VACANCIES_ROUTE_URL,
} from "@/shared/constants";
import { LayoutContainer } from "@/shared/layoutContainer";
import FooterBackground from "@/shared/assets/footer-bg.jpg";

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

const LINKS: ILink[] = [
	{ id: 1, text: ABOUT_ROUTE_TEXT, href: ABOUT_ROUTE_URL },
	{ id: 2, text: CONTACTS_ROUTE_TEXT, href: CONTACTS_ROUTE_URL },
	{ id: 3, text: VACANCIES_ROUTE_TEXT, href: VACANCIES_ROUTE_URL },
	{ id: 4, text: POSTS_ROUTE_TEXT, href: POSTS_ROUTE_URL },
	{ id: 5, text: POLICY_ROUTE_TEXT, href: POLICY_ROUTE_URL },
];

const SOCIALS: ISocial[] = [
	{ id: 1, href: "#", icon: <InstagramIcon />, socialName: "Instagram" },
	{ id: 2, href: "#", icon: <VKIcon />, socialName: "VK" },
	{ id: 3, href: "#", icon: <FacebookIcon />, socialName: "Facebook" },
	{ id: 4, href: "#", icon: <OKIcon />, socialName: "OK" },
];

export default function Footer() {
	return (
		<footer className="relative py-[24px]">
			<Image
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover h-full z-[-1]"
				src={FooterBackground}
				alt="Бэкграунд футера"
				placeholder="blur"
			/>

			<LayoutContainer>
				<div className="grid grid-cols-[auto_1fr_auto] w-full">
					<div className="flex items-start">
						<div className="flex flex-col items-center">
							<LogoIcon />
							<LogoTitleRoundIcon />
						</div>
					</div>

					<nav className="md:row-start-1 lg:ml-[40px] xl:max-w-full md:max-w-[500px] md:col-start-2 md:ml-[20px] md:mt-0 sm:max-w-full xs:mt-[24px] xs:ml-0 xs:row-start-3 xs:col-start-1 xs:col-span-full">
						<ul className="flex flex-wrap items-center gap-y-[8px] lg:gap-x-[40px] lg:col-start-2 md:col-start-1 xs:gap-x-[16px]">
							{LINKS.map(({ id, text, href }) => (
								<li key={id}>
									<Link
										className="text-[12px] duration-200 transition-color hover:text-primary-text py-[5px]"
										href={href}
									>
										{text}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<ul className="grid md:grid-cols-2 md:gap-[8px] lg:grid-cols-4 lg:gap-[16px] md:row-start-1 md:col-start-3 xs:row-start-1 xs:col-start-3 xs:gap-[16px] xs:grid-cols-4 ml-[30px]">
						{SOCIALS.map(({ id, href, icon, socialName }) => (
							<li key={id}>
								<Link
									className="shrink-0 block w-[24px]"
									href={href}
									rel="nofollow noopener noreferrer"
									target="_blank"
									aria-label={socialName}
								>
									{icon}
								</Link>
							</li>
						))}
					</ul>

					<div className="flex flex-col items-end gap-y-[25px] lg:ml-[40px] md:ml-[25px] md:col-start-4 md:row-start-1 xs:col-start-3 xs:row-start-2">
						<Link
							className="flex items-center gap-x-[8px] whitespace-nowrap group"
							href={`tel:+${CONTACT_PHONE.replace(/\s/g, "")}`}
						>
							<PhoneIcon className="shrink-0" />
							<span>{CONTACT_PHONE}</span>
						</Link>
					</div>

					<div className="hidden md:flex md:items-center md:ml-auto md:gap-x-[8px] md:col-start-4">
						<span className="text-[12px]">Дизайн</span>
						<DesignByLogoIcon />
					</div>
				</div>
			</LayoutContainer>
		</footer>
	);
}
