
    var i= 1;
    var n= 2;
    var y=3;
document.querySelector('button').onclick = function() {
    var userInput = document.getElementById('userText').value;
    if  (document.getElementById('userText').value == "") {
        document.getElementById('error').innerText = "You must enter a task";
    } else {
        document.getElementById('todoList').innerHTML += '<li id="' + i + '">' + document.getElementById('userText').value + '</li><button type="button" id ="' + n + '" onClick="donef(' + i + ', ' + n + ', ' + y + ');">DONE</button><button type="button" id ="' + y + '" onClick="deletef(' + i + ', ' + n + ', ' + y + ');">DELETE</button>';
        document.getElementById('error').innerText = "";
        i += 3;
        n += 3;
        y += 3;
        document.getElementById('userText').value = "";
    }
}
function donef(a, b, c) {  
    var elemDone = document.getElementById(a).textContent;
    document.getElementById('done').innerHTML += '<li>' + elemDone + '</li>';
    document.getElementById('todoList').removeChild(document.getElementById(a));
    document.getElementById('todoList').removeChild(document.getElementById(b));
    document.getElementById('todoList').removeChild(document.getElementById(c));
}
function deletef(a, b, c) {
    document.getElementById('todoList').removeChild(document.getElementById(a));
    document.getElementById('todoList').removeChild(document.getElementById(b));
    document.getElementById('todoList').removeChild(document.getElementById(c));
}