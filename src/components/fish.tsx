'use client'

import { updateFishGames } from '@/data/client';
import Season from '@/data/types/season';
import Fish from '@models/fish'
import { useState } from 'react';
import {AlertTriangle, Sun, CloudRain, Square, CheckSquare, RefreshCw, RefreshCcw} from 'react-feather'

type Props = {
    fish: Fish;
    currentSeason: Season | undefined;
    gameId?: string;
}

const FishComponent = ({ fish, currentSeason, gameId }: Props) => {
    const { name, weather, time, seasons, special, gameKeys } = fish
    const isRain = weather === 'Rain'
    const isSun = weather === 'Sun'
    const isLastSeason =
        currentSeason === 'Winter' ? (!seasons?.includes('Spring')) : (seasons?.[seasons?.length - 1] === currentSeason)
    const [showTime, setShowTime] = useState(false)
    const [isCaught, setIsCaught] = useState(gameKeys?.includes(gameId as string))
    const [isLoading, setIsLoading] = useState(false)

    const toggleCatch = (name: string) => {
        if (!gameId) return;
        setIsLoading(true)
        let newGameKeys = [...gameKeys as string[]] ?? []
        if (!isCaught) {
            newGameKeys.push(gameId as string)
        } else {
            newGameKeys = newGameKeys.filter(x=>x!==gameId)
        }
        updateFishGames(fish.$id, newGameKeys)
            .then((result) => {
                setIsCaught(!isCaught)
                setIsLoading(false)
        })


    }
    
    return (
        <li onClick={()=>toggleCatch(name)} onMouseEnter={()=>setShowTime(true)} onMouseLeave={()=>setShowTime(false)} className='text-white flex gap-2 relative hover:cursor-pointer hover:font-bold'>
            {isLoading ? !isCaught ? <RefreshCw className='animate-spin text-fuchsia-300' /> : <RefreshCcw className='animate-spin-reverse text-fuchsia-300' /> : isCaught ? <CheckSquare className='text-lime-300 shadow-glow drop-shadow-glow'/> : <Square className='text-gray-300'/>}
            <p className={`text-nowrap ${isCaught ? 'text-lime-300 shadow-glow drop-shadow-glow' : 'shadow-fog drop-shadow-fog'}`}>{name}</p>
            {isRain && (
                <CloudRain className={`${isCaught ? 'text-lime-300' : 'text-cyan-300'}`}/>
            )}
            {isSun && (
                <Sun className={`${isCaught ? 'text-lime-300' : 'text-yellow-300'}`}/>
            )}
            {/* {isNight && (
                <Moon color='black'/>
            )} */}
            {isLastSeason && (
                <AlertTriangle className={`${isCaught ? 'text-lime-300' : 'text-orange-300'}`}/>
            )}
            {!!showTime && (
                <div className=' z-[999]'>
                    <p className='text-nowrap z-[999] italic font-normal text-fuchsia-200'>{time}{!!special && ' and '+special}</p>
                </div>
            )}
        </li>

    )
}
export default FishComponent;