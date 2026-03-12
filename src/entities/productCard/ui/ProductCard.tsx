import Link from "next/link";
import Image from "next/image";

import { IProduct } from "@/entities/productCard";

import { Button } from "@/shared/button";
import { HeartIcon } from "@/shared/icons";
import { Rating } from "@/shared/rating";
import ProductTemplate from "@/shared/assets/product-template.png";

interface IProps {
	product: IProduct;
}

export default function ProductCard({ product }: IProps) {
	return (
		<article className="relative flex flex-col h-full h-max-[350px] bg-surface transition-shadow transition-base shadow-card rounded-[4px] hover:shadow-card-hover">
			<Link
				className="absolute inset-0 z-3"
				aria-label="Молоко Простоквашино"
				href="#"
			>
				<span className="sr-only">Подробнее о товаре</span>
			</Link>

			<header className="relative min-h-[160px]">
				<button className="absolute top-[8px] right-[8px] group p-[4px] bg-lightest/50 rounded-[10px] transition-base hover:text-surface hover:bg-primary cursor-pointer z-5">
					<HeartIcon />
				</button>
				<Image
					className="absolute inset-0 max-h-full m-auto max-w-full object-contain"
					src={ProductTemplate}
					alt="Альт для продукта"
					width={272}
					height={160}
				/>
				{product.discount && (
					<span className="absolute bottom-[8px] left-[8px] py-[4px] px-[8px] bg-primary text-secondary-text rounded-[4px] text-[12px] sm:text-[16px]">
						-{product.discount}&#37;
					</span>
				)}
			</header>

			<div className="flex flex-col gap-y-[8px] p-[8px] h-full">
				<div>
					<div className="flex items-center justify-between gap-x-[10px]">
						<ins className="font-bold no-underline text-[14px] sm:text-[16px]">
							{product.price.toFixed(2)}&nbsp;&#8381;
						</ins>
						{product.oldPrice && (
							<del className="no-underline text-[14px] sm:text-[16px]">
								{product.oldPrice.toFixed(2)}&nbsp;&#8381;
							</del>
						)}
					</div>

					{product.oldPrice && (
						<div className="flex items-center justify-between gap-x-[20px] text-[8px] sm:text-[12px] text-light-text">
							<span>С картой</span>
							<span>Обычная</span>
						</div>
					)}
				</div>

				<h3 className="mt-auto text-[12px] sm:text-[16px]">{product.title}</h3>

				<Rating rating={product.rating} />

				<footer>
					<div className="relative flex z-5">
						<Button type="ghost">В корзину</Button>
					</div>
				</footer>
			</div>
		</article>
	);
}
