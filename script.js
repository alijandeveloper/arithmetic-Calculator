let result = document.getElementById("result");

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function clearDisplay() {
    result.value = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}
// Dark & Light Mode Toggle
let themeButton = document.getElementById("themeButton");
let isDark = true;

themeButton.addEventListener("click", function () {
    if (isDark) {
        // Light Mode Styling
        document.body.style.background = "white";
        document.body.style.color = "black";
        themeButton.textContent = "🌞";

        // Calculator Background Change
        document.querySelector(".calculator").style.background = "rgba(0, 0, 0, 0.1)";

        // Input Field Styling
        result.style.background = "white";
        result.style.color = "black";
        result.style.border = "2px solid #ddd";

        // Buttons Styling
        let buttons = document.querySelectorAll(".btn");
        buttons.forEach((btn) => {
            btn.style.background = "rgba(0, 0, 0, 0.2)";
            btn.style.color = "black";
        });

        // Operator Button Styling
        let operators = document.querySelectorAll(".operator");
        operators.forEach((op) => {
            op.style.background = "skyblue";
            op.style.color = "white";
        });

    } else {
        // Dark Mode Styling
        document.body.style.background = "linear-gradient(45deg, #3a3a3a, #1a1a1a)";
        document.body.style.color = "white";
        themeButton.textContent = "🌙";

        // Calculator Background Change
        document.querySelector(".calculator").style.background = "rgba(255, 255, 255, 0.1)";

        // Input Field Styling
        result.style.background = "transparent";
        result.style.color = "white";
        result.style.border = "none";

        // Buttons Styling
        let buttons = document.querySelectorAll(".btn");
        buttons.forEach((btn) => {
            btn.style.background = "rgba(255, 255, 255, 0.2)";
            btn.style.color = "white";
        });

        // Operator Button Styling
        let operators = document.querySelectorAll(".operator");
        operators.forEach((op) => {
            op.style.background = "orange";
            op.style.color = "white";
        });
    }
    isDark = !isDark;
});