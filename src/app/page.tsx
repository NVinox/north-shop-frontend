import { MainSlider } from "@/widgets/mainSlider";
import { ProductList } from "@/widgets/productList";

export default function Home() {
	return (
		<>
			<MainSlider />
			<ProductList
				className="pt-[40px] pb-[80px] lg:pt-[80px] lg:pb-[120px] md:pt-[60px] md:pb-[100px]"
				title="Акции"
				titleLink="Все акции"
			/>
		</>
	);
}
