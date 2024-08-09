//Declaring and Initialising array of words
let words = [
    {
        word: "advent",
        hint: "The period beginning four Sundays before Christmas"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "disciple",
        hint: "a personal follower of Christ during his life"
    },
    {
        word: "messiah",
        hint: "saviour or liberator of a group of people"
    },
    {
        word: "paradise",
        hint: "a very beautiful, pleasant, or peaceful place that seems to be perfect."
    },
    {
        word: "rejoice",
        hint: "to feel or show great happiness about something"
    },
    {
        word: "revelation",
        hint: "something that is revealed"
    },
    {
        word: "sacrifice",
        hint: "the act of giving up something that you want"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "genesis",
        hint: "The first book of the bible"
    },
    {
        word: "multiply",
        hint: "The process of increase or grow"
    },
    {
        word: "kingdom",
        hint: "A politically identified region"
    },
    {
        word: "church",
        hint: "A place of worship"
    },
    {
        word: "christ",
        hint: "The son of God"
    },
    {
        word: "gift",
        hint: "A special endowment"
    },
    {
        word: "amen",
        hint: "Said at the end of prayer"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "apostle",
        hint: "A member of the fivefold ministry"
    },
    {
        word: "jerusalem",
        hint: "A city of peace"
    },
    {
        word: "sanctification",
        hint: "A place od seperation to God"
    },
    {
        word: "confess",
        hint: "A declaration of something"
    },
    {
        word: "Faith",
        hint: "To believe in someone or something"
    },
    {
        word: "hope",
        hint: "want something to happen"
    },
]
// backgroung audio, click required

let play = document.getElementById("play");
function playMusic() {
 let audio = new Audio("assets/music.mp3");
 audio.play()
}
play.addEventListener("click", playMusic);

//Declaring constant variables

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

// Declaring two variables 

let rightWord, stopwatch;

// setting up the stopwatch/timer 

const initstopwatch = maxTime => {
    clearInterval(stopwatch);
    stopwatch = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${rightWord.toUpperCase()} was the correct word`);
        wGame();
    }, 1000);
}
//Word scrambling
const wGame = () => {
    initstopwatch(29);
    let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from word
    let myArray = randomObj.word.split("");      //splitting each letter of random word
    for (let i = myArray.length - 1; i > 0; i--) {   // getting random number
        let j = Math.floor(Math.random() * (i + 1));
        [myArray[i], myArray[j]] = [myArray[j], myArray[i]]; //random shuffling and swaping of array elements
    }
    wordText.innerText = myArray.join("");  // passing shuffled word as word text
    hintText.innerText = randomObj.hint;  // passing random object hint as hint text
    rightWord= randomObj.word.toLowerCase();; // passing random word to correct word
    inputField.value = "";
    inputField.setAttribute("maxlength", rightWord.length);
}
wGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase(); // getting the user input
    if(!userWord) return alert("Please enter the word to check!");
    if(userWord !== rightWord) return alert(`Oops! ${userWord} is not the right word, try again`);
    alert(`Welldone! ${rightWord.toUpperCase()} is the right word`);
    wGame(); // calling function
}

refreshBtn.addEventListener("click", wGame); // refresh button
checkBtn.addEventListener("click", checkWord); // checkword  button