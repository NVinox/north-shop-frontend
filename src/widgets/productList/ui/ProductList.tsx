import Link from "next/link";

import { ProductCard } from "@/entities/productCard";
import { PRODUCTS } from "@/widgets/productList";

import { LayoutContainer } from "@/shared/layoutContainer";
import { ArrowDownIcon } from "@/shared/icons";

interface IProps {
	title: string;
	titleLink: string;
	pageLink?: string;
	className?: string;
}

export default function ProductList({
	title,
	titleLink,
	pageLink = "#",
	className = "",
}: IProps) {
	return (
		<section className={className}>
			<LayoutContainer>
				<div className="flex justify-between mb-[40px]">
					<h2 className="text-[36px] font-bold">{title}</h2>

					<Link
						className="group flex items-center gap-x-[8px] text-grey-text transition-base hover:text-primary-text"
						href={pageLink}
					>
						<span>{titleLink}</span>
						<div className="-rotate-90">
							<ArrowDownIcon />
						</div>
					</Link>
				</div>

				<ul className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[40px]">
					{PRODUCTS.map((product) => (
						<li key={product.id}>
							<ProductCard product={product} />
						</li>
					))}
				</ul>
			</LayoutContainer>
		</section>
	);
}
