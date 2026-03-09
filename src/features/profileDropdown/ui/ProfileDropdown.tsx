"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/shared/lib/utils";
import { ArrowDown } from "@/shared/icons";
import PlaceholderAvatar from "@shared/assets/placeholder-avatar.svg";

export default function ProfileDropdown() {
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<div
			className="relative max-w-[200px] w-full"
			onBlur={() => setOpen(!isOpen)}
		>
			<button
				className={cn(
					"flex items-center justify-between p-[16px] gap-x-[10px] cursor-pointer w-full",
					isOpen && "shadow-dropdown",
				)}
				onClick={() => setOpen(true)}
				type="button"
			>
				<Image
					className="rounded-full"
					src={PlaceholderAvatar}
					alt="Альт для заглушки"
					width="40"
					height="40"
				/>
				<span className="flex flex-col text-start">
					<span className="capitalize">Сергей</span>
					<span className="text-[12px] text-hard-text">Подпись</span>
				</span>
				<ArrowDown isRotate={isOpen} />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="absolute bg-surface w-full shadow-dropdown rounded-b-[4px] [clip-path:inset(0px_-20px_-20px_-20px)]"
					>
						<li key={1}>
							<button
								className="text-left px-[16px] py-[8px] w-full transition-colors duration-200 hover:text-primary-text cursor-pointer"
								type="button"
							>
								<span>Выйти</span>
							</button>
						</li>
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
}
