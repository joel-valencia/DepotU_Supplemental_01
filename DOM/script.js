window.onload = function() {
    var btn = document.createElement('button');
    btn.id = "button1";
    btn.textContent = "Hello world";
    btn.onclick = function() {
        alert("Hello world!");
    }
    document.getElementById("objective1").appendChild(btn);
}
