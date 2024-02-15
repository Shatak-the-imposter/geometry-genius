function calculateTriangleArea(){
    // get the base input
const triangleBaseInput = document.getElementById('triangle-base-value');
const triangleBaseText = triangleBaseInput.value;
const base = parseFloat(triangleBaseText)
console.log (base);

// get the hight input
const triangleHightInput = document.getElementById('triangle-hight-value');
const triangleHightText = triangleHightInput.value;
const hight = parseFloat(triangleHightText);
console.log(hight);

// calculate the area
const area = 0.5 * base * hight;
console.log('The area of Triangle is' , area)

// display the area
const triangleArea = document.getElementById('triangle-area');
triangleArea.innerText = area;


}