import { ReactNode } from "react";
import Link from "next/link";

import { SearchProduct } from "@/features/searchProduct";
import { ProfileDropdown } from "@/features/profileDropdown";
import { CategoriesDropdown } from "@/features/categoriesDropdown";

import {
	BoxIcon,
	LogoIcon,
	CartIcon,
	HeartIcon,
	LogoTitleIcon,
} from "@/shared/icons";
import {
	HOME_ROUTE_URL,
	CART_ROUTE_URL,
	CART_ROUTE_TEXT,
	ORDERS_ROUTE_TEXT,
	ORDERS_ROUTE_URL,
	FAVORITES_ROUTE_URL,
	FAVORITES_ROUTE_TEXT,
} from "@/shared/constants";
import { LayoutContainer } from "@/shared/layoutContainer";
import { HeaderLink } from "@/shared/headerLink";

interface ILink {
	id: number;
	icon: ReactNode;
	href: string;
	text: string;
}

const LINKS: ILink[] = [
	{
		id: 1,
		icon: <HeartIcon />,
		href: FAVORITES_ROUTE_URL,
		text: FAVORITES_ROUTE_TEXT,
	},
	{
		id: 2,
		icon: <BoxIcon />,
		href: ORDERS_ROUTE_URL,
		text: ORDERS_ROUTE_TEXT,
	},
	{
		id: 3,
		icon: <CartIcon />,
		href: CART_ROUTE_URL,
		text: CART_ROUTE_TEXT,
	},
];

export default function Header() {
	return (
		<header className="sticky bg-surface shadow-header z-10 lg:py-0 xs:py-[8px]">
			<LayoutContainer>
				<div className="flex items-center justify-between gap-x-[20px]">
					<nav>
						<Link
							className="flex items-center gap-x-[10px]"
							href={HOME_ROUTE_URL}
						>
							<LogoIcon />
							<LogoTitleIcon className="hidden lg:block" />
						</Link>
					</nav>

					<div className="flex items-center gap-x-[16px] lg:w-auto xs:w-full">
						<CategoriesDropdown />
						<SearchProduct />
					</div>

					<nav className="hidden md:block">
						<ul className="flex items-center gap-x-[24px]">
							{LINKS.map(({ id, icon, href, text }) => (
								<li key={id}>
									<HeaderLink href={href}>
										{icon}
										{text}
									</HeaderLink>
								</li>
							))}
						</ul>
					</nav>

					<ProfileDropdown />
				</div>
			</LayoutContainer>
		</header>
	);
}
