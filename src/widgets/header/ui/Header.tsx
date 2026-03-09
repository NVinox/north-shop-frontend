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
	CART_TEXT,
	FAVORITES_TEXT,
	CART_ROUTE,
	HOME_ROUTE,
	FAVORITES_ROUTE,
	CATEGORIES_ROUTE,
	ORDERS_TEXT,
} from "@/shared/constants";
import { LayoutContainer } from "@/shared/layoutContainer";
import { HeaderLink } from "@/shared/headerLink";

export default function Header() {
	return (
		<header className="sticky bg-surface shadow-header z-10">
			<LayoutContainer>
				<div className="flex items-center justify-between">
					<nav>
						<Link className="flex items-center gap-x-[10px]" href={HOME_ROUTE}>
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
							href={FAVORITES_ROUTE}
							text={FAVORITES_TEXT}
						/>
						<HeaderLink
							icon={<BoxIcon />}
							href={CATEGORIES_ROUTE}
							text={ORDERS_TEXT}
						/>
						<HeaderLink
							icon={<CartIcon />}
							href={CART_ROUTE}
							text={CART_TEXT}
						/>
					</nav>

					<ProfileDropdown />
				</div>
			</LayoutContainer>
		</header>
	);
}
