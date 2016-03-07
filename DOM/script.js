window.onload = function() {
    // DOM - objective 1
    var btn = document.createElement('button');
    btn.textContent = "Hello world";
    btn.onclick = function() {
        alert("Hello world!");
    }
    document.getElementById("o1").appendChild(btn);
    
    // DOM - objective 2
    document.querySelector('#o2 button').onclick = function() {
        alert(document.querySelector('#o2 input').value);
    }
}
