import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

export default function LayoutContainer({ children }: IProps) {
	return (
		<div className="w-full mx-auto px-[15px] w-full xs:max-w-full lg:max-w-[1024px] xl:max-w-[1230px]">
			{children}
		</div>
	);
}
