let expression = ''

function insert(char) {
    expression += char;
    document.getElementById('display').value = expression;
}


function clearDisplay() {
    expression = "";
    document.getElementById('display').value = expression;

}

function del() {

    expression = expression.slice(0, -1);
    document.getElementById('display').value = expression;
}

function calculate(){
let result = eval(expression)
document.getElementById('display').value = result;
expression = result;
}