import { cn } from "@/shared/lib/utils";
import { StarIcon } from "@/shared/icons";

interface IProps {
	rating: number;
	max?: number;
}

export default function Rating({ rating, max = 5 }: IProps) {
	return (
		<ul className="flex items-center gap-x-[4px]">
			{Array.from({ length: max }).map((_, index) => {
				const isFilled = index < rating;

				return (
					<li key={index}>
						<StarIcon
							className={cn(
								"transition-base",
								isFilled ? "text-primary" : "text-light",
							)}
						/>
					</li>
				);
			})}
		</ul>
	);
}
