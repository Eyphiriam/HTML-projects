// Array To Store Valid Results
const results = [];

// Construct Table To Display Result
const resultTableElem = document.createElement('table');
const resultHRowElem = document.createElement('tr');
const xHeaderColElem = document.createElement('th');
const opHeaderColElem = document.createElement('th');
const yHeaderColElem = document.createElement('th');
const resultHeaderColElem = document.createElement('th');

// Set Table Headers
xHeaderColElem.innerText = 'X';
opHeaderColElem.innerText = 'Op';
yHeaderColElem.innerText = 'Y';
resultHeaderColElem.innerText = 'Result';

// Apppend Header Columns To Header Row
resultHRowElem.appendChild(xHeaderColElem);
resultHRowElem.appendChild(opHeaderColElem);
resultHRowElem.appendChild(yHeaderColElem);
resultHRowElem.appendChild(resultHeaderColElem);

// Append Header Row To Table
resultTableElem.appendChild(resultHRowElem);

// Append Table To Body
document.body.appendChild(resultTableElem);

// Set Table Border
resultTableElem.setAttribute('border', '1');

do {
    // Input X
    let xStr = prompt('Enter The Value Of X:');

    // Input Operator
    let operator = prompt('Enter Operator (+, -, *, /, %): ');

    // Input Y
    let yStr = prompt('Enter The Value Of Y:');

    let isValid = true;
    let result;

    // Parse X & Y To Integers
    let x = parseFloat(xStr);
    let y = parseFloat(yStr);

    if (isNaN(x) || isNaN(y)) {
        // X Or Y Are Non-Numeric
        result = 'Wrong Input Number';
        isValid = false;
    } else {
        // Perform Computation Based On Operator
        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                if (y != 0) {
                    result = x / y;
                } else {
                    result = "Error! Dividing by zero is not allowed.";
                    isValid = false;
                }
                break;
            case '%':
                result = x % y;
                break;
            default:
                // Invalid Operator
                isValid = false;
                result = 'Computation Error';
        }
    }

    // Create A New Row To Results Table
    let resultRowElem = document.createElement('tr');
    let xColElem = document.createElement('td');
    let opColElem = document.createElement('td');
    let yColElem = document.createElement('td');
    let resultColElem = document.createElement('td');
    
    xColElem.innerText = xStr;
    opColElem.innerText = operator;
    yColElem.innerText = yStr;
    resultColElem.innerText = result;
    
    resultRowElem.appendChild(xColElem);
    resultRowElem.appendChild(opColElem);
    resultRowElem.appendChild(yColElem);
    resultRowElem.appendChild(resultColElem);

    // Add Operator CSS Class To Operator Column
    opColElem.classList.add('operator');

    resultTableElem.appendChild(resultRowElem);

    // If Expression Is Valid, Push It Into The Results Array
    if (isValid) {
        results.push(result);
    }
} while (confirm('Continue?'));

// Construct Table To Display Result Stats
const statTableElem = document.createElement('table');
const statHRowElem = document.createElement('tr');
const minHeaderColElem = document.createElement('th');
const maxHeaderColElem = document.createElement('th');
const avgHeaderColElem = document.createElement('th');
const totHeaderColElem = document.createElement('th');

// Set Table Headers
minHeaderColElem.innerText = 'Min';
maxHeaderColElem.innerText = 'Max';
avgHeaderColElem.innerText = 'Average';
totHeaderColElem.innerText = 'Total';

// Apppend Header Columns To Header Row
statHRowElem.appendChild(minHeaderColElem);
statHRowElem.appendChild(maxHeaderColElem);
statHRowElem.appendChild(avgHeaderColElem);
statHRowElem.appendChild(totHeaderColElem);

// Append Header Row To Table
statTableElem.appendChild(statHRowElem);

// Filter out results with errors
let validResults = results.filter(result => !isNaN(result));

// Calculate min, max, average, and total
let min = Math.min(...validResults);
let max = Math.max(...validResults);
let total = validResults.reduce((a, b) => a + b, 0);
let average = total / validResults.length;

// Create A Row Display The Results
const statRowElem = document.createElement('tr');
const minColElem = document.createElement('td');
const maxColElem = document.createElement('td');
const avgColElem = document.createElement('td');
const totColElem = document.createElement('td');

minColElem.innerText = min;
maxColElem.innerText = max;
avgColElem.innerText = average;
totColElem.innerText = total;

statRowElem.appendChild(minColElem);
statRowElem.appendChild(maxColElem);
statRowElem.appendChild(avgColElem);
statRowElem.appendChild(totColElem);

statTableElem.appendChild(statRowElem);
// Append Table To Body
document.body.appendChild(statTableElem);

// Set Table Border
statTableElem.setAttribute('border', '1');
// Create an img element
const imgElem = document.createElement('img');

// Set the src attribute to the URL of the GIF
imgElem.src = 'https://media.giphy.com/media/BmmfETghGOPrW/giphy.gif?cid=790b76111bkdsxgam8kg96iihube1q1g54k8k7snuphauv08&ep=v1_gifs_search&rid=giphy.gif&ct=g';

// Set some style attributes to control the size of the GIF
imgElem.style.width = '300px';
imgElem.style.height = 'auto';

// Append the img element to the body
document.body.appendChild(imgElem);