//Exercise 1

function myTimer() {
    const time = new Date();
    var day = time.getDay();

    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    document.getElementById("datetime").innerHTML = daylist[day] + ", " + time.toLocaleTimeString();
}

//Exercise 2
const getinputyear = () => {
    let year = document.getElementById("inputyear").value;
    document.getElementById("yearoutput").innerHTML = leapyear(year);
}
function leapyear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return "The year is a leap year"
            }
            else {
                return "The year is not a leap year";
            }
        }
        else {
            return "The year is a leap year"
        }

    }
    else {
        return "The year is not a leap year"
    }
}


//Exercise 3
const getCheckSundayYear = () => {
    let year = document.getElementById("yearSundayInput").value;
    document.getElementById("yearSundayOutput").innerHTML = checkSundayYear(year);
}

function checkSundayYear(year) {
    const time = new Date(year, 0, 1);
    var day = time.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    if (daylist[day] === "Sunday") {
        return "Sunday is the 1st of january.";
    } else
        return "No Sunday isn't 1st of January.";
}

//Exercise 4
const getCheckGuessingnumber = () => {
    let number = parseInt(document.getElementById("guessingGameInput").value);
    document.getElementById("guessingGameOutput").innerHTML = checkgetGuessingnumber(number);
}

function checkgetGuessingnumber(number) {
    let randNumer = Math.floor(Math.random() * 11);
    if (number == randNumer) {
        return "Good Job! you guessed right number " + randNumer;
    } else {
        return "Wrong number! try again the number was: " + randNumer;
    }
}

//Exercise 5
function timeToChristmes() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    var daysToChristmes = 365 - day;
    document.getElementById("daysToChristmas").innerHTML = daysToChristmes.toString() + " days";
}



//Exercise 6
const getReverseNumber = () => {
    let num = document.getElementById("reverseNumInput").value;
    document.getElementById("reverseNumOutput").innerHTML = flipOrderNumber(num);
}

function flipOrderNumber(num) {
    return num.split("").reverse().join("");
}

//Exercise 7
const getTextCombination = () => {
    let wordtext = document.getElementById("wordInput").value;
    document.getElementById("wordOutput").innerHTML = getTextCombinationResult(wordtext);
}
function getTextCombinationResult(wordtext) {
    var wordArray = wordtext.split("");
    let text = "";
    var textResult = [];
    for (let i = 0; i < wordArray.length; i++) {
        text = wordArray[i]
        textResult.push(text)
        for (let j = i + 1; j < wordArray.length; j++) {
            text += wordArray[j];
            textResult.push(text)
        }
    }
    return textResult.join(' ');
}

//Exercise 8
const getAlphabitical = () => {
    let inputText = document.getElementById("input8").value;
    document.getElementById("output8").innerHTML = getAlphabiticalResult(inputText);
}

function getAlphabiticalResult(inputText) {
    return inputText.split('').sort().join('');
}

//Exercise 9
const getLongstWord = () => {
    let inputText = document.getElementById("input9").value;
    document.getElementById("output9").innerHTML = getLongstWordResult(inputText);
}

function getLongstWordResult(inputText) {
    let uppercaseText = inputText.toUpperCase();
    let testArray = uppercaseText.split(' ');
    var max_str = testArray[0].length;
    var ans = testArray[0];
    for (var i = 1; i < testArray.length; i++) {
        var maxi = testArray[i].length;
        if (maxi > max_str) {
            ans = testArray[i];
            max_str = maxi;
        }
    }
    return ans
}

//Exercise 10
const checkIsPrime = () => {
    let inputnumber = parseInt(document.getElementById("input10").value);
    document.getElementById("output10").innerHTML = checkIsPrimeResult(inputnumber);
}
function checkIsPrimeResult(inputnumber) {
    for (let i = 2, s = Math.sqrt(inputnumber); i <= s; i++) {
        if (inputnumber % i === 0) return false;
    }
    return inputnumber > 1;
}

//Exercise 11
const getTypeofVariable = () => {
    var inputValue = document.getElementById("input11").value;
    console.log(typeof inputValue.valueOf())
    document.getElementById("output11").innerHTML = getTypeofVariableResult(inputValue);
}

function getTypeofVariableResult(inputValue) {
    return typeof inputValue;
}

//Exercise 12
function ExerciseTwelv() {
    var even = "";
    var odd = "";
    for (var i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            even += i + " ..................is Even! <br/>"
        }
        else {
            odd += i + " ..................is Odd! <br/>"
        }
    }

    document.getElementById("output12").innerHTML = odd + even;
}

//Exercise 13
function getHabbyNumbers() {
    var index = 1;
    var found = 0;
    var happyNumbes = '';
    while (found < 10) {
        check = index;
        do {
            check = checkHappy(check)
        } while (check != 1 && check != 4)
        if (check == 1) {
            happyNumbes += index.toString() + ",  ";
            found++;
        }
        index++;
    }
    document.getElementById("output13").innerHTML = "The first ten happy numbers: " + happyNumbes;
}

function checkHappy(inp) {
    var sum = 0;
    var numArray = inp.toString().split("");
    for (var i = 0; i < numArray.length; i++) {
        sum += Math.pow(numArray[i], 2);
    }
    return sum;
}

// Exersice 18

function getdaysInMonth(ev) {
    ev.preventDefault();
    var inputMonth = document.getElementById("inputMonth").value;
    var inputYear = document.getElementById("inputYear").value;
    document.getElementById("output18").innerHTML = getdaysInMonthResult(inputYear, inputMonth);
}

function getdaysInMonthResult(inputYear, inputMonth) {
    
    var daysNums = new Date(inputYear, inputMonth, 0).getDate();
    return daysNums
}

// Exersice 19
function convertToMinutes() {
    var inputMin = parseInt(document.getElementById("input19").value);
    var hour = parseInt(inputMin / 60);
    var min = (inputMin % 60);
    document.getElementById("output19").innerHTML = hour.toString() + " hours : " + min.toString() + " minutes " ;
}


// Exersice 20
function getActualAge() {
    var inputYear = parseInt(document.getElementById("input20").value);
    const d = new Date();
    currentYear = parseInt(d.getFullYear());
    if (inputYear > currentYear) {
        document.getElementById("output20").innerHTML = "Not born yet! ";
    } else {
        var actualAge = currentYear - inputYear;
        document.getElementById("output20").innerHTML = actualAge.toString() + " years old! ";
    }
}