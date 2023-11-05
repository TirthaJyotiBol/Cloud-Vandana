// Get the variables of the input fields

const f_name = document.getElementById('f-name');
const l_name = document.getElementById('l-name');
const email = document.getElementById('email');
const dob = document.getElementById('dob');
const country = document.getElementById('countries');
const profession = document.getElementById('profession-input');
const mobile = document.getElementById('mobile-input');
const resetButton = document.getElementById('reset-btn');
const submitButton = document.getElementById('submit');
const myForm = document.getElementById('form');


// The variables for the output to be visible

const nameOutput = document.getElementById('name-op');
const lnameOp = document.getElementById('l-name-op');
const emailOp = document.getElementById('email-op');
const countryOp = document.getElementById('Country-op');
const genderOp = document.getElementById('Gender-op');
const mobileOp = document.getElementById('Mobile-op');
const professionOp = document.getElementById('profession-op');




// Form Validation
myForm.addEventListener('submit',(e)=>{

    // Prevention from submission
    e.preventDefault();
    
    /*
        - check condion credentials 
        - if credential match then only check for the next credential
        - if the current credential doesnot match or follow up then return from there only
    */

    if(f_name.value.length<4 || f_name.value==null)
    {
        checkName();
        return;
    }

    if(l_name.value==null || l_name.value.length<3){
        checkSurName();
        return;
    }


    if(!checkEmail(email.value)){
        document.getElementById('email-error')
        .innerText="invalid email";
            return;
    }

    if(!dob.value){
        checkDOB();
       return;
    }

    if(country.value === "" || !country.value)
    {   checkCountry();
        return;
    }
    
    if(!atLeastOneCheckboxIsChecked()){
        document.getElementById('gender-error')
        .innerText = 'Choose Gender';
        return;
    }


    if(profession.value==null || profession.value.length<3){
        checkProfession();
        return;
    }

    if(mobile.value == null || mobile.value.length!=10){
        checkMobile();
        return;
    }
    

    // seperate Function created for displaying the data of the form
    displayForm();

});


// reset button of the form
resetButton.addEventListener('click',(e)=>{
    myForm.reset();
    window.location.href="index.html";
});




//  Functions to check the credentiality 
// These are the helper functions that are used in the form submission event
function checkName(){
    document.getElementById('name-error')
    .innerText="First name should have a minimum of 4 chatacters";
}

function checkSurName(){
    document.getElementById('l-name-error')
    .innerText="Last name should have a minimum of 3 chatacters";
}

function checkEmail(gmail)
{
    if(gmail.length<10) return false;
    if(!gmail.includes('@') || !gmail.includes('.')) return false;
    return true;
}


function checkDOB(){
    document.getElementById('dob-error')
    .innerText="You need to choose Date of Birth";
        
}

function checkCountry(){
    document.getElementById('country-error')
    .innerText="You need to choose Country";
           
}

function checkProfession(){
    document.getElementById('profession-error')
    .innerText="Profession should be entered";
}

function checkMobile(){
    document.getElementById('mobile-error')
    .innerText="Mobile Number should be of 10 digit";
}


function atLeastOneCheckboxIsChecked(){
    const checkboxes = Array.from(document.querySelectorAll('.checkbox'));
    return checkboxes.reduce((acc, curr) => acc || curr.checked, false);
}



function displayForm()
{
    document.getElementById('popup').style.display = 'block';
    nameOutput.innerText ="First Name : "+ f_name.value;
    lnameOp.innerText ="Last Name : "+ l_name.value;
    emailOp.innerText ="Email : "+ email.value;
    countryOp.innerText ="Country : "+ country.value;
    mobileOp.innerText ="Mobile : "+ mobile.value;
    professionOp.innerText = "Profession : "+profession.value;


    const selectedCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
            const selectedValues = [];

            selectedCheckboxes.forEach(function(checkbox) {
                selectedValues.push(checkbox.value);
            });

    genderOp.textContent = 'Gender : ' + selectedValues.join(', ');
}


//  reset the form 
// since the button is created outside the form thus, form.reset() being used
function reset(){
    myForm.reset();
    document.getElementById('popup').style.display = 'none';
    window.location.href="index.html";
}
