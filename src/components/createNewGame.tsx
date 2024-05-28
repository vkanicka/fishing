'use client'

import { createNewGame as createNewGameQuery } from "@/data/client"
import { useRouter } from "next/navigation";

const CreateNewGameComponent = () => {
    const router = useRouter()

    const createNewGame = async () => {
        const newGame = await createNewGameQuery()
        console.log(newGame)
        if (!!newGame?.$id) {
            router.push(`/game/${newGame.$id}`)
        }

    }
    return (
        <button onClick={()=>createNewGame()} className="max-w-[300px] hover:cursor-pointer p-2 border-4 border-fuchsia-400 border-solid rounded-lg hover:underline hover:bg-gray-600 shadow-glow drop-shadow-glow">Create New Game</button>
    )
}
export default CreateNewGameComponent;