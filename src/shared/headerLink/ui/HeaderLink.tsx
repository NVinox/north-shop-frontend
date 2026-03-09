import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface IProps extends LinkProps {
	icon: ReactNode;
	text: string;
}

export default function HeaderLink({ text, icon, href }: IProps) {
	return (
		<Link
			className="flex flex-col items-center gap-y-[8px] text-[16px] transition-color duration-200 hover:text-primary-text"
			href={href}
		>
			{icon} {text}
		</Link>
	);
}
