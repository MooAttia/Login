var email = document.querySelector(".emailInput");
var password = document.querySelector(".passInput");
var userName = document.querySelector(".nameInput");
var loginBtn = document.querySelector(".logBtn");
var signBtn = document.querySelector(".signBtn");
var signInText = document.querySelector(".signUpText");
var loginText = document.querySelector(".logInText");
var signUp = document.querySelector(".signUp");
var signIn = document.querySelector(".logIn");
var alert = document.querySelector(".alert");
var error = document.querySelector(".error");
var nav = document.querySelector(".navbar");
var messagePage = document.querySelector(".message");
var logPage = document.querySelector(".logPage");
var logOutBtn = document.querySelector(".logOutBtn");
var emailvalid = document.querySelector(".emailValid");

var userList = [];
if(localStorage.getItem("userList") !== null)
{
    userList = JSON.parse( localStorage.getItem("userList") );
    console.log(userList);
}
function createAccount(){
    var user = {
        name : userName.value,
        email : email.value,
        password : password.value
    }
    var nameRegex = /^[\d|\w]{3,10}$/g;
    var emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    var passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$/;
    if (emailRegex.test(user.email) && passRegex.test(user.password) && nameRegex.test(user.name) == true){
        
        userList.push(user);
        localStorage.setItem("userList", JSON.stringify(userList));
        // console.log(localStorage);
        alert.classList.remove("d-none");
        clearForm();
    }
    else{
        error.classList.remove("d-none");
    }
}

function logIn() {
    
    for(var i = 0 ; i < userList.length ; i++)
    {
        if(userList[i].email === email.value )
        {
            if(userList[i].password === password.value)
            {
                logPage.classList.add("d-none");
                nav.classList.remove("d-none");
                messagePage.classList.remove("d-none");
                document.getElementById("demo").innerHTML ="Welcome " + userList[i].name;
                logOutBtn.addEventListener("click", function(){
                    logOut();
                    clearForm();
                })
            }
        }
        else
        {
            error.classList.remove("d-none");
        }
    }
}

function emailValidation(){
    for(var i = 0 ; i < userList.length ; i++)
    {
        if(userList[i].email === email.value)
        {
            emailvalid.classList.remove("d-none");
            alert.classList.add("d-none");
        }
    }
}
function logOut(){
    nav.classList.add("d-none");
    messagePage.classList.add("d-none");
    logPage.classList.remove("d-none");
    error.classList.add("d-none");
}


function clearForm(){
    userName.value = null;
    email.value = null;
    password.value = null;
}

signBtn.addEventListener("click" , function(){
    createAccount();
})


loginBtn.addEventListener("click" , function(){
    logIn();
})  

signUp.addEventListener("click" , function(e){
    displaySignUp();
    
})
signIn.addEventListener("click" , function(e){
    displayLogIn();
})

function displaySignUp(){
    userName.classList.remove("d-none");
    loginBtn.classList.add("d-none");
    signBtn.classList.remove("d-none");
    loginText.classList.add("d-none");
    signInText.classList.remove("d-none");
}
function displayLogIn() {
    userName.classList.add("d-none");
    loginBtn.classList.remove("d-none");
    signBtn.classList.add("d-none");
    loginText.classList.remove("d-none");
    signInText.classList.add("d-none");
}
