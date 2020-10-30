
$(function(){
    $("#header .btn-container").click(function(){
        $('#header nav').toggleClass("show");
    });
});



// for responsive btn
function myFunction(x) {
    x.classList.toggle("change");
    console.log(this);
  }