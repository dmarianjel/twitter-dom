 var sendButton = document.getElementById("btn");
    var texTarea = document.getElementById("comment");
    var timeLine = document.getElementById("timeLine");
    
    sendButton.onclick = function() {
        if (texTarea.value !== "") {

            var tuitDiv = document.createElement("div");
            var nameSpan = document.createElement("span");
            var dateSpan = document.createElement("span");
            var paragraph = document.createElement("p");
            var text = document.createTextNode(texTarea.value);
            paragraph.appendChild(text);
            tuitDiv.appendChild(paragraph);
            tuitDiv.appendChild(nameSpan);
            tuitDiv.appendChild(dateSpan);
            tuitDiv.setAttribute = ("id", "tuit");
            nameSpan.textContent = "Daniela";
            dateSpan.textContent =  new Date();//moment().format('lll')//
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































