"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SearchInput } from "@/shared/searchInput";
import { BurgerIcon } from "@/shared/icons";

export default function SearchProduct() {
	const [query, setQuery] = useState<string>("");
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<div className="relative" onBlur={() => setOpen(false)}>
			<SearchInput
				value={query}
				onChange={(e) => {
					const query = e.target.value;
					setQuery(query);
					setOpen(!!query);
				}}
				onFocus={() => setOpen(!!query)}
				isOpen={isOpen}
			/>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="absolute w-full shadow-dropdown [clip-path:inset(0px_-20px_-20px_-20px)] radius-[4px] bg-surface"
					>
						<ul className="[&>li:first-child>a]:pt-0 shadow-input-focus rounded-b-[4px] border-[1px] border-secondary border-t-0">
							<li key={1}>
								<Link
									className="flex gap-x-[16px] px-[16px] py-[5px] transition-colors duration-200 hover:text-primary-text"
									href="#"
								>
									<span>Тест 1</span>
									<BurgerIcon color="var(--black)" />
								</Link>
							</li>
							<li key={2}>
								<Link
									className="flex gap-x-[16px] px-[16px] py-[5px] transition-colors duration-200 hover:text-primary-text"
									href="#"
								>
									<span>Тест 2</span>
								</Link>
							</li>
							<li key={3}>
								<Link
									className="flex gap-x-[16px] px-[16px] py-[5px] transition-colors duration-200 hover:text-primary-text"
									href="#"
								>
									<span>Тест 3</span>
								</Link>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
