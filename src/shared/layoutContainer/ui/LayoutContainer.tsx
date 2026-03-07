import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

export default function LayoutContainer({ children }: IProps) {
	return <div className="max-w-[1200px] mx-auto">{children}</div>;
}
