import { Timestamp } from "react-native-reanimated/lib/typescript/reanimated2/commonTypes"
import { difficultyEnum } from "./enum"

export type Word = {
    id: number, 
    category: string, 
    croatian: string, 
    german: string,
    score: number,
    lastDate: Timestamp, 
    wordCategory: number, 
    verb: string,
    difficulty: difficultyEnum
}