import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface IProps extends LinkProps {
	children: ReactNode;
}

export default function HeaderLink({ href, children }: IProps) {
	return (
		<Link
			className="flex flex-col items-center gap-y-[5px] text-[12px] transition-color duration-200 hover:text-primary-text"
			href={href}
		>
			{children}
		</Link>
	);
}
