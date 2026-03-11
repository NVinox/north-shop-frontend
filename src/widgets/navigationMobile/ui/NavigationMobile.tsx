import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

import {
	CART_ROUTE_URL,
	ORDERS_ROUTE_URL,
	FAVORITES_ROUTE_URL,
	CATEGORIES_ROUTE_URL,
	CART_ROUTE_TEXT,
	ORDERS_ROUTE_TEXT,
	FAVORITES_ROUTE_TEXT,
	CATEGORIES_ROUTE_TEXT,
} from "@/shared/constants";
import { BoxIcon, BurgerIcon, CartIcon, HeartIcon } from "@/shared/icons";
import { LayoutContainer } from "@/shared/layoutContainer";
import PlaceholderAvatar from "@shared/assets/placeholder-avatar.svg";

interface ILink {
	id: number;
	icon: ReactNode;
	href: string;
	text: string;
}

const LINKS: ILink[] = [
	{
		id: 1,
		icon: <BurgerIcon color="black" />,
		href: CATEGORIES_ROUTE_URL,
		text: CATEGORIES_ROUTE_TEXT,
	},
	{
		id: 2,
		icon: <HeartIcon />,
		href: FAVORITES_ROUTE_URL,
		text: FAVORITES_ROUTE_TEXT,
	},
	{
		id: 3,
		icon: <BoxIcon />,
		href: ORDERS_ROUTE_URL,
		text: ORDERS_ROUTE_TEXT,
	},
	{
		id: 4,
		icon: <CartIcon />,
		href: CART_ROUTE_URL,
		text: CART_ROUTE_TEXT,
	},
];

export default function NavigationMobile() {
	return (
		<div className="block sticky bottom-0 left-0 w-full bg-surface py-[8px] shadow-header md:hidden">
			<LayoutContainer>
				<div className="flex items-center w-full justify-between">
					<nav className="contents">
						<ul className="contents">
							{LINKS.map(({ id, icon, href, text }) => (
								<li key={id}>
									<Link
										className="flex flex-col items-center gap-y-[4px] text-[8px] transition-color duration-200 hover:text-primary-text"
										href={href}
									>
										{icon} {text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<button className="cursor-pointer">
						<Image
							className="rounded-full"
							width="40"
							height="40"
							src={PlaceholderAvatar}
							alt="Альт для заглушки"
						/>
					</button>
				</div>
			</LayoutContainer>
		</div>
	);
}
