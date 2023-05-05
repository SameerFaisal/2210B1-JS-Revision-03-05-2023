//1. Printing Techniques
// alert()
// console.log()
// document.write()



//2. Variables
// var data=5

// alert(data)

// var data=10

// // alert(typeof(data))


// var data="Hello World"

// // alert(data)

// console.log(typeof(data))

//3. Arithmetic Operators (+, -, *, /, %)
// let a=5
// let b="10"
// let c=a+b
// console.log(c)

// let fname="Ali"
// let lname="Ahmed"
// let full=fname+" "+lname
// console.log(full)


// let a=10
// let b="Mudassir"
// let c=a-b
// console.log(typeof(c))

// let n="50"
// let s="10"
// let m=n/s
// console.log(m)

// let b=10
// let c=9
// let d=b*c
// console.log(d)

// let a=10
// let b=3
// let c=a%b
// console.log(c)

//4. Comparison Operators (==, ===, <, >, <=, >=, !==) - Answers are either true or false

// let num1=50
// let num2=10
// console.log(num1>num2) //true
// console.log(num1<num2) //false


// let num1=50
// let num2=10
// let num3=50

// console.log(num1==num2) //false
// console.log(num2!=num3) //true
// console.log(num1==num3) //true

// let num1=50
// let num2=10
// let num3="50"
// console.log(num1==num3) 
// console.log(num1===num3)

// let num1="50"
// let num2=10
// let num3="50"
// console.log(num1==num3) 
// console.log(num1===num3)

// let question = "Who founded pakistan?"
// let option1="Quaid e Azam"
// let option2="Allama Iqbal"
// let option3="Liaquat Ali Khan"
// let option4="Mudassir"

// let correctAnswer="Quaid e Azam"

// alert(question+" 1."+option1+" 2."+option2+" 3."+option3+" 4."+option4)
// let user=prompt("Enter your answer")
// if(user.toLowerCase()===correctAnswer.toLowerCase()){
//     alert("Correct Answer")
// }
// else if(user.toLowerCase()!==correctAnswer.toLowerCase()){
//     alert("Wrong Answer")
// }
// else{
//     alert("Invalid Input")
// }


//5. Relational Operators (&&, ||)
// let userName=prompt("Enter your name")
// let userAge=+prompt("Enter your age")
// let userCity=prompt("Enter your city")

// if(userAge>=18 && userCity.toLowerCase()==="karachi"){
//     console.log("Congratulations!! "+userName+", "+" you are elegible to vote")
// }
// else if(userAge>=18 && userCity.toLowerCase()!=="karachi"){
//     console.log("Sorry!! "+userName+", "+" you are not elegible to vote because you are not from karachi")

// }
// else if(userAge<18 && userCity.toLowerCase()==="karachi"){
//     console.log("Sorry!! "+userName+", "+" you are not elegible to vote because you are not 18 years old")
// }
// else{
//     console.log("Sorry!! "+userName+", "+" you are not elegible to vote because you are not 18 years old and not from karachi")
// }


// let num1=+prompt("Enter any number")
// if(num1%3===0 || num1%5===0){
//     console.log("Number is divisible by 3 or 5")
// }


//6. Nested if

// let email=prompt("Enter your email")
// let password=prompt("Enter your password")

// if(email==="someone@example.com"){
//     if(password==="123"){
//         console.log("Login Successful")
//     }
//     else{
//         console.log("Invalid Password")
//     }

// }
// else{
//     console.log("Invalid Email")
// }

//7. Switch Case

// let alpha=prompt("Enter any alphabet")

// switch(alpha.toLowerCase()){
//     case "a":
//         console.log("Vowel")
//         break
//     case "e":
//         console.log("Vowel")
//         break
//     case "i":
//         console.log("Vowel")
//         break
//     case "o":
//         console.log("Vowel")
//         break
//     case "u":
//         console.log("Vowel")
//         break
//     default:
//         console.log("Consonant")

// }

//8. Switch Case Example
// let choice=+prompt("Enter 1 for circle. Enter 2 for rectangle. Enter 3 for square")
// switch(choice){
//     case 1:
//         let radius=+prompt("Enter radius of circle")
//         let area=(22/7)*(radius**2)
//         console.log("Area of circle is "+area.toFixed(3))
//         break
//     case 2:
//         let length=+prompt("Enter length of rectangle")
//         let width=+prompt("Enter width of rectangle")
//         let area1=length*width
//         console.log("Area of rectangle is "+area1)
//         break
//     case 3:
//         let side=+prompt("Enter side of square")
//         let area2=side*side
//         console.log("Area of square is "+area2)
//         break
//     default:
//         console.log("Invalid Input")


// }

