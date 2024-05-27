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
            {isLoading ? !isCaught ? <RefreshCw className='animate-spin' /> : <RefreshCcw className='animate-spin-reverse' /> : isCaught ? <CheckSquare/> : <Square/>}
            <p className='text-nowrap'>{name}</p>
            {isRain && (
                <CloudRain className='text-cyan-300'/>
            )}
            {isSun && (
                <Sun className='text-yellow-300'/>
            )}
            {/* {isNight && (
                <Moon color='black'/>
            )} */}
            {isLastSeason && (
                <AlertTriangle className='text-red-300'/>
            )}
            {!!showTime && (
                <div className=' z-[999]'>
                    <p className='text-nowrap z-[999]'>{time}{!!special && ' and '+special}</p>
                </div>
            )}
        </li>

    )
}
export default FishComponent;