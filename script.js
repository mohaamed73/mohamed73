//let x = "welcome user"
//alert(x)


 //let a = prompt("enter yuor name")

 //alert(aa)
 //alert(aa)
 //alert(aa)



  //let ss = confirm("do you accept")

  //alert(ss)


  
//alert("massge")

//let x ="massage"
//console. log(x)

//let x = 5

//let y = 8889988

//let p = 23.232

//let r = -2

//console.log(x)

//console.log(y)

//console.log(p)

//let x = "hi welcome"
//console.log(x);

//let tr = "mohamed"
//let r = "tr"
//console.log(r)
//console.log(tr)


//let x =[44545, true, "gffhhfh" [1,2]]
//onsole.log(x[2][0])

 //let x = {  
   // name: "mohamed",
   //age: 31,
   //salary: 10000,
   //hoppies: ["design", "programming"]
//}
//let age = "age"

//onsole.log(x[age])

//let name = "name"
//console.log(x[name])


//let x = 5+5
//console.log(5+5)
//console.log(5*8)
//console.log(5+12)

//let x = 5 > 3
//console.log(x)

//let x = 5

//console.log(x)

//x = 10
//console.log(x)

//x += 2
//console.log(x)



function lessThanOrEqualToZero(num) {
   if( num <= 0  ) {
       return true
   }
   else {
       return false
     }

  return num <= 0 ? true : false
}



console.log( lessThanOrEqualToZero(5) )

console.log( lessThanOrEqualToZero(0) )

console.log( lessThanOrEqualToZero(-2) )





function isSameNum(num1, num2) {
   if( num1 === num2 ) {
       return true
   }
   else {
       return false
   }

  return num1 === num2 ? true : false
}


console.log( isSameNum(4, 8) )

console.log( isSameNum(2, 2) )

console.log( isSameNum(2, "2") )




function profitableGamble(prop, price, pay) {
  let result = prop * price
  if( result > pay ) {
      return true
  }
  else {
      return false
  }
}



console.log(profitableGamble(0.2, 50, 9))

console.log( profitableGamble(0.9, 1, 2) )

console.log( profitableGamble(0.9, 3, 2) )




function boolToString( bool ) {
   if( bool === true ) {
       return "true"
   }
   else if( bool === false ) {
       return "false"
   }
   if( typeof bool == 'boolean' ) {
       return String( bool )
   }
  return bool == true ? "true" : "false"
}



console.log( boolToString(true) )

console.log( boolToString(false) )



function greeting(name) {
  if(name == "Mubashir") {
      return "Hello, my Love!";
  }
  return "Hello, " + name + "!";
}



console.log( greeting("Matt") )

console.log( greeting("Helen") )

console.log( greeting("Mubashir") )





function makesTen(a, b) {
  if( a === 10 || b === 10 || a + b === 10 ) {
      return true
  }
  return false
}




console.log( makesTen(9, 10) )

console.log( makesTen(9, 9) )

console.log( makesTen(1, 9) )




function comp(str1, str2) {
   if( str1.length === str2.length ) {
      return true
   }
   return false
  return str1.length === str2.length ? true : false
}



console.log( comp("AB", "CD") )

console.log( comp("ABC", "DE") )

console.log( comp("hello", "edabit") )















function divisible( num ) {
  if( num % 100 === 0 ) {
      return true
  }
  return false
}



console.log( divisible(101) )

console.log( divisible(1000) )

console.log( divisible(100) )







function acceptIntoMovie( age, isSupervised ) {
   if( age >= 15 || isSupervised ) {
       return true
   }
   return false
  if( age >= 15 ) {
      return true
  }
  if( isSupervised ) {
      return true
  }
  return false
}

console.log( acceptIntoMovie(14, true) )

console.log( acceptIntoMovie(14, false) )

console.log( acceptIntoMovie(16, false) )




function oddOrEven( str ) {
  if( str.length % 2 === 0 ) {
      return true
  }
  return false
}



console.log( oddOrEven("apples") )

console.log( oddOrEven("pears") )

console.log( oddOrEven("cherry") )



function leapYear( year ) {
  if( year % 4 == 0 && year % 100 != 0 ) {
      return true
  }
  else if( year % 400 == 0 ) {
      return true
  }
  return false
}


console.log( leapYear(1200) )

 console.log( leapYear(1924) )

 console.log( leapYear(2021) )




 function areaShape( b, h, sh ) {
   if( sh == "triangle" ) {
       return 0.5 * b * h
   }
   else if( sh == "parallelogram" ) {
       return b * h
   }
  let methods = {
      triangle: (b, h) =>  0.5 * b * h,
      parallelogram: (b, h) => b * h
  }
  return methods[sh](b, h)
}

console.log(areaShape(2, 3, "triangle"))

console.log( areaShape(8, 6, "parallelogram") )

console.log( areaShape(2.9, 1.3, "parallelogram") )



