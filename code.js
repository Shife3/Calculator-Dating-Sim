let battery = 0;

function addNumber(x) {
    const textArea = document.getElementById("textArea");
    let xString = x.toString();
    textArea.value += xString;
}

function Delete() {
    document.getElementById("textArea").value = "";
}

function Solve() {
    if (battery > 10) {
        document.getElementById("textArea").value = eval(document.getElementById("textArea").value);
        battery -= 10;
        document.getElementById("battery").innerText = battery + "%";
    } else {
        document.getElementById("ew").play();
        document.getElementById("battery").style.color = "red";
           setTimeout(function() {
            document.getElementById("battery").style.color = "black";
        }, 1000);
    }
}

function incrementBattery(x) {
    if (battery < 100) {
        battery += x;
        document.getElementById("blush").play();
        document.getElementById("battery").innerText = battery + "%";
    } else {
         document.getElementById("battery").style.color = "green";
           setTimeout(function() {
            document.getElementById("battery").style.color = "black";
        }, 1000);
    }
}



let interval; 

function displayText(x) {
    
    if (interval) {
        clearInterval(interval);
    }

    document.getElementById("text").textContent = ""; 
    const length = x.length;
    let i = 0;
    
    interval = setInterval(function() {
        document.getElementById("text").textContent += x.charAt(i); 
        i++;
        if (i === length) {
            clearInterval(interval);  

            setTimeout(function() {
                console.log("i")
            });
        }
    }, 10);  
}


const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");

function displayChoice(x, y, z) {
    op1.style.display = "block";
    op2.style.display = "block";
    op3.style.display = "block";
    
    op1.innerText = x;
    op2.innerText = y;
    op3.innerText = z;
    
}

let op = 0

function op1Plus() {
    op += 1;
    incrementBattery(20);
}

function op2Plus() {
    op += 2;
    incrementBattery(30);
}

function op3Plus() {
    op += 3;
    Solve();
}


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





function handleEvent() {
        
    if (op >= 4) {
        op1.removeEventListener("click", handleEvent);
        op2.removeEventListener("click", handleEvent);
        op3.removeEventListener("click", handleEvent);

        op1.style.display = "none";
        op2.style.display = "none";
        op3.style.display = "none";
    }
    
    
    if (op == 1) {
        removeText();
        displayText("*blush*");
        displayChoice("Wanna go to the mall", "Can you help me solve this math problem?", "Want to come over?");
        op += 2;
    }
    else if (op == 2) {
        removeText();
        displayText("same!");
        displayChoice("Wanna go to the mall", "Can you help me solve this math problem?", "Want to come over?");
        op += 2;
    
    } else if (op == 3) {
        removeText();
        displayText("uh...");
        displayChoice("Wanna go to the mall", "Can you help me solve this math problem?", "Want to come over?");
        op += 2;
    }
    else if (op == 4 && battery == 40) { // secret ending
        displayText("ok! i will bring my friends");

    setTimeout(() => {
        displayText("narrator: After a week, you and Calc go to the mall non-romantically and see Howard and Iris together!");
    }, 2000);
    
     setTimeout(() => {
        displayText("*secret ending*");
    }, 5000);

        document.getElementById("peter").play();
        
    
    } else if (battery > 30) { // good ending
         displayText("sure!");
         
        setTimeout(() => {
            displayText("narrator: you visted each other for a month and she finnaly asks you out to the cafe");
        }, 2000);
        
        setTimeout(() => {
            displayText("*good ending*"); 
        }, 5000);

        document.getElementById("sexy").play();
        
    
    } else if (op == 8 && battery == 0) { //bad ending
        displayText("Sorry, maybe too early"); 

        setTimeout(() => {
            displayText("you were weird and she never talked with u again"); 
        }, 2000);

        setTimeout(() => {
            displayText("*bad ending*");
        }, 5000);

        document.getElementById("brainrot").play();
        
    
    } else if  (battery <= 30 && op != 8 && op > 4) { //netruel ending
        displayText(" you were not weird but had no rizz you were friendzoned");

        setTimeout(() => {
            displayText("*neutruel ending*");
        }, 3000);

        document.getElementById("galaxy").play();
    }
    
    

}

function removeText() {
    document.getElementById("text").textContent = "";
}


document.addEventListener("keydown", function() {
    battery = 0
    document.getElementById("battery").textContent = battery + "%"
    displayText("hey, how is your day?");    
    displayChoice("u are cute ;3", "good!", "...");

    op1.addEventListener("click", handleEvent);

    op2.addEventListener("click", handleEvent);

    op3.addEventListener("click", handleEvent);
    
});






