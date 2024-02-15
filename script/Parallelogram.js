function parallelogramAreaCalculation() {

    //  get the base value
    const parallelogramBaseInput = document.getElementById('parallelogram-base-value');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);

    // get the hight value 
    const parallelogramHightInput = document.getElementById('parallelogram-hight-value')
    const parallelogramHightText = parallelogramHightInput.value;
    const hight = parseFloat(parallelogramBaseText);

    //  calcuate the area
    const area = base * hight;

    //  display the are  
    const parallelogramArea = document.getElementById('parallelogram-area')
    parallelogramArea.innerText = area; 
}