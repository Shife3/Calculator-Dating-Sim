let battery = 0;
let op = 0;
let interval;

function addNumber(x) {
    const textArea = document.getElementById("textArea");
    textArea.value += x.toString();
}

function Delete() {
    document.getElementById("textArea").value = "";
}

function Solve() {
    if (battery > 10) {
        const textArea = document.getElementById("textArea");
        textArea.value = eval(textArea.value);
        battery -= 10;
        updateBatteryDisplay();
    } else {
        document.getElementById("ew").play();
        flashBatteryColor("red");
    }
}

function incrementBattery(x) {
    if (battery < 100) {
        battery += x;
        document.getElementById("blush").play();
        updateBatteryDisplay();
    } else {
        flashBatteryColor("green");
    }
}

function updateBatteryDisplay() {
    document.getElementById("battery").innerText = battery + "%";
}

function flashBatteryColor(color) {
    const batteryDisplay = document.getElementById("battery");
    batteryDisplay.style.color = color;
    setTimeout(() => {
        batteryDisplay.style.color = "black";
    }, 1000);
}

function displayText(x) {
    if (interval) clearInterval(interval);

    const textDisplay = document.getElementById("text");
    textDisplay.textContent = "";

    let i = 0;
    interval = setInterval(() => {
        textDisplay.textContent += x.charAt(i);
        i++;
        if (i === x.length) clearInterval(interval);
    }, 10);
}

function removeText() {
    document.getElementById("text").textContent = "";
}

function displayChoice(x, y, z) {
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");

    op1.style.display = "block";
    op2.style.display = "block";
    op3.style.display = "block";

    op1.innerText = x;
    op2.innerText = y;
    op3.innerText = z;
}

function hideChoices() {
    document.getElementById("op1").style.display = "none";
    document.getElementById("op2").style.display = "none";
    document.getElementById("op3").style.display = "none";
}

function op1Plus() {
    op += 1;
    incrementBattery(20);
    handleEvent();
}

function op2Plus() {
    op += 2;
    incrementBattery(30);
    handleEvent();
}

function op3Plus() {
    op += 3;
    Solve();
    handleEvent();
}

function handleEvent() {
    if (op === 1) {
        removeText();
        displayText("*blush*");
        displayChoice("Wanna go to the mall", "Can you help me solve this math problem?", "Want to come over?");
        op += 2;
    } else if (op === 2) {
        removeText();
        displayText("same!");
        displayChoice("Wanna go to the mall", "Can you help me solve this math problem?", "Want to come over?");
        op += 3;
    } else if (op === 3) {
        removeText();
        displayText("uh...");
        displayChoice("Wanna go to the mall", "Can you help me solve this math problem?", "Want to come over?");
        op += 3;
        
    } else if (op === 4 && battery === 40) {
        displayText("ok! i will bring my friends");
        setTimeout(() => {
            displayText("narrator: After a week, you and Calc go to the mall non-romantically and see Howard and Iris together!");
        }, 2000);
        setTimeout(() => {
            displayText("*secret ending*");
        }, 5000);
        document.getElementById("peter").play();
        hideChoices();
        
    } else if (op === 5 && battery === 60) {
        displayText("sure!");
        setTimeout(() => {
            displayText("narrator: you visited each other for a month and she finally asks you out to the cafe");
        }, 2000);
        setTimeout(() => {
            displayText("*good ending*");
        }, 5000);
        document.getElementById("sexy").play();
        hideChoices();
    
    } else if (op === 6 && battery === 0) {
        displayText("Sorry, maybe too early");
        setTimeout(() => {
            displayText("you were weird and she never talked with you again");
        }, 2000);
        setTimeout(() => {
            displayText("*bad ending*");
        }, 5000);
        document.getElementById("brainrot").play();
        hideChoices();
    
    } else {
        displayText("you were not weird but had no rizz, you were friendzoned");
        setTimeout(() => {
            displayText("*neutral ending*");
            document.getElementById("galaxy").play();
        }, 2000);
        },

        
