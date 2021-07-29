// GETTING ELEMENTS HTML

let spaceA = document.getElementById('letter1')
let spaceB = document.getElementById('letter2')
let spaceC = document.getElementById('letter3')
let spaceD = document.getElementById('letter4')
let spaceE = document.getElementById('letter5')
let spaceF = document.getElementById('letter6')
let spaceG = document.getElementById('letter7')
let spaceH = document.getElementById('letter8')
let spaceI = document.getElementById('letter9')
let spaceJ = document.getElementById('letter10')
let spaceK = document.getElementById('letter11')
let spaceL = document.getElementById('letter12')
let letterA = document.getElementById('a')
let letterB = document.getElementById('b')
let letterC = document.getElementById('c')
let letterD = document.getElementById('d')
let letterE = document.getElementById('e')
let letterF = document.getElementById('f')
let letterG = document.getElementById('g')
let letterH = document.getElementById('h')
let letterI = document.getElementById('i')
let letterJ = document.getElementById('j')
let letterK = document.getElementById('k')
let letterL = document.getElementById('l')
let letterM = document.getElementById('m')
let letterN = document.getElementById('n')
let letterO = document.getElementById('o')
let letterP = document.getElementById('p')
let letterQ = document.getElementById('q')
let letterR = document.getElementById('r')
let letterS = document.getElementById('s')
let letterT = document.getElementById('t')
let letterU = document.getElementById('u')
let letterV = document.getElementById('v')
let letterW = document.getElementById('w')
let letterX = document.getElementById('x')
let letterY = document.getElementById('y')
let letterZ = document.getElementById('z')
let wrongGuessCount = document.getElementById('wrongGuessCount')
let headOuter = document.getElementById('head-oute')
let headInner = document.getElementById('head-inne')
let bodyStick = document.getElementById('body-stic')
let leftHand = document.getElementById('left-han')
let rightHand = document.getElementById('right-han')
let rightLeg = document.getElementById('right-le')
let leftLeg = document.getElementById('left-le')
let losingMessage1 = document.getElementById('losing-message4')
let losingMessage2 = document.getElementById('losing-message5')
let losingMessage3 = document.getElementById('losing-message6')
let losingScreen = document.getElementById('losing-screen1')
let backspace = document.getElementById('backspace')
let reset = document.getElementById('rese')
let winningScreen = document.getElementById('winning-screen1')
let winningMessage1 = document.getElementById('winning-message4')
let winningMessage2 = document.getElementById('winning-message5')
let winningMessage3 = document.getElementById('winning-message6')
let meaning = document.getElementById('meanin')
let meaningBg = document.getElementById('meaning-backgroun')
let wordMeaning = document.getElementById('word-meanin')
let meaningWord = document.getElementById('word-meaning-wor')
// WORDS FOR GAME

var Functions = {
    word : 'FUNCTIONS',
    meaning : 'A function is a block of code that can be referenced by name to run the code it contains.'
}
var IntelliJ = {
    word : 'INTELLIJ',
    meaning : 'To start writing code in Java, you can use IntelliJ, an IDE created for writing and running code.'
}

var Java = {
    word : 'JAVA',
    meaning : "Java is a powerful multi-platform programming language. It's used for many professional and commercial applications, including every Android application and even the Android operating system itself!"
}

var Loops = {
    word : 'LOOPS',
    meaning : 'Loops check a condition and then run a code block. The loop will continue to check and run until a specified condition is reached.'
}

var Arrays = {
    word : 'ARRAYS',
    meaning : "Arrays are containers that hold variables; they're used to group together similar variables. You can think of arrays like shelves at a pet store. The array would be the shelf, and the animals in cages are the variables inside."
}

var Bit = {
    word : 'BIT',
    meaning : "The individual 1's and 0's you see in binary are called bits."
}

var Coding = {
    word : 'CODING',
    meaning : "Coding is how people create instructions for computers to follow. Just like people speak different languages, so do programs. For instance, Roblox uses the coding language Lua while Minecraft was built with Java. "
}

var Linux = {
    word : 'LINUX',
    meaning : "Linux is an open-source operating system designed to run on multiple types of devices, like laptops, phones, tablets, robots, and many others. In fact, the Android operating system is based on Linux!"
}

var Python = {
    word : 'PYTHON',
    meaning : "Python is a programming language that’s currently becoming more and more powerful with every new library added to its collection. It handles everything from web development and game design, to machine learning and AI. Python is known for having syntax that's simpler and easier to write than many other languages like Java and C++."
}

var Sprites = {
    word : 'SPRITES',
    meaning : "Sprites are computer graphics that you can move via code; a 2D player that walks is an animated sprite."
}

