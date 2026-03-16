export interface IProduct {
	id: number;
	title: string;
	imageUrl: string;
	price: number;
	oldPrice?: number;
	rating: number;
	discount?: number;
}
