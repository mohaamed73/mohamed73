function addOddToN( n ) {
    let result = 0
    for( let i = 0; i <= n; i++ ) {
        if( i % 2 == 1 ) {
            result += i
        }
    }
    return result
}


console.log( addOddToN(5) )

console.log( addOddToN(13) )

console.log( addOddToN(47) )







function filterArray( arr ) {
    let result = []
    for( let one of arr ) {
        if( typeof one === "number" ) {
            result.push( one )
        }
    }
    return result
}



console.log( filterArray([1, 2, 3, "a", "b", 4]) )

console.log( filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) )

console.log( filterArray(["Nothing", "here"]) )



function squaresSum( num ) {
    let result = 0
    for( let i = 1; i <= num; i++ ) {
        result += ( i ** 2 )
    }
    return result
}



console.log( squaresSum(3) )

console.log( squaresSum(12) )

console.log( squaresSum(13) )





function integerBoolean( str ) {
    let arr = []
    for( let i of str ) {
         if( i == 1 ) {
             arr.push( true )
         }
         else {
             arr.push( false )
         }
        arr.push( Boolean(Number(i)) )
    }
    return arr
}



console.log( integerBoolean("100101") )

console.log( integerBoolean("10") )

console.log( integerBoolean("001") )



function nTablesPlusOne( num ) {
    let result = ""
    for( let i = 1; i <= 10; i++ ) {
        result += ( (num * i) + 1 )
        if( i == 10 ) { break }
        result += ","
    }
    return result
}



console.log( nTablesPlusOne(7) )

console.log( nTablesPlusOne(1) )

console.log( nTablesPlusOne(3) )





function makeRug(m, n, s) {
    let result = []
    for( let i = 0; i < m; i++ ) {
        let newString = ""
        for( let o = 0; o < n; o++ ) {
            if( s ) {
                newString += s
            }
            else {
                newString += "#"
            }
        }
        result.push( newString )
    }
    return result
}



console.log( makeRug(3, 5) )
  
console.log( makeRug(3, 5, '$') )
  
console.log( makeRug(2, 2, 'A') )







function forbiddenLetter( letter, arr ) {
    let result = true
    for( let str of arr ) {
         for( let lett of str ) {
             if( lett === letter ) {
                 result = false
             }
         }
        if( str.split("").includes( letter ) ) {
            result = false
        }
    }
    return result
}



console.log( forbiddenLetter("r", ["rock", "paper", "scissors"]) )

console.log( forbiddenLetter("a", ["spoon", "fork", "knife"]) )

console.log( forbiddenLetter("m", []) )




function uploadCount( dates, month ) {
    let count = 0
    for( let date of dates ) {
        if( date.split(" ")[0] == month ) {
            count++
        }
    }
    return count
}



console.log( uploadCount(["Sept 22", "Sept 21", "Sept 7", "Oct 5", "Oct 15"], "Oct") ) 

console.log( uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct") ) 




function getMin( arr ) {
    let smallest = arr[0]
    for( let item of arr ) {
        if( item < smallest ) {
            smallest = item
        }
    }
    return smallest
}

function sumMinimums( arrs ) {
    let result = 0
    for( let arr of arrs ) {
        result += getMin( arr )
    }
    return result
}



console.log( sumMinimums([
    [8, 10, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [26, 21, 34, 56, 100]
  ]) )




  
  function findFactors( num ) {
    let result = []
    for( let i = 1; i <= num; i++ ) {
        if( num % i == 0 ) {
            result.push( i )
        }
    }
    return result
}



console.log( findFactors(9) )

console.log( findFactors(12) )

console.log( findFactors(20) )

console.log( findFactors(0) )