var realtors = [
    ["Johnny Test", "Test123", 12345678],
    ["Johnny Bravo", "Bravo456", 87654321],
    ["Timmy Mdawg", "Crunch21", 11111111],
    ["Michael Vsauce", "Wow09", 22222222],
    ["Jordan Maron", "Blue22", 33333333],
    ["Zack Annis", "Scar11", 44444444]
];

var emailChBox = false;
var transactionType = "Schedule a showing";

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var pass = document.forms["myForm"]["pass"].value;
    var id = document.forms["myForm"]["id"].value;

    var cUpper = 0;
    var cLower = 0;
    var cNumber = 0;

    if (name == "") {
        alert("Name must be filled out.");
        return false;
    }

    if(emailChBox) {
        if( !(/\S+@\S+\.\S+/.test(email)) ) { // if regex check false
            alert("Improper email format.");
            return false;
        }
    }

    if(pass == "") {
        alert("Password required.");
        return false;
    }
    else if(pass.length > 8) {
        alert("Password too long.");
        return false;
    }
    else {
        for(i = 0; i < pass.length; i++)
        {
            if('A' <= pass[i] && pass[i] <= 'Z') // check if you have an uppercase
                cUpper++;
            if('a' <= pass[i] && pass[i] <= 'z') // check if you have a lowercase
                cLower++;
            if('0' <= pass[i] && pass[i] <= '9') // check if you have a numeric
                cNumber++;
        }
        if(cUpper == 0) {
            alert("Password must have at least 1 capital letter.");
            return false;
        }
        else if(cNumber == 0) {
            alert("Password must have at least 1 number.");
            return false;
        }
    }

    if(id.length < 8) {
        alert("ID too short, must be 8 digits.");
        return false;
    }
    else if(id.length > 8) {
        alert("ID too long, must be 8 digits.");
        return false;
    }

    verifyForm(name, pass, id)
}

function verifyForm(name, pass, id) {
    for(i = 0; i < realtors.length; i++) {
        if(realtors[i][0] == name && realtors[i][1] == pass && realtors[i][2] == id) {
            alert("Welcome!" + transactionType);
            return true;
        }
    }
    alert("Account not found.");
    return false;
}

function doChecked(checkboxElem) {
    emailChBox = checkboxElem.checked;
}

function doSelected(selectElem) {
    transactionType = selectElem.options[selectElem.selectedIndex].text;
}