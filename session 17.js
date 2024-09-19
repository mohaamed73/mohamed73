function chatroomStatus( users ) {
    if( users.length === 0 ) {
        return "no one online"
    }
    else if( users.length === 1 ) {
         return users[0] + " online"
     }
    else if( users.length === 2 ) {
        return users[0] + " and " + users[1] + " online"
    }
    else {
        return users[0] + " and " + users[1] + " and " + (users.length - 2) + " more online"
    }
}



console.log( chatroomStatus([]) )

console.log( chatroomStatus(["paRIE_to"]) )

console.log( chatroomStatus(["s234f", "mailbox2"]) )

console.log( chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]) )




function testJackpot( arr ) {
    let start = arr[0]
    let check = true
    for( let one of arr ) {
        if( one !== start ) {
            check = false
        }
    }
    return check
}



console.log( testJackpot(["@", "@", "@", "@"]) )

console.log( testJackpot(["abc", "abc", "abc", "abc"]) )

console.log( testJackpot(["SS", "SS", "SS", "SS"]) )

console.log( testJackpot(["&&", "&", "&&&", "&&&&"]) )

console.log( testJackpot(["SS", "SS", "SS", "Ss"]) )

     
         
function century( year ) {
    // return Math.ceil( year / 100 ) + "th century"
    let yearStr = String( year )
    let cent = yearStr.slice( 0, 2 )
    let last = yearStr.slice( 2 )
    if( last == "00" ) {
        return cent + "th century"
    }
    else {
        return (Number(cent) + 1) + "th century"
    }
}



console.log( century(1756) ) // "18th century"

console.log( century(1555) ) // "16th century"

console.log( century(1000) ) // "10th century"

console.log( century(1001) ) // "11th century"

console.log( century(2005) ) // "21st century"



function sumOfEvens( matrix ) {
    let result = 0
    for( let arr of matrix ) {
        for( let item of arr ) {
            if( item % 2 === 0 ) {
                result += item
            }
        }
    }
    return result
}



console.log( sumOfEvens([
    [1, 0, 2],
    [5, 5, 7],
    [9, 4, 3]
  ]) )
  
console.log(  sumOfEvens([
    [1, 1],
    [1, 1]
  ]))
  
console.log(  sumOfEvens([
    [42, 9],
    [16, 8]
  ]))

console.log(  sumOfEvens([
    [],
    [],
    []
  ]));




  function isVowel( letter ) {
    return Boolean(["a", "e", "i", "o", "u"].includes( letter ))
}

function split( str ) {
    let result = ""
    for( let lett of str ) {
        if( isVowel( lett ) ) {
            result += lett
        }
    }
    for( let lett of str ) {
        if( !isVowel( lett ) ) {
            result += lett
        }
    }
    return result
}



console.log( split("abcde") ) // "aebcd"

console.log( split("Hello!") ) // "eoHll!"

console.log( split("What's the time?") ) // "aeieWht's th tm?"





function reverseComplement( rna ) {
    let result = ""
    for( let i = rna.length - 1; i >= 0; i-- ) {
        if( rna[i] === "A" ) {
            result += "U"
        }
        else if( rna[i] === "U" ) {
            result += "A"
        }
        else if( rna[i] === "C" ) {
            result += "G"
        }
        else if( rna[i] === "G" ) {
            result += "C"
        }
    }
    return result
}



console.log( reverseComplement("GUGU") ) // "ACAC"

console.log( reverseComplement("UCUCG") ) // "CGAGA"

console.log( reverseComplement("CAGGU") ) // "ACCUG"




function getCase( str ) {
    let special = ["11", "12", "13"]
    if( special.includes( str ) ) {
        return "-TH"
    }
    else {
        if( str[ str.length - 1 ] === "1" ) {
            return "-ST"
        }
        else if( str[ str.length - 1 ] === "2" ) {
            return "-ND"
        }
        else if( str[ str.length - 1 ] === "3" ) {
            return "-RD"
        }
        else {
            return "-TH"
        }
    }
}


function returnEndOfNumber( num ) {
    let str = String( num )
    return num + getCase( str.slice( -2 ) )
}


console.log( returnEndOfNumber(553) ) // "553-RD"

console.log( returnEndOfNumber(34) ) // "34-TH"

console.log( returnEndOfNumber(1231) ) // "1231-ST"

console.log( returnEndOfNumber(22) ) // "22-ND"

console.log( returnEndOfNumber(412) ) // "412-TH"


function check( arr ) {
    let first  = arr[0]
    let second = arr[1]
    if( first > second ) {
        let result = "decreasing"
        for(let i = 0; i < arr.length - 1; i++) {
            if( arr[i] < arr[i + 1] ) {
                result = "neither"
            }
        }
        return result
    }
    else if( first < second ) {
        let result = "increasing"
        for(let i = 0; i < arr.length - 1; i++) {
            if( arr[i] > arr[i + 1] ) {
                result = "neither"
            }
        }
        return result
    }
    else {
        return "neither"
    }
}




console.log( check([1, 2, 3]) ) // "increasing"

console.log( check([3, 2, 1]) ) // "decreasing"

console.log( check([1, 2, 1]) ) // "neither"

console.log( check([1, 1, 2]) ) // "neither





function arithmeticOperation( string ) {
    let first = string.split(" ")[0]
    let opera = string.split(" ")[1]
    let last  = string.split(" ")[2]
    if( opera == "+" ) {
        return Number(first) + Number(last)
    }
    else if( opera == "-" ) {
        return Number(first) - Number(last)
    }
    else if( opera == "*" ) {
        return Number(first) * Number(last)
    }
    else if( opera == "/" ) {
        if( last == 0 ) {
            return -1
        }
        else {
            return Number(first) / Number(last)
        }
    }
}



console.log( arithmeticOperation("12 + 12") )

console.log( arithmeticOperation("12 - 12") )

console.log( arithmeticOperation("12 * 12") )

console.log( arithmeticOperation("12 / 0") )