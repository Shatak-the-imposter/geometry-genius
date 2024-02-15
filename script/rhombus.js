function rhombusAreaCalculation() {
    const d1 = getInputValueById('rhombus-d1-value');

    const d2 = getInputValueById('rhombus-d2-value');

    const area = 0.5 * d1 *d2;
    console.log(area);

    let rhombusArea = document.getElementById('rhombus-area')
    rhombusArea.innerText = area;

}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value ;
    const inputValue = parseFloat(inputText);
    return inputValue

}