function calculateRectangleArea(){

    // get the width input
    const rectangleWidthInput = document.getElementById('rectangle-width-value');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    // get the length input
    const rectangleLengthInput = document.getElementById('rectangle-length-value');
    const rectangleLengthText = rectangleWidthInput.value;
    const length = parseFloat(rectangleLengthText);

    //  calculate the area 

    const area = width * length;

    //  display the area 
   const rectangleArea = document.getElementById('rectangle-area')
   rectangleArea.innerText = area;

}