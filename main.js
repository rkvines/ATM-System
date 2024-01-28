// Use Javascript

// User Information
let UserPIN = 2007;
let UserName = "Ritesh";
let UserBalance = 1000;

// All Sectiono Page Define Here
const FirstPage = document.getElementById("Welcoome-Page"),
    SecondPage = document.getElementById("Pin-Page"),
    ThirdPage = document.getElementById("Atm-Page");

// Proccess 
const StartBTN = document.getElementById("next-atm");
const PinCode = document.getElementById("user-pin");
const EnterValue = document.getElementById("Enter-Value");
const PinCheck = document.getElementById("PinCheck");

// Atm Page All Process Object Define Here
const CheckBalance = document.getElementById("Balance"),
    DepositeMoney = document.getElementById("DepositeMoney"),
    WithDrawMoney = document.getElementById("WithDrawMoney"),
    Logout = document.getElementById("Logout");

// Popup all Object Define Here
const Popup = document.getElementById("Popup");
const PopupResult = document.getElementById("popup-content-result");
const PopupCls = document.getElementById("popup-cls-btn");

// Pages Process Here
StartBTN.addEventListener("click", () => {
    SecondPage.style.display = "flex"
    FirstPage.style.display = "none"
})

PinCheck.addEventListener("click", () => {

    CheckingPin = parseFloat(PinCode.value)

    if (CheckingPin == UserPIN) {
        ThirdPage.style.display = "flex"
        SecondPage.style.display = "none"
    }
    else {
        Popup.style.transform = 'translate(0% , -65%)'

        PopupResult.innerHTML = "In-Correct PIN"
    }
})



// Popup Process

PopupCls.addEventListener("click", () => {
    Popup.style.transform = 'translate(-800% , 0%)'
})

DepositeMoney.addEventListener("click", () => {
    Popup.style.transform = 'translate(0% , -65%)'

    // Deposite Money
    const DepositeAMT = parseInt(prompt("Enter Amount"));

    PopupResult.innerHTML = `Your Deposite Is ${DepositeAMT} Add Successfully`

    UserBalance += DepositeAMT
    console.log(UserBalance)

})

WithDrawMoney.addEventListener("click", () => {
    Popup.style.transform = 'translate(0% , -65%)'

    // WithDraw Money
    const WithDrawAMT = parseInt(prompt("Enter Amount"));

    PopupResult.innerHTML = `Your Withdraw Is ${WithDrawAMT} Successfully`

    UserBalance -= WithDrawAMT

})

Logout.addEventListener("click", () => {

    // Logout Proccess 
    let LogoutPin = prompt("Enter Your PIN")

    if (LogoutPin == UserPIN) {
        FirstPage.style.display = "flex"
        ThirdPage.style.display = "none"
    }
    else {
        Popup.style.transform = 'translate(0% , -65%)'

        PopupResult.innerHTML = `${LogoutPin} Pin Is Incorrect for logout Current Account`
    }

})


CheckBalance.addEventListener("click", () => {
    Popup.style.transform = 'translate(0% , -65%)'

    // Check Balance
    PopupResult.innerHTML = `User Current Balance Is ${UserBalance}`;

})





