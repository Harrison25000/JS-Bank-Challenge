'use strict';

describe ('Feature Test:', function() {
var account;

beforeEach(function () {
   account = new Account();
});

it('account exists', function(){
expect(account.balance).toEqual(0);
});

it('adds dollar to balance', function (){
  account.deposit(200)
  expect(account.balance).toEqual(200)
});

it('returns error if depositing not a number', function (){
  expect(() => {account.deposit("bob")}).toThrow("not a dollar");
});

it('able to withdraw from balance',function(){
  account.deposit(200)
  account.withdraw(50)
  expect(account.balance).toEqual(150)
});

it('throws error if withdrawing more than in balance', function(){
  account.deposit(200)
  expect(() => {account.withdraw(201)}).toThrow("not enough dollar");
});

it('stores current date in array', function() {
  var today = new Date();
  account.deposit(200)
  expect(account.time[0]).toContain(today.getDate().toString() + '.' + today.getMonth().toString() + '.' + today.getFullYear().toString())
});

it('returns statement with date, transaction, money, balance', function(){
  var today = new Date();
  account.deposit(200)
  account.withdraw(50)
  expect(account.statement()).toContain(today.getDate().toString() + '.' + today.getMonth().toString() + '.' + today.getFullYear().toString())

});

});
