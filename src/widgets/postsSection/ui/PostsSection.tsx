import Link from "next/link";

import { POSTS } from "@/widgets/postsSection";

import { PostCard } from "@/entities/postCard";

import { LayoutContainer } from "@/shared/layoutContainer";
import { ArrowDownIcon } from "@/shared/icons";

interface IProps {
	className?: string;
}

export default function PostsSection({ className = "" }: IProps) {
	return (
		<section className={className}>
			<LayoutContainer>
				<div className="flex justify-between margin-second-header">
					<h2 className="header-second">Статьи</h2>

					<Link
						className="group flex items-center gap-x-[8px] text-grey-text transition-base hover:text-primary-text"
						href="#"
					>
						<span>Все статьи</span>
						<div className="-rotate-90">
							<ArrowDownIcon />
						</div>
					</Link>
				</div>

				<ul className="grid grid-cols-[1fr_1fr_1fr] gap-x-[40px]">
					{POSTS.map((post) => (
						<li key={post.id}>
							<PostCard post={post} />
						</li>
					))}
				</ul>
			</LayoutContainer>
		</section>
	);
}
