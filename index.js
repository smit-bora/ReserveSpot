function changeColor() {
    this.style.backgroundColor = "red";
    return false;
}
function eColor() {
    this.style.backgroundColor = "chartreuse";
    return false;
}
var i;
for(i=0;i<33;i++){
    document.querySelectorAll('.grid-item')[i].addEventListener('click', changeColor);
    document.querySelectorAll('.grid-item')[i].addEventListener('dblclick', eColor);

}

    document.getElementById("abc").addEventListener('click',function(){
        alert("your parking spot is been booked");
    })