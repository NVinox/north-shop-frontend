import { IProduct } from "@/entities/productCard";

import ProductTemplate from "@/shared/assets/product-template.png";

export const PRODUCTS: IProduct[] = [
	{
		id: 1,
		title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное",
		imageUrl: ProductTemplate.src,
		price: 44.5,
		oldPrice: 50.5,
		rating: 4.3,
		discount: 44,
	},
	{
		id: 2,
		title: "Г/Ц Блинчики с мясом вес, Россия",
		imageUrl: ProductTemplate.src,
		price: 44.52,
		oldPrice: 50.5,
		rating: 3.9,
		discount: 44,
	},
	{
		id: 3,
		title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан",
		imageUrl: ProductTemplate.src,
		price: 44.5,
		oldPrice: 50.5,
		rating: 1.3,
		discount: 44,
	},
	{
		id: 4,
		title: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро",
		imageUrl: ProductTemplate.src,
		price: 44.5,
		rating: 5,
	},
];
