'use client'

import Season from '@/data/types/season';
import Fish from '@models/fish'
import { useState } from 'react';
import {AlertTriangle, Moon, Sun, CloudRain, Star} from 'react-feather'

type Props = {
    fish: Fish;
    currentSeason: Season | undefined;
}

const FishComponent = ({ fish, currentSeason }: Props) => {
    const { name, location, weather, time, seasons, special } = fish
    const isRain = weather === 'Rain'
    const isSun = weather === 'Sun'
    const isLastSeason =
        currentSeason === 'Winter' ? (!seasons?.includes('Spring')) : (seasons?.[seasons?.length - 1] === currentSeason)
    const [showTime, setShowTime] = useState(false)
    
    return (
        <li onMouseEnter={()=>setShowTime(true)} onMouseLeave={()=>setShowTime(false)} className='flex gap-2 relative hover:cursor-pointer hover:font-bold'>
            <p>{name}</p>
            {isRain && (
                <CloudRain color='black'/>
            )}
            {isSun && (
                <Sun color='black'/>
            )}
            {/* {isNight && (
                <Moon color='black'/>
            )} */}
            {isLastSeason && (
                <AlertTriangle color='black'/>
            )}
            {!!showTime && (
                <div className='absolute z-[999] bg-white w-full'>
                    <p className='text-nowrap bg-white z-[999]'>{time}{!!special && ' and '+special}</p>
                </div>
            )}
        </li>

    )
}
export default FishComponent;