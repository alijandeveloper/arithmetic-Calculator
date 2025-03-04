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
        document.body.style.background = "white";
        document.body.style.color = "black";
        themeButton.textContent = "🌞";
    } else {
        document.body.style.background = "linear-gradient(45deg, #3a3a3a, #1a1a1a)";
        document.body.style.color = "white";
        themeButton.textContent = "🌙";
    }
    isDark = !isDark;
});