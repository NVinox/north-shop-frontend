import { MainSlider } from "@/widgets/mainSlider";
import { ProductList } from "@/widgets/productList";

export default function Home() {
	return (
		<>
			<MainSlider />
			<ProductList
				className="pt-[80px] pb-[120px]"
				title="Акции"
				titleLink="Все акции"
			/>
		</>
	);
}
