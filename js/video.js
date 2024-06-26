var video; //variable video 

window.addEventListener("load", function() {
	console.log("Good job opening the window")//printing in console 
    //alert()-printing an alert
	video=document.querySelector("#player1");
	video.autoplay=false;
	console.log("autoplay off")
	video.loop=false;
	console.log("video looping off off")

});
document.querySelector("#play").addEventListener("click",function(){
	console.log("play");
	video.play(); //play command
	//update the volume class 
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%"; 
    //id videos innerHTML modify it by setting video.volume

});

document.querySelector("#pause").addEventListener("click",function(){
	console.log("pause");
	video.pause();
});

document.querySelector("#slower").addEventListener("click",function(){
	console.log("slower");
	//ten percent less everytime
	video.playbackRate*=0.9;
	console.log("new decreased speed is:", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("faster");
	video.playbackRate/=0.9;
	console.log("faster speed is:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip");
	if(video.currentTime+10>video.duration){
		video.currentTime=0;
	}else{
		video.currentTime+=10;
	}
	console.log("The current time of the video is:", video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted==false){//if mute is on
		console.log("mute");
		video.muted=true;
		document.querySelector("#mute").innerHTML="Unmute";//next time we click it will unmute
		
	}else if(video.muted==true || document.querySelector("#mute").innerHTML=="Unmute" ){
		console.log("unmuted");
		video.muted=false;
		document.querySelector("#mute").innerHTML="Mute";//next time we click it will mute
	}
	
});

document.querySelector("#slider").addEventListener("input", function(){
	console.log("sliderrr");
	video.volume=this.value/100;//slider
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("old school");
	video.classList.add("oldSchool");//add it

});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("original");
	video.classList.remove("oldSchool");

});
