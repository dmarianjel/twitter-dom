 var sendButton = document.getElementById("btn");
    var texTarea = document.getElementById("comment");
    var timeLine = document.getElementById("timeLine");
    
    sendButton.onclick = function() {
        if (texTarea.value !== "") {

            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var paragraph = document.createElement("p");
                //paragraph.classlist.add("color");
            var text = document.createTextNode(texTarea.value);
            paragraph.appendChild(text);
            tuitDiv.appendChild(paragraph);
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.className = "tuit";
            nameSpan.textContent = "Daniela";
            dateSpan.textContent =  new Date();//moment().format('lll')//
          
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);

        /*}if (texTarea.value == "" && texTarea.value.length >20){
        btn.disabled= true;}*/
        }
     }   
    function contwords() {
    var max = "140";
    var text = document.getElementById("comment").value;
    var sendButton= document.getElementById("btn");
    var longitud= text.length;
     if(longitud <= max) {
          document.getElementById("contChar").value = max-longitud;
          btn.disabled= false;
     } else if (longitud > max){
          document.getElementById("comment").value = text.substr(0, max);
            btn.disabled= true;     
        }
        
     }

    var textarea = document.getElementById("comment");
    var heightLimit =120; /* Maximum height*/ 
    textarea.oninput = function() {
      textarea.style.height = ""; /* Reset the height*/
      textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
    }
