// ARRAYS
var words = [ Functions, IntelliJ, Java, Loops, Arrays, Bit, Coding, Linux, Python, Sprites]
var selected = []
var keyboardLetters = [letterA, letterB, letterC, letterD, letterE, letterF, letterG,  letterH, letterI, letterJ, letterK, letterL, letterM, letterN, letterO, letterP, letterQ, letterR, letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ]
var wrongGuess = []
var correctGuess =[]

// FOR REVEALING BODY
function bodyAdd(){
    if (wrongGuess.length == 1){
        headOuter.id = 'head-outer'
        headInner.id = 'head-inner'
    }
    else if (wrongGuess.length == 2){
        bodyStick.id = 'body-stick'
    }
    else if (wrongGuess.length == 3){
        leftHand.id = 'left-hand'
    }
    else if (wrongGuess.length == 4){
        rightHand.id = 'right-hand'
    }
    else if (wrongGuess.length == 5){
        rightLeg.id = 'right-leg'
    }
    else if (wrongGuess.length == 6){
        leftLeg.id = 'left-leg'
            losingMessage1.id = 'losing-message'
            losingMessage2.id = 'losing-message2'
            losingMessage3.id = 'losing-message3'
            losingMessage3.innerText = words[j].word
            losingScreen.id = 'losing-screen'
            reset.id = 'reset' 
    }
}

// PICKING A RANDOM INDEX FOR THE WORD

let j = Math.trunc(Math.random()*10)
console.log(j)

// RESET 

reset.addEventListener("click", function() {
location.reload();
})


// MEANING
meaning.addEventListener("click", function() {
    meaningBg.id = "meaning-background"
    wordMeaning.id = 'word-meaning'
    meaningWord.id = 'word-meaning-word'
    meaningWord.innerText = words[j].word
    wordMeaning.innerText = words[j].meaning
    reset.id = 'reset' 
    })

// BACKSPACE

backspace.addEventListener("click", function(){
    if(spaceL.innerText != ''){
        spaceL.innerText = ''
    }
    else if(spaceK.innerText != ''){
        spaceK.innerText = ''
    }
    else if(spaceJ.innerText != ''){
        spaceJ.innerText = ''
    }
    else if(spaceI.innerText != ''){
        spaceI.innerText = ''
    }
    else if(spaceH.innerText != ''){
        spaceH.innerText = ''
    }
    else if(spaceG.innerText != ''){
        spaceG.innerText = ''
    }
    else if(spaceF.innerText != ''){
        spaceF.innerText = ''
    }
    else if(spaceE.innerText != ''){
        spaceE.innerText = ''
    }
    else if(spaceD.innerText != ''){
        spaceD.innerText = ''
    }
    else if(spaceC.innerText != ''){
        spaceC.innerText = ''
    }
    else if(spaceB.innerText != ''){
        spaceB.innerText = ''
    }
    else if(spaceA.innerText != ''){
        spaceA.innerText = ''
    }
})

// WINNING SCREEN

function showWinningScreen(){
    winningScreen.id = 'winning-screen'
    winningMessage1.id = 'winning-message1'
    winningMessage2.id = 'winning-message2'
    winningMessage3.id = 'winning-message3'
    winningMessage3.innerText = words[j].word
    meaning.id = 'meaning'
    reset.id = 'resete'
}

// WINNING

