import { ChangeEvent, useId } from "react";

import { cn } from "@/shared/lib/utils";
import { SearchIcon } from "@/shared/icons/ui/Icons";
import { HEADER_SEARCH_PLACEHOLDER } from "@/shared/constants";

interface IProps {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus: () => void;
	isOpen: boolean;
}

export default function SearchInput({
	value,
	onChange,
	onFocus,
	isOpen,
}: IProps) {
	const id = useId();

	return (
		<div className="relative w-full">
			<input
				id={id}
				placeholder={HEADER_SEARCH_PLACEHOLDER}
				type="text"
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				className={cn(
					"py-[8px] pl-[16px] pr-[42px] border-1 border-secondary w-full placeholder:text-hard-text transition-all duration-200 focus:outline-none focus:shadow-input-focus",
					isOpen
						? "border-b-transparent rounded-b-none rounded-t-[4px]"
						: "rounded-[4px]",
				)}
			/>
			<div className="absolute top-0 right-0 flex items-center justify-center w-[40px] h-full">
				<SearchIcon />
			</div>
		</div>
	);
}
