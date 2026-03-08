import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

export default function LayoutContainer({ children }: IProps) {
	return (
		<div className="w-full mx-auto px-[15px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1230px]">
			{children}
		</div>
	);
}
