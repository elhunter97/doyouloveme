function ok(){
    alert("Ok ok ok");
}
function sorry(){
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById("noBTN").style.left= x + 'px';
    document.getElementById("noBTN").style.top= y + 'px';
}