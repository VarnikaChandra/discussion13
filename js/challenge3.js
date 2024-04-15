window.addEventListener("load",function(){//load event listener 
    //console.log("loaded the page");
    //let figcaptions=document.querySelectorAll('figcaption');
    //let secondfigcaption=figcaptions[1];
    //inner html: gives content as html with tags
    //.textContent only gives the actual text content without the html tags
    //console.log(document.querySelectorAll('figcaption'));//for all matching queries 
    alert(document.querySelectorAll('figcaption')[1].innerHTML);
});
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.thumbnail');

    images.forEach(function(img) {
        console.log("entered loop");
        img.addEventListener('mouseenter', function(){
            console.log(img.alt); // Better to log the alt text, which is actually useful
            img.setAttribute('title', img.alt);
        });

        img.addEventListener('mouseleave', function(){
            img.removeAttribute('title');
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
