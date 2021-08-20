$(document).keypress(function(event){
    $("h1").text(event.key);
});

// $(".add").on("click", function(){
//     $(".add").before("<h1> HI <h1/> <br>");
//     console.log($(".add"));
//     console.log(this);
// });

// $(".add").before("<h1> Oooo <h1/> <br>");

document.querySelector(".add").addEventListener("click", function(){
    console.log(this);
    console.log(document.querySelector(".add"));
})