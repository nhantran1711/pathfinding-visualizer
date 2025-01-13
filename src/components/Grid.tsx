import { usePathfinding } from "../hooks/usePathfinding";
import { twMerge } from 'tailwind-merge';
import { MAX_ROWS } from "../utils/constants";

export function Grid() {
    const {grid} = usePathfinding();

    return (
        <div
        className={twMerge(
        // Base
        "flex items-center justify-center border-sky-100"
        // Height
        `lg:min-h-[${MAX_ROWS * 20}px] xs:min-h-[${MAX_ROWS * 18}px]`
        )}

        >

        </div>
    );
};