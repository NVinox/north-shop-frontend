"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BurgerIcon } from "@/shared/icons";
import { CATEGORIES_TEXT } from "@/shared/constants";

export default function CategoriesDropdown() {
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<div className="relative" onBlur={() => setOpen(false)}>
			<button
				className="text-[16px] p-[8px] pr-[16px] flex items-center gap-x-[16px] text-secondary-text rounded-[4px] cursor-pointer duration-200 transition-colors bg-secondary hover:bg-secondary-hover"
				onClick={() => setOpen(true)}
			>
				<BurgerIcon />
				{CATEGORIES_TEXT}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="absolute bg-surface rounded-[4px] min-w-[300px] max-w-[350px] shadow-dropdown [&>li:first-child>a]:pt-[25px] [&>li:last-child>a]:pb-[25px]"
					>
						<li key={1}>
							<Link
								className="block px-[32px] py-[10px] transition-color duration-200 hover:text-primary-text"
								href="#"
							>
								Хлебобулочные изделия
							</Link>
						</li>
						<li key={2}>
							<Link
								className="block px-[32px] py-[10px] transition-color duration-200 hover:text-primary-text"
								href="#"
							>
								Молоко, сыр, яйцо
							</Link>
						</li>
						<li key={3}>
							<Link
								className="block px-[32px] py-[10px] transition-color duration-200 hover:text-primary-text"
								href="#"
							>
								Фрукты и овощи
							</Link>
						</li>
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
}
