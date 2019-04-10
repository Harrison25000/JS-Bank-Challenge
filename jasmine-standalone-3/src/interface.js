$(document).ready(function() {
  var account = new Account();
  $('#balance').text(account.balance);

console.log(document.getElementById('deposit'))
var deposit = document.getElementById('deposit')
console.log(deposit);

$('#form').on('submit', function(event) {
});


document.getElementById("form").addEventListener("submit", function(event){
    //Stops the form submitting.
    event.preventDefault();

    //Do the checks here.
    console.log(document.getElementById('deposit'))
    console.log(event)
    var valueDeposit = Number(event.target[0].value)
    var valueWithdraw = Number(event.target[2].value)
    account.deposit(valueDeposit)
    account.withdraw(valueWithdraw)
    console.log(account.balance)
    $('#balance').text(account.balance);
    //Sends the form.
});
});
