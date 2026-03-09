import Link from "next/link";
import Image from "next/image";

import { SearchProduct } from "@/features/searchProduct";
import { CategoriesDropdown } from "@/features/categoriesDropdown";

import {
	BoxIcon,
	LogoIcon,
	CartIcon,
	HeartIcon,
	ArrowDown,
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
import PlaceholderAvatar from "@shared/assets/placeholder-avatar.svg";

export default function Header() {
	return (
		<header className="py-[16px] bg-surface shadow-header">
			<LayoutContainer>
				<div className="flex items-center justify-between">
					<nav>
						<Link className="flex items-center gap-x-[10px]" href={HOME_ROUTE}>
							<LogoIcon />
							<LogoTitleIcon />
						</Link>
					</nav>

					<div className="flex items-center gap-x-[16px]">
						<CategoriesDropdown/>
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

					<button
						className="flex items-center gap-x-[10px] cursor-pointer"
						type="button"
					>
						<Image
							className="rounded-full"
							src={PlaceholderAvatar}
							alt="Альт для заглушки"
							width="40"
							height="40"
						/>
						<span className="flex flex-col text-start">
							<span className="w-[85px] capitalize">Сергей</span>
							<span className="text-[12px] text-hard-text">Подпись</span>
						</span>
						<ArrowDown />
					</button>
				</div>
			</LayoutContainer>
		</header>
	);
}
