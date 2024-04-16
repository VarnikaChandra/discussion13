window.addEventListener("load",function(){//load event listener 
    //console.log("loaded the page");
    //let figcaptions=document.querySelectorAll('figcaption');
    //let secondfigcaption=figcaptions[1];
    //inner html: gives content as html with tags
    //.textContent only gives the actual text content without the html tags
    //console.log(document.querySelectorAll('figcaption'));//for all matching queries 
    alert(document.querySelectorAll('figcaption')[1].innerHTML);
});
document.addEventListener("DOMContentLoaded", function() {//dom load
    let images = document.querySelectorAll('.thumbnail');//html class thumbnail
    let display = document.getElementById('display');//find an id that matches

    images.forEach(function(image) {//loop through the images variable which is those with .thumbnail
        image.addEventListener('mouseenter', function() {
            display.style.backgroundImage = `url('${image.src}')`;//set the displays background image as hovered image
            display.textContent = image.alt;//set the text of it to the alt image text
            display.style.color = '#FFFFFF'; // Ensure the text color is white
            display.style.fontSize = '150%'; // Increase font size for visibility
            display.style.justifyContent = 'center'; // Center the text horizontally
            display.style.alignItems = 'center'; // Center the text vertically
            display.style.display = 'flex'; // Use flexbox for centering text
            display.style.backgroundSize = 'cover'; // Cover the entire area of display
        });

        image.addEventListener('mouseleave', function() {
            display.style.backgroundImage = 'none';
            display.textContent = 'Hover over an image below to display the image and the alt text.';
            display.style.color = '#FFFFFF'; 
        });
    });
});

//https://www.w3schools.com/jsref/dom_obj_event.asp
//variable:
// 
//let var_name=document.querySelector("h1");
//var_name.innerHTML="blah";
//var_name.style.color="blue"; 

//function name(parameters){
 //   return da da da
//}
//window: tab read screen size, create new window, close windows using window object
//document: current loaded HTML document. 
//can also do window.document
//event listners for HTML elements: 
//document.querySelector("element").addEventListener("event type", function){
    
//}
//event types: mouse click, keystroke, time out, submitting forms
//default this will print window 
//in a event listener: this means the element triggered by it.
