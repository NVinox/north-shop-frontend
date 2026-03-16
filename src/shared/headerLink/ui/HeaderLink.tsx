import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface IProps extends LinkProps {
	children: ReactNode;
}

export default function HeaderLink({ href, children }: IProps) {
	return (
		<Link
			className="flex flex-col items-center gap-y-[5px] text-xs transition-base hover:text-primary-text"
			href={href}
		>
			{children}
		</Link>
	);
}