function winning(){
if(words[j].word.length == 3){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2])){
        showWinningScreen()
}
} else if(words[j].word.length == 4){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2] && spaceD.innerHTML == selected[0][3])){
        showWinningScreen()
    }
} else if(words[j].word.length == 5){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2] && spaceD.innerHTML == selected[0][3] && spaceE.innerHTML == selected[0][4])){
        showWinningScreen()
    }
} else if(words[j].word.length == 6){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2] && spaceD.innerHTML == selected[0][3] && spaceE.innerHTML == selected[0][4] && spaceF.innerHTML == selected[0][5])){
        showWinningScreen()
    }
} else if(words[j].word.length == 7){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2] && spaceD.innerHTML == selected[0][3] && spaceE.innerHTML == selected[0][4] && spaceF.innerHTML == selected[0][5] && spaceG.innerHTML == selected[0][6])){
        showWinningScreen()
    }
} else if(words[j].word.length == 8){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2] && spaceD.innerHTML == selected[0][3] && spaceE.innerHTML == selected[0][4] && spaceF.innerHTML == selected[0][5] && spaceG.innerHTML == selected[0][6] && spaceH.innerHTML == selected[0][7])){
        showWinningScreen()
    }
} else if(words[j].word.length == 9){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2] && spaceD.innerHTML == selected[0][3] && spaceE.innerHTML == selected[0][4] && spaceF.innerHTML == selected[0][5] && spaceG.innerHTML == selected[0][6] && spaceH.innerHTML == selected[0][7] && spaceI.innerHTML == selected[0][8])){
        showWinningScreen()
    }
} else if(words[j].word.length == 10){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2] && spaceD.innerHTML == selected[0][3] && spaceE.innerHTML == selected[0][4] && spaceF.innerHTML == selected[0][5] && spaceG.innerHTML == selected[0][6] && spaceH.innerHTML == selected[0][7] && spaceI.innerHTML == selected[0][8] && spaceJ.innerHTML == selected[0][9])){
        showWinningScreen()
    }
} else if(words[j].word.length == 11){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2] && spaceD.innerHTML == selected[0][3] && spaceE.innerHTML == selected[0][4] && spaceF.innerHTML == selected[0][5] && spaceG.innerHTML == selected[0][6] && spaceH.innerHTML == selected[0][7] && spaceI.innerHTML == selected[0][8] && spaceJ.innerHTML == selected[0][9] && spaceK.innerHTML == selected[0][10])){
        showWinningScreen()
    }
} else if(words[j].word.length == 12){
    if ((spaceA.innerHTML == selected[0][0] && spaceB.innerHTML == selected[0][1] && spaceC.innerHTML == selected[0][2] && spaceD.innerHTML == selected[0][3] && spaceE.innerHTML == selected[0][4] && spaceF.innerHTML == selected[0][5] && spaceG.innerHTML == selected[0][6] && spaceH.innerHTML == selected[0][7] && spaceI.innerHTML == selected[0][8] && spaceJ.innerHTML == selected[0][9] && spaceK.innerHTML == selected[0][10] && spaceL.innerHTML == selected[0][11])){
        showWinningScreen()
    }
}
}

// SELECTING WORD LENGTH

if (words[j].word.length == 3){
        selected.push(words[j].word.split(''))
        for (let i = 0; i < keyboardLetters.length; i++) {
            keyboardLetters[i].addEventListener("click", function() {
                if(spaceA.innerHTML == ''){
                    spaceA.innerHTML = keyboardLetters[i].innerHTML;
                    winning()
                    if(keyboardLetters[i].innerHTML == selected[0][0]){
                    } else {
                        wrongGuess.push(0)
                        wrongGuessCount.innerText = wrongGuess.length
                        bodyAdd()
                    }
                }
                else if(spaceB.innerHTML == ''){
                    spaceB.innerHTML = keyboardLetters[i].innerHTML;
                    winning()
                    if(keyboardLetters[i].innerHTML == selected[0][1]){
                        
                    } else {
                        wrongGuess.push(0)
                        wrongGuessCount.innerText = wrongGuess.length
                        bodyAdd()
                    }
                }
                else if(spaceC.innerHTML == ''){
                    spaceC.innerHTML = keyboardLetters[i].innerHTML;
                    winning()
                    if(keyboardLetters[i].innerHTML == selected[0][2]){
                        
                    } else {
                        wrongGuess.push(0)
                        wrongGuessCount.innerText = wrongGuess.length
                        bodyAdd()
                    }
                }
            })
        } 
    }
