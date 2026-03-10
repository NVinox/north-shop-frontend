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
				<div className="flex flex-col items-end gap-y-[16px]">
					<div className="flex justify-between items-center gap-x-[20px] w-full">
						<div className="flex items-center gap-x-[40px]">
							<div className="flex flex-col items-center">
								<LogoIcon />
								<LogoTitleRoundIcon />
							</div>
							<nav>
								<ul className="flex items-center gap-x-[40px]">
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
						</div>

						<div className="flex items-start gap-x-[40px]">
							<ul className="flex items-center gap-x-[16px]">
								{SOCIALS.map(({ id, href, icon, socialName }) => (
									<li key={id}>
										<Link
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
							<div className="flex flex-col gap-y-[25px]">
								<Link
									className="flex items-center gap-x-[8px]"
									href={`tel:+${CONTACT_PHONE.replace(/\s/g, "")}`}
								>
									<PhoneIcon />
									<span>{CONTACT_PHONE}</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-x-[8px]">
						<span className="text-[12px]">Дизайн</span>
						<DesignByLogoIcon />
					</div>
				</div>
			</LayoutContainer>
		</footer>
	);
}
