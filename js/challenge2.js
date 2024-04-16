document.addEventListener('DOMContentLoaded',function(){ //load the content 
    let fill=document.querySelector('#billing'); //find the id with #
    //find a class with .
    let home=document.querySelector('#home');//or use getElementID
    let box=document.querySelector('input[name="useBilling"]');//the input where name is useBilling
    box.addEventListener('change',function(){//change 
        if(this.checked){//if the box so that input where this is checked
            home.value=fill.value;//fill the value of home with the billing one 
            home.disabled=true;//true then you can disable the input for home since its the same
        }else{
            home.value='';//othwerisw its empty
            home.disabled=false; //otherwise allow it. 
        }
    });
});
