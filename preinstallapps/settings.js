//<button id="exitb" onclick="exit">Exit</button>

//<script>
//    function exit() {
//        document.getElementById("app").style = "";
//        document.removeChild("exitb")
//    };
//    document.getElementById("exitb").onclick = exit;
//    alert("hello");
//</script>


var div = document.createElement("div");


var button = document.createElement("button");
button.id = "exitb";
button.onclick = exit;
div.appendChild(button);

var script = document.createElement("script");
script.innerHTML('function exit() { \
            document.getElementById("app").style = ""; \
            document.removeChild("exitb") \
        }; \
        document.getElementById("exitb").onclick = exit; \
        alert("hello");"');
div.appendChild(script);

document.body.appendChild(div)