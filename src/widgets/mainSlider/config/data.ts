import MainSlide from "@/shared/assets/main-slide.png";

interface ISlide {
	id: number;
	icon: string;
	alt: string;
	text: string;
	isH1?: boolean;
}

export const SLIDES: ISlide[] = [
	{
		id: 1,
		icon: MainSlide.src,
		alt: "Корзина с продуктами",
		text: "Дарим скидку 20% на\u00A0первый заказ",
		isH1: true,
	},
	{
		id: 2,
		icon: MainSlide.src,
		alt: "Корзина с продуктами",
		text: "Доставка бесплатно от\u00A01000\u00A0\u20BD",
	},
	{
		id: 3,
		icon: MainSlide.src,
		alt: "Корзина с продуктами",
		text: "Только фермерские продукты",
	},
	{
		id: 4,
		icon: MainSlide.src,
		alt: "Корзина с продуктами",
		text: "Освободите время для\u00A0самого важного",
	},
];
