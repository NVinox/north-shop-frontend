import { ReactNode } from "react";

import { BoxIcon, CartIcon, HeartIcon } from "@/shared/icons";
import {
	CART_ROUTE_URL,
	ORDERS_ROUTE_URL,
	FAVORITES_ROUTE_URL,
	CART_ROUTE_TEXT,
	ORDERS_ROUTE_TEXT,
	FAVORITES_ROUTE_TEXT,
} from "@/shared/constants";

interface ILink {
	id: number;
	icon: ReactNode;
	href: string;
	text: string;
}

export const LINKS: ILink[] = [
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
