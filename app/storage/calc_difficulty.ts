import { difficultyEnum } from "./enum";
var stringSimilarity = require("string-similarity");

export default function calculateDifficulty(croatian: String, german: String) {
    croatian = croatian.toLowerCase()
    german = german.toLowerCase()
    var difficulty = 0
    var similarity = stringSimilarity.compareTwoStrings(croatian, german);
    if (similarity > 0.85) {
        difficulty = 0.5
    } else if (similarity > 0.60) {
        difficulty = 1
    } else {
        difficulty = 1.5
    }
    console.log('difficulty after similiarity: ' + difficulty + ' similiarity: ' + similarity)

    var stringLength = croatian.length
    if (stringLength < 5) {
        difficulty = difficulty * 0.5
    } else if (stringLength < 9) {
        difficulty = difficulty * 1
    } else {
        difficulty = difficulty * 1.5
    }
    console.log('difficulty after length: ' + difficulty + ' length: ' + stringLength)

    for (const key in difficultyEnum) {
        const enumValue = difficultyEnum[key as keyof typeof difficultyEnum];
        if (enumValue === difficulty) {
            return key as keyof typeof difficultyEnum;

        }
    }
}
