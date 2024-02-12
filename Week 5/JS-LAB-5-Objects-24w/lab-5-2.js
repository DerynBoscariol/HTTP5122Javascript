//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var bankCustomer = {
//2. Add the required properties to your object.    
    lastName: "Boscariol",
    branchNumber: 6352,
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts: false,
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
    makeDeposit: function(amountIn){
        bankCustomer.accountBalance = bankCustomer.accountBalance + amountIn;
        return ("Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2));
    },
//4. Add your second method and test it.    
    makeWithdrawal: function(amountOut){
        bankCustomer.accountBalance = bankCustomer.accountBalance - amountOut;
        return ("Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2));
    },
//Stretch Goal
    addInterest: function(){
            if (bankCustomer.multipleAccounts === true){
                bankCustomer.accountBalance = bankCustomer.accountBalance * (bankCustomer.interestRate + 0.005);
            } else {
                bankCustomer.accountBalance = bankCustomer.accountBalance * bankCustomer.interestRate;
            }

            return ("Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2));
    } 

    }  


//Testing
//console.log(bankCustomer.makeDeposit(100));
//bankCustomer.makeWithdrawal(100);
//console.log(bankCustomer);

//5. Create the required output to complete steps 6-10 of the lab.

console.log(bankCustomer.accountBalance);
console.log(bankCustomer.makeDeposit(200));
console.log(bankCustomer.makeWithdrawal(75));
console.log(bankCustomer.addInterest());


//6. Once everything is working, tackle the Stretch Goal!


 /*       if (extraInterest = true){
            adaptedInterestRate = bankCustomer.interestRate + 0.005;
            bankCustomer.accountBalance = bankCustomer.accountBalance * adaptedInterestRate;
            return ("Thank you, your current balance is now $" + bankCustomer.accountBalance.toFixed(2));
        } else {
            bankCustomer.addInterest();
        } */