
var nameerror = document.getElementById('name-error');
var phoneerror = document.getElementById('phone-error');
var emailerror = document.getElementById('email-error');
var messageerror = document.getElementById('message-error');
var submiterror = document.getElementById('submit-error');
 

function validateName(){
    // it will store the input field value
    var name = document.getElementById('contact-name').value;

    // Both is statemenet would be checked 
    if(name.length == 0){
        nameerror.innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        // if the entered data doesnot matches the pattern it will display the error message
        nameerror.innerHTML = 'write full name';
        return false;
    }

    // if there is nor wrror it will display success message
    nameerror.innerHTML = <i class="fa-solid fa-check-to-slot"></i>
    return true;
}





function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if (phone.length ==0 ){
        phoneerror.innerHTML = " phone No. is required"
        return false;
    }

    if (phone.length !== 10 ){
        phoneerror.innerHTML = " phone No. is should be 10 digit"
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML = "Phone No. is invalid"
        return false;
    }

    phoneerror.innerHTML = <i class="fa-solid fa-check-to-slot"></i>
    return true;
}




function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailerror.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailerror.innerHTML = "Email is invalid";
        return false;
    }

    emailerror.innerHTML = <i class="fa-solid fa-check-to-slot"></i>
    return true;
}







