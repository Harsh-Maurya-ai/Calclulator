let result = document.getElementById("result");

// Append numbers/operators
function append(value) {
  result.value += value;
}

// Clear display
function clearResult() {
  result.value = "";
}

// Delete last character
function deleteChar() {
  result.value = result.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    result.value = eval(result.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    result.value = "Error";
  }
}

// Allow keyboard input
document.addEventListener("keydown", function(e) {
  if (/[0-9+\-*/.%]/.test(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteChar();
  } else if (e.key === "Escape") {
    clearResult();
  }
});
