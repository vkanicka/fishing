'use client'

import SeasonsNavGame from "@/components/seasonsNavGame";
import Season from "@/data/types/season";
import { useParams } from "next/navigation";
import {getFishBySeason as getFishBySeasonQuery} from '@data/client'
import FishModel from "@/data/models/fish";
import { useEffect, useState } from "react";
import FishComponent from "@/components/fish";
import LOCATIONS from "@/data/constants/locations";

const GamePage = () => {
    const params = useParams()
    const [fishes, setFishes] = useState<FishModel[]>()
    const currentSeason = params.season as Season;

    const getFish = async () => {
        const result = await getFishBySeasonQuery(params.season as Season)
        setFishes(result)
    }

    useEffect(() => {
        getFish()
    },[])

    return (
        <div className="p-6 flex flex-col gap-6 bg-gray-900 bg-opacity-50">
            <SeasonsNavGame currentSeason={params.season as Season} gameId={params.gameId as string} />
            <ul className="flex flex-col gap-4 w-full justify-around">
                {LOCATIONS?.map((location, locationIndex) => {
                    return !!fishes?.length && (
                        <div key={locationIndex}>
                            <p className="font-bold text-white" key={locationIndex}>{location}</p>
                            {fishes?.map((fish, fishIndex) => {
                                // console.log(fish)
                                if (fish.location?.includes(location)) {
                                    return (
                                        <FishComponent key={fishIndex} fish={fish} currentSeason={currentSeason} gameId={params.gameId as string}                                     />
                                    )
                                }
                            })}
                        </div>
                    )
                })}
            </ul>
        </div>
    )


}
export default GamePage;