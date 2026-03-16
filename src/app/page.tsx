import { MainSlider } from "@/widgets/mainSlider";
import { ProductList } from "@/widgets/productList";
import { PromoSection } from "@/widgets/promoSection";

export default function Home() {
	return (
		<>
			<MainSlider />
			<ProductList
				className="pt-[40px] lg:pt-[80px] md:pt-[60px]"
				title="Акции"
				titleLink="Все акции"
			/>
			<ProductList
				className="section-base"
				title="Новинки"
				titleLink="Все новинки"
			/>
			<ProductList
				className="section-base"
				title="Покупали раньше"
				titleLink="Все покупки"
			/>
			<PromoSection className="section-base" />
		</>
	);
}
