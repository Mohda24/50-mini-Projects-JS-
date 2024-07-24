// VARIABLES
const copy = document.getElementById("copy");
const result = document.getElementById("result");
const generate = document.getElementById("generate");

// Object of functions
const randomFunctions = {
    upper: getRandomUpper,
    lower: getRandomLower,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
};

// Declaration 
copy.addEventListener("click", copyClipboard);
generate.addEventListener("click", generatePassword);

// Functions
function copyClipboard() {
    const password = result.value;
    if (password === "") {
        return;
    } else {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    }
}

// Function to get selected parameters
function getParameter() {
    const upper = document.getElementById("uppercase").checked;
    const lower = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    const passwordLength = document.getElementById("length").value;
    return [[{ upper }, { lower }, { numbers }, { symbols }], passwordLength];
}

// Function to generate the password
function generatePassword() {
    let Data = getParameter();
    let param = Data[0];
    let passwordLength = parseInt(Data[1]);


    let typeArr = param.filter(item => Object.values(item)[0]);
    if (!typeArr.length) {
        result.value = "";
        return;
    }
    const password = makePassword(typeArr, passwordLength);
    result.value = password;
}

// Function to make the password
function makePassword(typeArr, passwordLength) {
    const increment = typeArr.length;
    let password = "";
    for (let i = 0; i < passwordLength; i += increment) {
        typeArr.forEach(element => {
            const funcName = Object.keys(element)[0];
            password += randomFunctions[funcName]();
        });
    }
    const finalPassword = password.slice(0, passwordLength);
    return finalPassword;
}

// Random character functions
function getRandomNumber() {
    const numbers = "0123456789";
    const random = Math.floor(Math.random() * numbers.length);
    return numbers[random];
}

function getRandomLower() {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const random = Math.floor(Math.random() * lowercaseLetters.length);
    return lowercaseLetters[random];
}

function getRandomUpper() {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const random = Math.floor(Math.random() * uppercaseLetters.length);
    return uppercaseLetters[random];
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.;?';
    const random = Math.floor(Math.random() * symbols.length);
    return symbols[random];
}
