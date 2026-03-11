import Link from "next/link";
import Image from "next/image";

import { LINKS } from "@/widgets/navigationMobile";

import { LayoutContainer } from "@/shared/layoutContainer";
import PlaceholderAvatar from "@shared/assets/placeholder-avatar.svg";

export default function NavigationMobile() {
	return (
		<div className="block sticky bottom-0 left-0 w-full bg-surface py-[8px] shadow-header md:hidden">
			<LayoutContainer>
				<div className="flex items-center w-full justify-between">
					<nav className="contents">
						<ul className="contents">
							{LINKS.map(({ id, icon, href, text }) => (
								<li key={id}>
									<Link
										className="group flex flex-col items-center gap-y-[4px] text-[8px] transition-color duration-200 hover:text-primary-text"
										href={href}
									>
										{icon} {text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<button className="cursor-pointer">
						<Image
							className="rounded-full"
							width="40"
							height="40"
							src={PlaceholderAvatar}
							alt="Альт для заглушки"
						/>
					</button>
				</div>
			</LayoutContainer>
		</div>
	);
}
