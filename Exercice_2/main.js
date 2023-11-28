

 let anch1 = document.querySelector('#anc1');
anch1.addEventListener ('click',
function () {
    document.getElementById("text").style.visibility = "visible"; 
  }
 ) ;
 let anch2 = document.querySelector('#anc2');
anch2.addEventListener ('click',
function() {
    document.getElementById("text").style.visibility = "hidden";
  }
 ) ;