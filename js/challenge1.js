document.addEventListener("DOMContentLoaded", function() {//start with loading using domcontentloaded
    let toggleCheckbox = document.getElementById('toggle');//let variable find the element with the id toggle
    //toggle is the check box 
    let emailInputBox = document.getElementById('emailBox');//let variable email find the element with the id toggle
    //email box is the box to enter the email address 
    toggleCheckbox.addEventListener('change', function(){ //on change when something is modified 
        if (this.checked){ //if this is checked then you want to remove this variable from 
            //then the email box is removed from the list if it is hidden 
            //then remove the hidden css that hides it
            emailInputBox.classList.remove('hidden');//it removes the class list of hidden 
        } else {
            //if it is not checked then add the hidden css to hide it
            emailInputBox.classList.add('hidden');    
        }
    });
});
//classList allows you to add remove and toggle css classes onto an element. 
