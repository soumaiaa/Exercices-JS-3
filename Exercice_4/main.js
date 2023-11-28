let input1= document.querySelector('#password');
let input2=document.querySelector('#confirmPassword');
let butt=document.querySelector('button');
butt.addEventListener ('click',
function () {
if (input1.value==input2.value){
    input1.style.border ="3px solid green";
    input2.style.border="3px solid green";
}
else {
    input1.style.border = "3px solid red";
    input2.style.border = "3px solid red"; 
  
    }
});