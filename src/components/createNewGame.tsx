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
        <button onClick={()=>createNewGame()} className="max-w-[300px] hover:cursor-pointer">Create New Game</button>
    )
}
export default CreateNewGameComponent;