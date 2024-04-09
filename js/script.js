let colorPicker=document.querySelector('#primary-picker');

colorPicker.addEventListener("change", function(addEventListener){
    console.log(event.target.value);
    let color=event.target.value;
    let body= document.querySelector('body');
    body.style.backgroundColor=color;
});



// Create a func to print this
function printThisKeyword() {
    console.log("This value: ");
    console.log(this);
 }
 
 // Get reference to the button
 let button = 
 document.getElementById('button');
 // Add that func as the handler
 button.addEventListener("click", printThisKeyword);
 document.querySelector('#button2').addEventListener("click")
 // Call the func as standalone
 printThisKeyword();
