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
	FAVORITES_ROUTE_URL,
	CATEGORIES_ROUTE_URL,
	FAVORITES_ROUTE_TEXT,
} from "@/shared/constants";
import { LayoutContainer } from "@/shared/layoutContainer";
import { HeaderLink } from "@/shared/headerLink";

export default function Header() {
	return (
		<header className="sticky bg-surface shadow-header z-10">
			<LayoutContainer>
				<div className="flex items-center justify-between">
					<nav>
						<Link
							className="flex items-center gap-x-[10px]"
							href={HOME_ROUTE_URL}
						>
							<LogoIcon />
							<LogoTitleIcon />
						</Link>
					</nav>

					<div className="flex items-center gap-x-[16px]">
						<CategoriesDropdown />
						<SearchProduct />
					</div>

					<nav className="flex items-center gap-x-[24px]">
						<HeaderLink
							icon={<HeartIcon />}
							href={FAVORITES_ROUTE_URL}
							text={FAVORITES_ROUTE_TEXT}
						/>
						<HeaderLink
							icon={<BoxIcon />}
							href={CATEGORIES_ROUTE_URL}
							text={ORDERS_ROUTE_TEXT}
						/>
						<HeaderLink
							icon={<CartIcon />}
							href={CART_ROUTE_URL}
							text={CART_ROUTE_TEXT}
						/>
					</nav>

					<ProfileDropdown />
				</div>
			</LayoutContainer>
		</header>
	);
}
