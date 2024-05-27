import SEASONS from "@/data/constants/seasons"
import Season from "@/data/types/season"
import Link from "next/link"

type Props = {
    currentSeason: Season | undefined;
    gameId: string;
}

const SeasonsNavGame = ({ currentSeason, gameId } : Props) => {
    return (
        <ul className="flex gap-2">
                {SEASONS.map((season, index) => {
                    return (
                        <Link className={season === currentSeason ? 'underline font-bold' : ''} key={index} href={`/game/${gameId}/${season}`}>{season}</Link>
                    )
                })}
            </ul>
    )
}

export default SeasonsNavGame