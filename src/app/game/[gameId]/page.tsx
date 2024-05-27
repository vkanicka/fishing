'use client'

import SeasonsNavGame from "@/components/seasonsNavGame";
import { useParams } from "next/navigation";

const GamePage = () => {
    const params = useParams()

    return (
        <div className="m-6">
            <SeasonsNavGame gameId={params.gameId as string} currentSeason={undefined} />
        </div>
    )


}
export default GamePage;