else if (words[j].word.length == 4){
    selected.push(words[j].word.split(''))
    for (let i = 0; i < keyboardLetters.length; i++) {
        keyboardLetters[i].addEventListener("click", function() {
            if(spaceA.innerHTML == ''){
                spaceA.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][0]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceB.innerHTML == ''){
                spaceB.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][1]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceC.innerHTML == ''){
                spaceC.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][2]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceD.innerHTML == ''){
                spaceD.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][3]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
        })
    }
}
else if (words[j].word.length == 5){
    selected.push(words[j].word.split(''))
    for (let i = 0; i < keyboardLetters.length; i++) {
        keyboardLetters[i].addEventListener("click", function() {
            if(spaceA.innerHTML == ''){
                spaceA.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][0]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceB.innerHTML == ''){
                spaceB.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][1]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceC.innerHTML == ''){
                spaceC.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][2]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceD.innerHTML == ''){
                spaceD.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][3]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceE.innerHTML == ''){
                spaceE.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][4]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
        })
    }
}
else if (words[j].word.length == 6){
    selected.push(words[j].word.split(''))
    for (let i = 0; i < keyboardLetters.length; i++) {
        keyboardLetters[i].addEventListener("click", function() {
            if(spaceA.innerHTML == ''){
                spaceA.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][0]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceB.innerHTML == ''){
                spaceB.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][1]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceC.innerHTML == ''){
                spaceC.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][2]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceD.innerHTML == ''){
                spaceD.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][3]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceE.innerHTML == ''){
                spaceE.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][4]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceF.innerHTML == ''){
                spaceF.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][5]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
        })
    }
}
else if (words[j].word.length == 7){
    selected.push(words[j].word.split(''))
    for (let i = 0; i < keyboardLetters.length; i++) {
        keyboardLetters[i].addEventListener("click", function() {
            if(spaceA.innerHTML == ''){
                spaceA.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][0]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceB.innerHTML == ''){
                spaceB.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][1]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceC.innerHTML == ''){
                spaceC.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][2]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceD.innerHTML == ''){
                spaceD.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][3]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceE.innerHTML == ''){
                spaceE.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][4]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceF.innerHTML == ''){
                spaceF.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][5]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceG.innerHTML == ''){
                spaceG.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][6]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
        })
    }
}
else if (words[j].word.length == 8){
    selected.push(words[j].word.split(''))
    for (let i = 0; i < keyboardLetters.length; i++) {
        keyboardLetters[i].addEventListener("click", function() {
            if(spaceA.innerHTML == ''){
                spaceA.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][0]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceB.innerHTML == ''){
                spaceB.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][1]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceC.innerHTML == ''){
                spaceC.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][2]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceD.innerHTML == ''){
                spaceD.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][3]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceE.innerHTML == ''){
                spaceE.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][4]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceF.innerHTML == ''){
                spaceF.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][5]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceG.innerHTML == ''){
                spaceG.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][6]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceH.innerHTML == ''){
                spaceH.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][7]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
        })
    }
}
else if (words[j].word.length == 9){
    selected.push(words[j].word.split(''))
    for (let i = 0; i < keyboardLetters.length; i++) {
        keyboardLetters[i].addEventListener("click", function() {
            if(spaceA.innerHTML == ''){
                spaceA.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][0]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceB.innerHTML == ''){
                spaceB.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][1]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceC.innerHTML == ''){
                spaceC.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][2]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceD.innerHTML == ''){
                spaceD.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][3]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceE.innerHTML == ''){
                spaceE.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][4]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceF.innerHTML == ''){
                spaceF.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][5]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceG.innerHTML == ''){
                spaceG.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][6]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceH.innerHTML == ''){
                spaceH.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][7]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceI.innerHTML == ''){
                spaceI.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][8]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
        })
    }
}
else if (words[j].word.length == 10){
    selected.push(words[j].word.split(''))
    for (let i = 0; i < keyboardLetters.length; i++) {
        keyboardLetters[i].addEventListener("click", function() {
            if(spaceA.innerHTML == ''){
                spaceA.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][0]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceB.innerHTML == ''){
                spaceB.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][1]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceC.innerHTML == ''){
                spaceC.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][2]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceD.innerHTML == ''){
                spaceD.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][3]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceE.innerHTML == ''){
                spaceE.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][4]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceF.innerHTML == ''){
                spaceF.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][5]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceG.innerHTML == ''){
                spaceG.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][6]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceH.innerHTML == ''){
                spaceH.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][7]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceI.innerHTML == ''){
                spaceI.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][8]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceJ.innerHTML == ''){
                spaceJ.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][9]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
        })
    }
}
else if (words[j].word.length == 12){
    selected.push(words[j].word.split(''))
    for (let i = 0; i < keyboardLetters.length; i++) {
        keyboardLetters[i].addEventListener("click", function() {
            if(spaceA.innerHTML == ''){
                spaceA.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][0]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceB.innerHTML == ''){
                spaceB.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][1]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceC.innerHTML == ''){
                spaceC.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][2]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceD.innerHTML == ''){
                spaceD.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][3]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceE.innerHTML == ''){
                spaceE.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][4]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceF.innerHTML == ''){
                spaceF.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][5]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceG.innerHTML == ''){
                spaceG.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][6]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceH.innerHTML == ''){
                spaceH.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][7]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceI.innerHTML == ''){
                spaceI.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][8]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceJ.innerHTML == ''){
                spaceJ.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][9]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceK.innerHTML == ''){
                spaceK.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][10]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
            else if(spaceL.innerHTML == ''){
                spaceL.innerHTML = keyboardLetters[i].innerHTML;
                winning()
                if(keyboardLetters[i].innerHTML == selected[0][11]){
                    
                } else {
                    wrongGuess.push(0)
                    wrongGuessCount.innerText = wrongGuess.length
                    bodyAdd()
                }
            }
        })
    }
}