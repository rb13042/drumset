let e = document.getElementsByClassName("drum");
console.log(e);

let x=function handleclick(){

    var audio;
    var btninnerhtml= this.innerHTML

    
       switch(btninnerhtml)
       {
           case "w": audio = new Audio("./sounds/crash.mp3");
                    audio.play();
                    break;
           case "a": audio = new Audio("./sounds/kick-bass.mp3");
                    audio.play();
                    break;
           case "s": audio = new Audio("./sounds/snare.mp3");
                    audio.play();
                    break;
           case "d": audio = new Audio("./sounds/tom-1.mp3");
                    audio.play();
                    break;
           case "j": audio = new Audio("./sounds/tom-2.mp3");
                     audio.play();
                    break;
           case "k": audio = new Audio("./sounds/tom-3.mp3");
                     audio.play();
                    break;
           case "l":audio = new Audio("./sounds/tom-4.mp3");
                    audio.play();
                    break;
            
        }
        buttonanimation(btninnerhtml);

}

Array.from(e).forEach((t)=>{

    t.addEventListener('click',x);
    console.log(t);
})

//adding keyboard event listener
document.addEventListener("keydown",function(e){

   
   console.log(e.key ); // the event object


   switch(e.key)
   {
    case "w": audio = new Audio("./sounds/crash.mp3");
             audio.play();
              break;
    case "a": audio = new Audio("./sounds/kick-bass.mp3");
          audio.play();
          break;
    case "s": audio = new Audio("./sounds/snare.mp3");
        audio.play();
         break;
    case "d": audio = new Audio("./sounds/tom-1.mp3");
         audio.play();
         break;
    case "j": audio = new Audio("./sounds/tom-2.mp3");
         audio.play();
         break;
    case "k": audio = new Audio("./sounds/tom-3.mp3");
         audio.play();
         break;
    case "l":audio = new Audio("./sounds/tom-4.mp3");
         audio.play();
         break;
   }

   buttonanimation(e.key);
})

function buttonanimation(currentkey){
   
   var activebutton = document.querySelector("."+currentkey);
   activebutton.classList.add("pressed");
   setTimeout(function(){
    activebutton.classList.remove("pressed")
   },100);

}


