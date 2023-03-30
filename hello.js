function sleep(waitSec, callbackFunc) {
 
  var spanedSec = 0;
 
  var waitFunc = function () {
 
      spanedSec++;
 
      if (spanedSec >= waitSec) {
          if (callbackFunc) callbackFunc();
          return;
      }
 
      clearTimeout(id);
      id = setTimeout(waitFunc, 1000);
  
  };
 
  var id = setTimeout(waitFunc, 1000);
 
}


sc_canvas = document.getElementsByClassName("sc-canvas");   body = document.body;    for(let i = 0; i < sc_canvas.length; i++){     sc_canvas[i].style.display = "none";   };
div = document.createElement("div"); div.style = "background-color: #fff; width: 1920px; height: 1080px;"; div.id = "div"; document.body.appendChild(div);
titlediv = document.createElement("div"); titlediv.style = "background-color: orange; width: auto; height: auto;"; titlediv.id = "titlediv";loaddiv = document.getElementById('div'); div.appendChild(titlediv);
h1 = document.createElement("h1"); h1.id = "h1"; h1.innerHTML = "こんにちは"; h1.style = "color: black"; loadtitlediv = document.getElementById('titlediv'); div.appendChild(h1)

sleep(5, function(){
  removediv = document.getElementById('div');
removediv.remove()

scripts = document.getElementsByClassName("sc-canvas");
for(let i = 0; i < scripts.length; i++){
  scripts[i].style.display = "";
};
})

