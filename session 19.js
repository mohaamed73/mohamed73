function keyboardMistakes(text) {
    // let replced = ""
    // for (let letter of text) {
    //     if (letter == 0) replced += "O"
    //     else if (letter == 1) replced += "I"
    //     else if (letter == 4) replced += "A"
    //     else if (letter == 5) replced += "S"
    //     else replced += letter
    // }
    // return replced
    let replce = {
        0: "O", 1: "I", 4: "A", 5: "S"
    }
    let numbers = Object.keys(replce)
    return text.split("").map(letter => {
        if (numbers.includes(letter)) {
            return replce[letter]
        }
        return letter
    }).join("")
}


console.log(keyboardMistakes("MUB45H1R")) // "MUBASHIR"

console.log(keyboardMistakes("DUBL1N")) // "DUBLIN"

console.log(keyboardMistakes("51NG4P0RE")) // "SINGAPORE"





function arrIndex(arr, idx) {
    // let count = 0
    // let result = ""
    // for (let smallArr of arr) {
    //     for (let letter of smallArr) {
    //         count++
    //         if (idx.includes(count)) {
    //             result += letter
    //         }
    //     }
    // }
    // return result
    let bigArr = []
    arr.forEach(smallArr => {
        bigArr.push(...smallArr)
    })
    return bigArr.filter((item, index) => {
        if (idx.includes(index + 1)) return true
        return false
    }).join("")
}

let lst = [
    ["m", "u", "b"],
    ["a", "s", "h"],
    ["i", "r", "1"]
]

let idx = [1, 3, 5, 8]

console.log(arrIndex(lst, idx)) // "mbsr"



function reverseCapitalize(str) {
    let reversed = []
    for(let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i])
    }
    return reversed.join("").toUpperCase()
}

console.log(reverseCapitalize("abc")); // "CBA"

console.log(reverseCapitalize("hellothere")); // "EREHTOLLEH"

console.log(reverseCapitalize("input")); // "TUPNI"


function makePlusFunction(base) {
    return num => base + num
}


const plusFive = makePlusFunction(5)

console.log(plusFive(2)); // 7
console.log(plusFive(-8)); // -3


const plusTen = makePlusFunction(10)

console.log(plusTen(0)); // 10
console.log(plusTen(188)); // 198
console.log(plusFive(plusTen(0))); // 15



function isRepdigit(num) {
    if(num < 0) return false
    let str = String(num)
    for(let digit of str) {
        if(digit != str[0]) return false
    }
    return true
}

console.log(isRepdigit(66)); // true
console.log(isRepdigit(4444));
console.log(isRepdigit(0)); // true
console.log(isRepdigit(191));
console.log(isRepdigit(-11)); // false



function multiply(arr) {
    // return function(num) {
    //     return arr.map(n => {
    //         return n * num
    //     })
    // }
    return num => arr.map(n => n * num)
}

console.log(multiply([1, 2, 3])(2)); // [2, 4, 6]

console.log(multiply([4, 6, 5])(10)); // [40, 60, 50]

console.log(multiply([1, 2, 3])(0)); // [0, 0, 0]


function lonelyInteger(arr) {
    for(let num of arr) {
        if(!arr.includes(-num)) return num
    }
}


console.log(lonelyInteger([1, -1, 2, -2, 3])); // 3
// 3 has no matching negative appearance.

console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])); // -4
// -4 has no matching positive appearance.

console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])); // -9






function uniqueStyles(styles) {
    // let arr = styles.join(",").split(",")
    // let result = []
    // for(let style of arr) {
    //     if(!result.includes(style)) result.push(style)
    // }
    // return result.length

    let arr = styles.join(",").split(",")
    return [...new Set(arr)].length
}

console.log(uniqueStyles([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal"
]));  // 9
  
console.log(uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul"
])); // 7