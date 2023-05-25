const slider = document.querySelector(".slider");
const lenDisplay = document.querySelector("[data-len]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector(".copyMsg");

const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");

const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols = '!@#$%^&*(){}:"<>';

let passwordLength = 10 ;
let password = '';
let count = 0; 

function updateSliderValue()
{
    slider.value = passwordLength;
    lenDisplay.textContent = passwordLength;

    const min = slider.min;
    const max = slider.max;
    slider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}
slider.addEventListener("input", () => {
    passwordLength = slider.value;
    updateSliderValue();
});
updateSliderValue();


async function copyPaste()
{
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);
}

copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyPassword();
})

//for generating Random numbers
function getRandom(min , max){
    return Math.floor(Math.random() * (max - min)) + min 
}

function getRandomUppercase(){
    return String.fromCharCode(getRandom(65 , 90))
}

function getRandomLowercase(){
    return String.fromCharCode(getRandom(97 , 122))
}

function getRandomInterger(){
    return getRandom(0 , 9)
}

function getRandomSymbol(){
    let random = getRandom(0 , symbols.length)
    return symbols.charAt(random)
}

//to set color of indicator
function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

//For checking password strength
function passwordStrength(){
    let hasUpper = uppercaseCheck.checked;
    let hasLower = lowercaseCheck.checked;
    let hasSymbol = symbolsCheck.checked;
    let hasNumber = numbersCheck.checked;

    if(hasUpper && hasLower && (hasSymbol || hasNumber) && passwordLength >=8) {
        setIndicator("#0f0")
    } else if((hasUpper || hasLower) && (hasNumber || hasSymbol) && passwordLength >=6) {
        setIndicator("#ff0")
    } else {
        setIndicator("#f00")
    }
}

function createPassword(){
    let arrFunction = [];
    password = ''
    if(uppercaseCheck.checked){
        arrFunction.push(getRandomUppercase)
    }
    if(lowercaseCheck.checked){
        arrFunction.push(getRandomLowercase)
    }
    if(numbersCheck.checked){
        arrFunction.push(getRandomInterger)
    }
    if(symbolsCheck.checked){
        arrFunction.push(getRandomSymbol)
    }
    //for compalsary password
    for(let i = 0 ; i < arrFunction.length ; i++){
        password += arrFunction[i]()
    }

    //for addtional password
    for(let i = 0 ; i < passwordLength-arrFunction.length ; i++){
        let random = getRandom(0 , arrFunction.length)
        password += arrFunction[random]()
    }

    //for shuffle password
    password = password.split('').sort(()=> Math.random() * 0.5).join('')

    //to return password
    passwordStrength()
    passwordDisplay.value = password
}

generateBtn.addEventListener('click' , ()=>{
    if(count == 0){
        return
    }
    if(passwordLength < count){
        passwordLength = count
        slider()
    }
    password = ''
    createPassword()
})


function handleCheckBoxChange() {
    count = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            count++;
    });

    passwordStrength()

    //special condition
    if(passwordLength < count ) {
        passwordLength = count;
        slider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})