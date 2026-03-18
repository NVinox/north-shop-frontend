import Link from "next/link";
import Image from "next/image";

import { IPost } from "@/entities/postCard";

import { LinkLikeButton } from "@/shared/linkLikeButton";

interface IProps {
	post: IPost;
}

export default function PostCard({ post }: IProps) {
	const { image, date, title, description, link } = post;

	return (
		<article className="relative flex flex-col overflow-hidden h-full h-max-[420px] bg-surface rounded-xs transition-base hover:shadow-card-hover">
			<Link
				className="absolute inset-0 z-3"
				aria-label="Молоко Простоквашино"
				href={link}
			>
				<span className="sr-only">Подробнее о посте</span>
			</Link>

			<header className="relative min-h-[160px]">
				<Image
					className="image-cover"
					src={image}
					width={376}
					height={162}
					alt="Какой-то альт"
				/>
			</header>

			<div className="flex flex-col gap-y-[10px] p-[10px] h-full">
				<span className="text-[8px] text-hard-text lg:text-xs">{date}</span>

				<h3 className="font-bold text-sm lg:text-base">{title}</h3>

				<p className="text-xs lg:text-sm">{description}</p>

				<footer className="mt-auto">
					<div className="relative flex max-w-[150px] z-5">
						<LinkLikeButton link={link} type="secondaryLight">
							Подробнее
						</LinkLikeButton>
					</div>
				</footer>
			</div>
		</article>
	);
}
