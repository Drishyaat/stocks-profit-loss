var initialPrice= document.querySelector('#initial-price');
var stocksQuantity= document.querySelector('#stocks-quantity');
var currentPrice=document.querySelector('#current-price');
var submitBtn =document.querySelector('#submit-btn');
var outputBox=document.querySelector('#output-box');
submitBtn.addEventListener("click", submitHandler);

function submitHandler()
{
    var ip=Number(initialPrice.value).toFixed(2);
    var qty=Number(stocksQuantity.value);
    var curr= Number(currentPrice.value).toFixed(2);
    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial, quantity, current){
if(initial>current)
{
//loss
var loss=(initial-current)*quantity ;
var lossPercentage=(loss/initial)*100;
//outputBox.innerText="The loss is",loss;
showOutput('The loss is ${loss} and loss percentage is ${lossPercentage}');
}
else if(current> initial)
{
//profit
var profit=(current-initial)*quantity;
var profitPercentage=(profit/initial)*100; 
showOutput( profit);
}
else
{
//rest 
showOutput("No pain no gain and no gain no pain");
}
}

function showOutput(message)  
{
    outputBox.innerHTML=message;
}