
function compute()
{   var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById('result');
    //if statement to validate if ValidatePrincipal() returns a false if so, the message is not showed and the focus is set to principal
    if (validatePrincipal() != false) {
        
        result.innerHTML='If you deposit <mark>'+principal+'</mark>,\<br\>at an interest rate of <mark> '+rate+'%</mark>\<br\>You will receive an amount of <mark>'+interest+'</mark>,\<br\>in the year <mark>'+year+'</mark>\<br\>';
    }
    
    
}
//funciton to validate principal and re-use it when the value is changed or the compute interest is clicked.
function validatePrincipal() {
    var amount = document.getElementById('principal');
    if (amount.value <= 0) {
        alert('Enter a positive number');
        amount.focus();
        return false;
    }
}
//function for the range slider, this get the value and show it besides the silder inside an span tag
function updateRate() {
    var rateval = document.getElementById('rate').value
    document.getElementById('rate_val').innerText = rateval;
}
        