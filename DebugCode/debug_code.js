    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operations
                    let result = multiply(num1, num2);
                    
                    let resultAddition = addition(num1,num2);
                    let resultDivision = division(num1,num2);
                    // Display the result
                    displayResult(result, resultAddition, resultDivision);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }
            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;
                // Multiply the numbers
                return a * b;
            }
            function addition(a, b) {
                debugger;
                return a + b;
            }
            function division (a,b) {
                debugger;
                return a / b;
            }
            function displayResult(result,resultAddition,resultDivision) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.innerHTML = `<p>The result of the multiplicaction is: ${result}</p><p>The result of the addition is: ${resultAddition}</p><p>The result of the division is: ${resultDivision}</p>`;
            }
