import Link from "next/link";

import { SOCIALS, LINKS } from "@/widgets/footer";

import {
	LogoIcon,
	PhoneIcon,
	DesignByLogoIcon,
	LogoTitleRoundIcon,
} from "@/shared/icons";
import { CONTACT_PHONE } from "@/shared/constants";
import { LayoutContainer } from "@/shared/layoutContainer";
import FooterBackground from "@/shared/assets/footer-bg.png";

export default function Footer() {
	return (
		<footer
			className="py-[40px] bg-repeat-x bg-center bg-[length:auto_100%] md:py-[24px] sm:py-[32px]"
			style={{ backgroundImage: `url(${FooterBackground.src})` }}
		>
			<LayoutContainer>
				<div className="grid grid-cols-[auto_1fr_auto] w-full">
					<div className="flex items-start">
						<div className="flex flex-col items-center">
							<LogoIcon />
							<LogoTitleRoundIcon />
						</div>
					</div>
					<nav className="xl:max-w-full lg:ml-[40px] md:ml-[20px] md:max-w-[500px] md:col-start-2 md:row-start-1 sm:max-w-full sm:ml-0 sm:mt-0 xs:mt-[20px] xs:row-start-3 xs:col-start-1 xs:col-span-full">
						<ul className="flex flex-wrap items-center lg:gap-x-[40px] lg:col-start-2 md:gap-y-[8px] md:col-start-1 xs:gap-[16px]">
							{LINKS.map(({ id, text, href }) => (
								<li key={id}>
									<Link
										className="text-xs transition-base hover:text-primary-text py-[5px]"
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
						<span className="text-xs">Дизайн</span>
						<DesignByLogoIcon />
					</div>
				</div>
			</LayoutContainer>
		</footer>
	);
}
