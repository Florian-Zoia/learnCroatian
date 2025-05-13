import { Word } from './models';
import { Timestamp } from 'react-native-reanimated/lib/typescript/reanimated2/commonTypes';
import calculateDifficulty from './calc_difficulty';
import { wordCategory } from './enum';

export default function createNewWord(words: Word[], category: string, croatian: string, german: string, wordCategory: wordCategory, verb: string) {
    const newWord: Word = {
        id: words.length,
        category: category,
        croatian: croatian,
        german: german,
        score: 5,
        lastDate: Date.now() as unknown as Timestamp,
        wordCategory: wordCategory,
        verb: verb,
        difficulty: calculateDifficulty(croatian, german)
    }
    words.push(newWord)
    return (words)
};