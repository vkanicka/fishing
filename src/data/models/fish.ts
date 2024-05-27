import { Models } from "appwrite";

interface FishModel extends Models.Document {
    name: string;
    location?: string[];
    time?: boolean;
    seasons?: string[];
    weather: string;
    special: string;
    gameKeys?: string[];
}

export default FishModel;