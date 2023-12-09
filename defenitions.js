// Initialize
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const vars = {}

// Variable related functions
function println(value) {
  console.log(value)
}

function print(value) {
  process.stdout.write(value)
}

function setVar(name="x", value) {
  vars[name] = value
}

function getVar(name="x") {
  return vars[name]
}

function incVar(name="x") {
  setVar(name, getVar(name) + 1)
}

function decVar(name="x") {
  setVar(name, getVar(name) - 1)
}

// Loop
function loop(start=0, end=10, step=1, callback=()=>{println("You forgot")}) {
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      callback(i)
    }
  } else if (step < 0) {
    for (let i = start; i > end; i += step) {
      callback(i)
    }
  }
}

// Array functions
function length(array=["You", "forgot", "to", "give", "an", "argument"]) {
  return array.length
}

function push(name="x", value) {
  getVar(name).push(value)
}

function pop(name="x") {
  return getVar(name).pop()
}

function shift(name="x") {
  return getVar(name).shift()
}

function unshift(name="x", value) {
  getVar(name).unshift(value)
}

// Normal functions
function assert(condition=true, callback=()=>{println("You forgot")}, fallback=()=>{}) {
  if (condition) {
    callback()
  } else if (fallback) {
    fallback()
  }
}

function input(name="x") {
  return new Promise((resolve) => {
    rl.question(`?> `, (input) => {
      setVar(name, input)
      resolve()
    })
  })
}

function exit(code=0) {
  process.exit(code)
}

function tryCatch(tryBlock=()=>{println("You forgot")}, catchBlock=e=>{console.error("You forgot\n"+e)}) {
  try {
    tryBlock()
  } catch (e) {
    catchBlock(e)
  }
}

// File functions
function readFile(filename="youForgot.txt", name="x") {
  setVar(name, fs.readFileSync(filename,
    { encoding: 'utf8', flag: 'r' }))
}

function writeFile(filename="youForgot.txt", data="You forgot to give some data") {
  fs.writeFileSync(filename, data)
}

// Random functions
function randomInt(min=0, max=10) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomFloat(min=0, max=1) {
  return Math.random() * (max - min) + min
}

function randomString(len=15) {
  const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789~`!@#$%^&*()-_+={[}]|\\:;\"'<,>.?/"
  let result = ''
  for (let i = 0; i < len; i++) {
    result += charList[randomInt(0, charList.split("").length)]
  }
  return result
}

function randomItemOfArray(array=["You", "forgot", "to", "give", "an", "argument"]) {
  return array[Math.floor(Math.random() * array.length)]
}

// Date and time function
function getCurrentTime() {
  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const seconds = currentDate.getSeconds()

  const formattedDate = `${day}.${month}.${year} ${seconds}:${minutes}:${hours}`
  return formattedDate
}

// Encryption functions
function threeLettersBack(text="You forgot") {
  let result = ''

  for (let i = 0; i < text.length; i++) {
    let char = text[i]

    if (char.match(/[a-z]/i)) {
      const code = text.charCodeAt(i)
      let shiftAmount = 3 % 26
      let shiftedCode = code

      if (code >= 65 && code <= 90) {
        shiftedCode = ((code - 65 + shiftAmount) % 26) + 65
      } else if (code >= 97 && code <= 122) {
        shiftedCode = ((code - 97 + shiftAmount) % 26) + 97
      }

      result += String.fromCharCode(shiftedCode)
    } else {
      result += char
    }
  }
  return result
}

function threeLettersForward(text="You forgot") {
  let result = ''

  for (let i = 0; i < text.length; i++) {
    let char = text[i]

    if (char.match(/[a-z]/i)) {
      const code = text.charCodeAt(i)
      let shiftAmount = -3 % 26
      let shiftedCode = code

      if (code >= 65 && code <= 90) {
        shiftedCode = ((code - 65 + shiftAmount) % 26) + 65
      } else if (code >= 97 && code <= 122) {
        shiftedCode = ((code - 97 + shiftAmount) % 26) + 97
      }

      result += String.fromCharCode(shiftedCode)
    } else {
      result += char
    }
  }
  return result
}