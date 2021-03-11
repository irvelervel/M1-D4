// STRINGS
let student = "Stefano"
let student2 = 'Stefano'

let greetings = "Hello"

console.log(greetings + ' ' + student)
let backTickString = `Stefano`
// backTickString = "something else"

// TEMPLATE LITERAL
console.log(`Hello ${backTickString}`)

console.log(`${greetings} ${student} your age is 100`)
console.log(greetings + " " + student + ' ' + `your age is 100`)

let testString = "Hello Strive School!"
// testString = 'something else'

let array = [1, 2, 3, 100]
console.log(testString.length) // a property
// strings have length too!

let firstOccurranceOfStrive = testString.indexOf('Strive') // a method
console.log(firstOccurranceOfStrive)

let subString = testString.slice(5, 10)
console.log(subString)

// SPLIT
let mySplit = testString.split(' ')
console.log(mySplit)

// JOIN
let stringAgain = mySplit.join(' ££ ')
console.log(stringAgain)

const newArray = []
newArray.push('Tommy')

// FUNCTIONS
const bark = function() { // the function declaration
    // the body of the function
    console.log('the dog barks')
    console.log('the dog barks')
    console.log('the dog barks')
}

const calculate5times4 = function(){
    let value = 5 * 4
    console.log('THIS SHOULD HAPPEN IMMEDIATELY', value) // first one
    return value
}

bark()

const multiplication = calculate5times4() // 20
console.log(calculate5times4())
console.log(20)
// const multiplication = 5 * 4 // SAME THING
// const multiplication = 20 // SAME THING


const sum = function(hasib, stefano){ // num1 and num2 are parameters
    let total = hasib + stefano
    return total
}
console.log(sum(1, 2))

const hasib = 'hello'

console.log('!!!!', hasib)

const result = sum(5, 10) // same thing as 15
console.log(result)

const anotherResult = sum(4123123123, 14113)
console.log(anotherResult)

let number1 = 5
let number2 = 7

const newTotal = sum(number1, number2)
console.log(newTotal)

// DON'T USE THIS SYNTAX
// function test(par1) {
//     console.log(par1)
// }

// const newSum = (n1, n2) => n1 + n2

// console.log(newSum(1,2))

const barkAnAmountOfTimes = function(numberOfBarks, wayOfBarking){
    for(let i = 0; i < numberOfBarks; i++) {
        console.log(wayOfBarking)
    }
}

barkAnAmountOfTimes(3, 'Bark!')
console.log('-----------')
barkAnAmountOfTimes(50, 'Bork!')

const differentBarks = function(numberOfBarks) {
    if(numberOfBarks < 5) {
        console.log('bark!')
    } else {
        console.log('bork')
    }
}

differentBarks(6)

let switchStudent = 'Stefano'

switch(switchStudent) {
    case 'Stefano':
        console.log('hello Stefano!')
        break;
    case 'Leonardo':
        console.log('welcome back Leonardo!')
        break;
    default:
        console.log("I don't know you :<")
}

if(switchStudent === 'Stefano') {
    console.log('hello Stefano!')
} else if(switchStudent === 'Leonardo') {
    console.log('welcome back Leonardo!')
} else {
    console.log("I don't know you :<")
}
