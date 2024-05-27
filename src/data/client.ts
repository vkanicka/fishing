import { Client, Databases, ID, Query } from 'appwrite';
import FishModel from '@models/fish'
import Season from './types/season';
const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('665395870017f1474ee1');

export const getFish = async () => {
    try {
        const response = await databases.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_FISH as string,)
        const items = response.documents as FishModel[]
        console.log(items)
        return items
    }
    catch (error) {
        console.error(error)
    }
}
export const getFishBySeason = async (season: Season) => {
    try {
        const response = await databases.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_FISH as string,
            [
                Query.contains('seasons', season),
                Query.limit(100),
                Query.orderAsc('location'),
            ]
        )
        const items = response.documents as FishModel[]
        // console.log(items)
        return items
    }
    catch (error) {
        console.error(error)
    }
}

export const createNewGame = async () => {
    try {
        const response = await databases.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_GAMES as string, ID.unique(),
            {
                fishIds: []
            },
    )
        console.log(response)
        return response
    }
    catch (error) {
        console.error(error)
    }
}
export const updateFishGames = async (fishId: string, gameKeys: string[]) => {
    try {
        const response = await databases.updateDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_FISH as string, fishId,
            {
                gameKeys: gameKeys
            },
    )
        // console.log(response)
        return response
    }
    catch (error) {
        console.error(error)
    }
}
