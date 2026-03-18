import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

interface IProps {
	link: string;
	children: ReactNode;
	type?: "primary" | "secondary" | "ghost" | "secondaryLight";
}

export default function LinkLikeButton({
	link,
	children,
	type = "primary",
}: IProps) {
	return (
		<Link
			className={cn(
				"border-1 p-[8px] grow text-center rounded-xs transition-base cursor-pointer",
				{
					"text-secondary-text border-primary bg-primary hover:shadow-button-primary-hover active:shadow-button-active":
						type === "primary",
					"text-secondary-text border-secondary bg-secondary hover:shadow-button-secondary-hover active:shadow-button-active":
						type === "secondary",
					"text-secondary border-secondary hover:text-secondary-text hover:border-primary hover:bg-primary active:shadow-button-active":
						type === "ghost",
					"text-success-text border-secondary-light bg-secondary-light hover:bg-secondary hover:text-surface":
						type === "secondaryLight",
				},
			)}
			href={link}
		>
			{children}
		</Link>
	);
}
