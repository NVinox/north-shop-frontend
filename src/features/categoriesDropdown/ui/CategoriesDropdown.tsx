"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BurgerIcon } from "@/shared/icons";
import { LayoutContainer } from "@/shared/layoutContainer";
import { CATEGORIES_ROUTE_TEXT } from "@/shared/constants";

export default function CategoriesDropdown() {
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<div className="hidden md:block" onBlur={() => setOpen(false)}>
			<button
				className="lg:pr-[16px] text-sm p-[8px] pr-[8px] flex items-center gap-x-[16px] text-secondary-text rounded-xs cursor-pointer transition-base bg-secondary hover:bg-secondary-hover"
				onClick={() => setOpen(true)}
			>
				<BurgerIcon />
				<span className="hidden lg:inline">{CATEGORIES_ROUTE_TEXT}</span>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed top-[74px] left-0 bg-surface rounded-xs py-[30px] w-full shadow-dropdown z-5"
					>
						<LayoutContainer>
							<div className="flex gap-x-[40px]">
								<ul className="max-w-[270px] w-full">
									<li key={1}>
										<Link
											className="font-bold block py-[10px] transition-base hover:text-primary-text"
											href="#"
										>
											Хлебобулочные изделия
										</Link>
									</li>
									<li key={2}>
										<Link
											className="font-bold block py-[10px] transition-base hover:text-primary-text"
											href="#"
										>
											Молоко, сыр, яйцо
										</Link>
									</li>
									<li key={3}>
										<Link
											className="font-bold block py-[10px] transition-base hover:text-primary-text"
											href="#"
										>
											Фрукты и овощи
										</Link>
									</li>
									<li key={4}>
										<Link
											className="font-bold block py-[10px] transition-base hover:text-primary-text"
											href="#"
										>
											Замороженные продукты
										</Link>
									</li>
								</ul>

								<ul className="max-w-[270px] w-full">
									<li key={1}>
										<Link
											className="font-bold block py-[10px] transition-base hover:text-primary-text"
											href="#"
										>
											Напитки
										</Link>
									</li>
									<li key={2}>
										<Link
											className="font-bold block py-[10px] transition-base hover:text-primary-text"
											href="#"
										>
											Кондитерские изделия
										</Link>
									</li>
									<li key={3}>
										<Link
											className="font-bold block py-[10px] transition-base hover:text-primary-text"
											href="#"
										>
											Чай, кофе
										</Link>
									</li>
								</ul>
							</div>
						</LayoutContainer>
					</motion.nav>
				)}
			</AnimatePresence>
		</div>
	);
}
