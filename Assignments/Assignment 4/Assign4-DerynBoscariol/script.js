// HTTP5122 Front-End Web Developmentb- Assignment 4 Registration Form - Deryn Boscariol

//Creating a function for when the window loads
window.onload = function(){

//Creating a handle to access form
var formHandle = document.forms.ixdForm;
//Accessing input elements from HTML
var firstName = formHandle.f__fName;
var lastName = formHandle.f__lName;
var humberId = formHandle.f__id;
var programName = formHandle.f__program;
var projectName = formHandle.f__project;

//Creating Regex for humber id
var validId = /^N\d{8}$/i;

//Creating a function to call when the form is submitted
function processForm(){

//Validating for empty inputs in name fields
    if (firstName.value === ""){
        firstName.style.background = "red";
        firstName.focus();
        return false;
    }

    else if (lastName.value === ""){
        lastName.style.background = "red";
        lastName.focus();
        return false;
    }

//Validating for regex
    else if (!validId.test(humberId.value)){
        humberId.style.background = "red";
        humberId.focus();
        return false;
    }
//Validating against default selection
    else if (programName.value === "X"){
        programName.style.background ="red";
        programName.focus();
        return false;
    }
//Validating against empty input in project name radio buttons
    else if (projectName.value === ""){
        document.getElementById("caption_project").style.background = "red";
        return false;
    }


//Accesing the span element from the submit message and filling it with the input values
    resultFirstName = document.getElementById("result__Fname");
    resultFirstName.innerHTML = firstName.value;
    resultLastName = document.getElementById("result__Lname");
    resultLastName.innerHTML = lastName.value;
    resultHumberId = document.getElementById("result__id");
    resultHumberId.innerHTML = humberId.value;


//Acccessing the full program name and overwriting it into the output message
    var programNameFull = programName.options[programName.selectedIndex].text;
    resultProgramName = document.getElementById("result__program");
    resultProgramName.innerHTML = programNameFull;


//Overwriting the project value into the output message
    resultProjectName = document.getElementById("result__project");
    resultProjectName.innerHTML = projectName.value;

//Displaying the submit message and hiding the form and header
    submitMessage = document.getElementById("result");
    submitMessage.style.display = "block";
    header1 = document.getElementById("welcome");
    header1.style.display = "none";
    formHandle.style.display = "none";
    return false;
}

//Creating listener for onsubmit event
formHandle.onsubmit = processForm;
};