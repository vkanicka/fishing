import {getFishBySeason as getFishBySeasonQuery} from '@data/client'
import FishComponent from "@/components/fish"
import Season from "@/data/types/season"
import LOCATIONS from "@/data/constants/locations"
import SeasonsNav from '@/components/seasonsNav'

const Fishes = async () => {
    const currentSeason: Season = 'Spring'

    const getFish = async () => {
        const fish = await getFishBySeasonQuery(currentSeason)
        return fish
    }
    const fishes = await getFish()

    return (
        <div className="m-6 flex flex-col gap-6bg-gray-900 bg-opacity-50">

            <SeasonsNav currentSeason={currentSeason} />

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