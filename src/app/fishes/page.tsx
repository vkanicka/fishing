'use client'

import { useState } from "react"
import {getFishBySeason as getFishBySeasonQuery} from '@data/client'
import FishModel from "@models/fish"
import FishComponent from "@/components/fish"
import Season from "@/data/types/season"
import SEASONS from "@/data/constants/seasons"
import LOCATIONS from "@/data/constants/locations"

const Fishes = () => {
    const [fishes, setFishes] = useState<FishModel[]>()
    const [currentSeason, setCurrentSeason] = useState<Season>()

    const getFishBySeason = (season: Season) => {
        setCurrentSeason(season)
        setFishes([])
        getFishBySeasonQuery(season)
            .then((getFishBySeasonResult) => {
                setFishes(getFishBySeasonResult)
            })
    }

    return (
        <div className="m-6 flex flex-col gap-6">
            <ul className="flex gap-2">
                {SEASONS.map((season, index) => {
                    return (
                        <button className={season === currentSeason ? 'underline font-bold' : ''} onClick={(()=>getFishBySeason(season))} key={index}>{season}</button>
                    )
                })}
            </ul>

            <ul className="flex flex-col gap-4 w-full justify-around">
                {LOCATIONS?.map((location, locationIndex) => {
                    return !!fishes?.length && (
                        <div key={locationIndex}>
                            <p className="font-bold" key={locationIndex}>{location}</p>
                            {fishes?.map((fish, fishIndex) => {
                                // console.log(fish)
                                if (fish.location?.includes(location)) {
                                    return (
                                        <FishComponent key={fishIndex} fish={fish} currentSeason={currentSeason}                                     />
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

export default Fishes;