import { Map } from "@/entities/map";

import { Tabs, ADDRESSES } from "@/features/tabs";

import { LayoutContainer } from "@/shared/layoutContainer";

interface IProps {
	className?: string;
}

export default function ShopsSection({ className = "" }: IProps) {
	return (
		<section className={className}>
			<LayoutContainer>
				<h2 className="header-second margin-second-header">Наши магазины</h2>

				<div className="flex flex-col gap-y-[24px]">
					<Tabs
						inputName="addresses"
						checkedValue="shchelyaur"
						tabs={ADDRESSES}
					/>

					<Map />
				</div>
			</LayoutContainer>
		</section>
	);
}
