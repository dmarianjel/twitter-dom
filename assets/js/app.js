    var sendButton = document.getElementById("comment");
    var inputTuit = document.getElementById("btn");
    var timeLine = document.getElementById("timeLine");
    
    inputTuit.onclick = function() {
        if (sendButton.value == "") {
            alert("debe ingresar comentario");
        } else {
            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var tuitP = document.createElement("p");
            var text = document.createTextNode(sendButton.value);
            tuitP.appendChild(text);
            tuitDiv.appendChild(tuitP);
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.className = "tuit";
            nameSpan.textContent = "Daniela";
            dateSpan.textContent = new Date();
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    };                                   
var textarea = document.getElementById('comment');
var heightLimit = 300; /* Maximum height*/ 
textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};
/*var maxChar= document.createElement("chartext").value;


function contChar(e){

}
var textarea = document.getElementById('comment');
textarea.addEventListener('keyup', function (e) {
    var characters = textarea.value.length;
    
});

var */



























