

var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
var x        = document.getElementById('generate');
var y        = "How many characters would you like? Make sure the length is between 7 and 129?"





x.addEventListener('click',myfunction1);
x.addEventListener('click',myfunction2);
x.addEventListener('click',myfunction3);
x.addEventListener('click',myfunction4);
x.addEventListener('click',myfunction5);


function myfunction1(){
    var l = prompt(y);

    if (l > 7 && l < 129 ) {
    var U =   prompt('Would you like uppercase letters? Please enter 1 for yes or 0 for No!');
    
}
    else {
        alert ('Password length out of range!!!')
    }
}

function myfunction2(){
    
    {
        prompt("Would you like lower case letters? Please enter 1 for yes or 0 for No.");
    
}
}


function myfunction3 (){
    prompt("Would you like any special characters? Please enter 1 for Yes or 0 for No.")

}

function myfunction4(){
    prompt("Would you like any numbers? Please enter 1 for Yes or 0 for No.")
}


function myfunction5(){
    var password = "";
    for (i=10; i<10; i++) {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        var final = Math.floor(Math.random()*74);
        password += characters.charAt(random);
    }

    alert("Your password is " +' ' + password);
}





