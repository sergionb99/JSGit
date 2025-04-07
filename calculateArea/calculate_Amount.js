let groc1;
let groc2;
let groc3;
function calculateAmount() {
    groc1 = parseFloat(document.getElementById('grocery1').value);
    groc2 = parseFloat(document.getElementById('grocery2').value);
    groc3 = parseFloat(document.getElementById('grocery3').value);
    let total = groc1 + groc2 + groc3;
    document.getElementById('result').innerText = 'The total amount is: ' + total + '$'
}

