import { Models } from "appwrite";

interface FishModel extends Models.Document {
    name: string;
    location?: string[];
    time?: boolean;
    seasons?: string[];
    inSpring?: boolean;
    inSummer?: boolean;
    inFall?: boolean;
    inWinter?: boolean;
    weather: string;
    special: string;
}

export default FishModel;