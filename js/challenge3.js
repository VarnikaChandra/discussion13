window.addEventListener("load",function(){//load event listener 
    //console.log("loaded the page");
    //let figcaptions=document.querySelectorAll('figcaption');
    //let secondfigcaption=figcaptions[1];
    //inner html: gives content as html with tags
    //.textContent only gives the actual text content without the html tags
    //console.log(document.querySelectorAll('figcaption'));//for all matching queries 
    alert(document.querySelectorAll('figcaption')[1].innerHtml);
});
