function sumPolygon( n ) {
    let result = (n - 2) * 180
    return result
}

console.log( sumPolygon(3) ) // 180

console.log( sumPolygon(4) ) // 360

console.log( sumPolygon(6) ) // 720



function nameString(name){
	let b = "Edabit"
	let result = name + b
  	return result
}

console.log(nameString("Mubashir")) // "MubashirEdabit"

console.log(nameString("Matt")) // "MattEdabit"

console.log(nameString("javaScript")) // "javaScriptEdabit"


function invertArray( arr ) {
    // let result = []
    // for( let num of arr ) {
    //     result.push( -num )
    // }
    // return result
    for( let index in arr ) {
        arr[index] = -arr[index]
    }
    return arr
}


function basicCalculator(a, o, b) {
    let result = null;
    if(o === "+") { 
        result = a + b;
    }
    else if(o === "-") {
        result = a - b;
    }
    else if(o === "/" && b !== 0) { 
        result = a / b;
    }
    else if(o === "*") {
        result = a * b;
    }
    return result;
}


console.log(basicCalculator(2, '+',  4));

console.log(basicCalculator(6, '-', 5));

console.log(basicCalculator(12, '/', 3));

console.log(basicCalculator(3, '*', 4));

console.log(basicCalculator(1, '/', 0));

console.log(basicCalculator(1, 'x', 0));





function mod( a, b ) {
    let result = 0
    for( ; true ; ) {
        if(!Number.isInteger( a / b )) {
            a -= 1
            result += 1
        }
        else {
            break
        }
    }
    return result
}



console.log( mod(5, 2) ) // 1

console.log( mod(218, 5) ) // 3

console.log( mod(6, 3) ) // 0



function arithmeticProgression(first, diff, count) {
    let arr = []
    let current = first
    for (let i = 0; i < count; i++) {
        arr.push(current)
        current += diff
    }
    return arr.join(", ")
}


console.log(arithmeticProgression(1, 2, 5)) // "1, 3, 5, 7, 9"

console.log(arithmeticProgression(1, 0, 5)) // "1, 1, 1, 1, 1"

console.log(arithmeticProgression(1, -3, 10)) // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"



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