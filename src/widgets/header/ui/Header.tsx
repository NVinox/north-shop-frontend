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
	CATEGORIES_TEXT,
	CART_ROUTE,
	HOME_ROUTE,
	FAVORITES_ROUTE,
	CATEGORIES_ROUTE,
} from "@/shared/constants";
import { LayoutContainer } from "@/shared/layoutContainer";

export default function Header() {
	return (
		<header className="bg-surface shadow-header">
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
						<Link
							className="flex flex-col items-center gap-y-[8px] text-[16px]"
							href={CATEGORIES_ROUTE}
						>
							<HeartIcon /> {CATEGORIES_TEXT}
						</Link>
						<Link
							className="flex flex-col items-center gap-y-[8px] text-[16px]"
							href={FAVORITES_ROUTE}
						>
							<BoxIcon /> {FAVORITES_TEXT}
						</Link>
						<Link
							className="flex flex-col items-center gap-y-[8px] text-[16px]"
							href={CART_ROUTE}
						>
							<CartIcon /> {CART_TEXT}
						</Link>
					</nav>

					<ProfileDropdown />
				</div>
			</LayoutContainer>
		</header>
	);
}
