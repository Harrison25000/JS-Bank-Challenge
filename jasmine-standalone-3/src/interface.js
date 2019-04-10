$(document).ready(function() {
  var account = new Account();
  $('#balance').text(account.balance);

console.log(document.getElementById('deposit'))
var deposit = document.getElementById('deposit')
console.log(deposit);

$('#form').on('submit', function(event) {
});


document.getElementById("formDeposit").addEventListener("submit", function(event){
    //Stops the form submitting.
    event.preventDefault();

    //Do the checks here.
    console.log(event)
    var valueDeposit = Number(event.target[0].value)
    account.deposit(valueDeposit)
    console.log(account.balance)
    $('#balance').text(account.balance);

    //Sends the form.

});

document.getElementById("formWithdraw").addEventListener("submit", function(event){
    //Stops the form submitting.
    event.preventDefault();

    //Do the checks here.
    console.log(event)
    var valueWithdraw = Number(event.target[0].value)
    account.withdraw(valueWithdraw)
    console.log(account.balance)
    $('#balance').text(account.balance);

    //Sends the form.

  });

 $('#button1').on('click', function(){

  var text = account.statement()
  console.log(text)
      $('#statement').html(text)
    });

});
