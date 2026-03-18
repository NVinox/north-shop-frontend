import { ITab } from "@/features/tabs";

interface IProps {
	inputName?: string;
	checkedValue?: string;
	tabs: ITab[];
}

export default function AddressesTabs({
	tabs,
	inputName = "tabs",
	checkedValue = "all",
}: IProps) {
	return (
		<form className="flex flex-wrap items-center gap-y-[8px] gap-x-[8px] lg:gap-x-[24px] md:gap-x-[16px]">
			{tabs.map(({ id, text }) => (
				<div key={id}>
					<input
						id={id}
						className="hidden peer"
						type="radio"
						name={inputName}
						defaultChecked={id === checkedValue}
					/>
					<label
						className="block px-[20px] py-[5px] bg-lightest text-grey-text rounded-xs cursor-pointer transition-base peer-checked:bg-secondary peer-checked:text-surface hover:bg-secondary hover:text-surface"
						htmlFor={id}
					>
						{text}
					</label>
				</div>
			))}
		</form>
	);
}
