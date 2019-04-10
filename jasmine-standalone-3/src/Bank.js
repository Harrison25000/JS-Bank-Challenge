function Account(){
  this.balance = 0
  this.time = []
  this.statements = null
};

Account.prototype.deposit = function(integer) {
if(isNaN(integer))
{throw "not a dollar"}
else {
  this.balance += integer
  var today = new Date();
  date = today.getDate().toString() + '.' + today.getMonth().toString() + '.' + today.getFullYear().toString()
  this.time.push([date, 'deposited:', integer, 'balance:', this.balance])
     }
};

Account.prototype.withdraw = function(integer) {
  if(isNaN(integer))
  {throw "not a dollar"}
  else if(integer>this.balance)
  {throw "not enough dollar"}
  else {
    this.balance -= integer
    var today = new Date();
    date = today.getDate().toString() + '.' + today.getMonth().toString() + '.' + today.getFullYear().toString()
    this.time.push([date, 'withdrawn:', integer, 'balance:', this.balance])
  }
};

Account.prototype.statement = function(){
  statement = []
  var i;
  for (i = 0; i < this.time.length; i++) {
    statement.push(this.time[i].join(' - ') + ("   |:|"));
  }
  return statement.join("<br />")
};
