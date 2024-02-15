function ellipseAreaCalculation() {
    const a = getInputValueById('ellipse-a-value')
    const b = getInputValueById('ellipse-b-value')
    const area = 3.1416 * a * b;
    const ellipseArea = document.getElementById ('ellipse-area')
    ellipseArea.innerText = area;
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}