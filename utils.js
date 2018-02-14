const sum = (a, b) => a + b

//named export
//you can have multiple exports inside of one
//same file
//you can only execute with the same name
//import needs the braces { sub }
export const sub = (a, b) => a - b

const mult = (a, b) => a * b

const div = (a, b) => a / b

export { mult as multiplicacao, div }

//main function
//you only can have one default per file
// import with some name
// it doesn't need use the braces

export default sum