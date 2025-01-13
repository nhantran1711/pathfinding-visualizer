import { useContext } from "react"
import { PathfindingContext } from "../context/PathfindingContext"

export const userPathfinding = () => {
    const context = useContext(PathfindingContext);

    if (!context) {
        throw new Error("usePathfinding must be used withing a PathfindingProvider")
    }
    return context;
}