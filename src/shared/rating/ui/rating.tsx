import { HalfStarIcon } from "@/shared/icons";

interface IProps {
	rating: number;
	max?: number;
}

export default function Rating({ rating, max = 5 }: IProps) {
	const normalizedValue = Math.round(rating * 2) / 2;

	return (
		<ul className="flex items-center gap-x-[4px]">
			{Array.from({ length: max }).map((_, index) => {
				const starIndex = index + 1;
				const rightFilled = starIndex <= normalizedValue;
				const leftFilled = rightFilled || starIndex - 0.5 === normalizedValue;

				return (
					<li key={index}>
						<HalfStarIcon fillLeft={leftFilled} fillRight={rightFilled} />
					</li>
				);
			})}
		</ul>
	);
}
