// Code your solution here

// 1ST CODE:

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string){
    let answer = array.filter(el => el === string || el === string.toLowerCase())
    return answer
};

//2ND CODE;

function fuzzyMatch(array, string){
    let firstLetters = array.filter(el => el.startsWith(string))
    return firstLetters
};

//3RD CODE:

function matchName(array, string){
    let match = array.filter(el => el.name === string)
    return match
}