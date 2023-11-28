let image =document.querySelector('img');
console.log(image);
image.addEventListener('mouseover' ,onHover);
function onHover() {
    image.style.border = "3px solid red";
}
image.addEventListener('mouseout' ,offHover);
function offHover(){
    image.style.border = "none";  
}
