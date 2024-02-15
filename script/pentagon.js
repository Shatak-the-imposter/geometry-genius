function pentagonAreaCalculation() {
    const p = getInputValueByID('pentagon-p-value');
    const b = getInputValueByID('pentagon-b-value');
    const area = 0.5 * p * b;
    console.log(area)
    const pentagonArea = document.getElementById ('pentagon-area');
    pentagonArea.innerText = area;

}

function getInputValueByID(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}