import Link from "next/link";
import Image from "next/image";

import { LayoutContainer } from "@/shared/layoutContainer";

import LoyalityCard from "@/shared/assets/loyality-card.png";
import Card from "@/shared/assets/card.png";

interface IProps {
	className?: string;
}

export default function PromoSection({ className = "" }: IProps) {
	return (
		<section className={className}>
			<LayoutContainer>
				<h2 className="header-second margin-second-header">
					Специальные предложения
				</h2>

				<ul className="grid gap-[16px] lg:gap-[40px] md:gap-[32px] sm:grid-cols-[1fr_1fr] xs:gap-cols-[1fr]">
					<li>
						<Link
							className="block relative overflow-hidden rounded-[4px] px-[20px] py-[20px] bg-card-primary-bg transition-base hover:shadow-card-offer-primary h-full max-h-[335px] md:max-h-[350px] lg:max-h-[585px] lg:px-[40px] lg:py-[30px]"
							href="#"
						>
							<div className="relative flex flex-col max-w-[260px] h-full z-1">
								<h3 className="font-bold text-[20px] lg:text-lg md:text-base">
									Оформите карту «Северяночка»
								</h3>
								<p className="text-xs lg:text-sm mt-auto">
									И&nbsp;получайте бонусы при&nbsp;покупке в&nbsp;магазинах
									и&nbsp;на&nbsp;сайте
								</p>
							</div>

							<Image
								className="absolute top-1/2 -translate-y-1/2 -right-[50px] lg:right-[30px]"
								src={LoyalityCard}
								alt="Карта лояльности"
								width={235}
								height={183}
							/>
						</Link>
					</li>
					<li>
						<Link
							className="block relative overflow-hidden rounded-[4px] px-[20px] py-[20px] bg-card-secondary-bg transition-base hover:shadow-card-offer-secondary h-full max-h-[335px] md:max-h-[350px] lg:max-h-[585px] lg:px-[40px] lg:py-[30px]"
							href="#"
						>
							<div className="relative flex flex-col max-w-[260px] h-full z-1">
								<h3 className="font-bold text-[20px] lg:text-lg md:text-base">
									Покупайте акционные товары
								</h3>
								<p className="text-xs lg:text-sm mt-auto">
									И&nbsp;получайте вдвое больше бонусов
								</p>
							</div>

							<Image
								className="absolute top-1/2 -translate-y-1/2 -right-[50px] lg:right-[30px]"
								src={Card}
								alt="Корзина с товарами"
								width={193}
								height={186}
							/>
						</Link>
					</li>
				</ul>
			</LayoutContainer>
		</section>
	);
}
