var myEvent = document.getElementById("bio");

myEvent.addEventListener("click",function() {
 var myRequest = new XMLHttpRequest();
 myRequest.open("GET", "info.html", true)
 myRequest.onload = function() {
     var bio = JSON.parse(myRequest.responseText);
     console.log("bio")
 };

});



var classSocial = document.getElementById("classSocial");


var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
            var myRequest = new XMLHttpRequest();
            myRequest.open("GET", "https://www.linkedin.com/in/donna-campbell-b5001646/");
            myRequest.onload = function () {
                var repos = JSON.parse(myRequest.responseText);
             
            };
           
            myRequest.send();
        });


 btn2.addEventListener("click", function () {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open("GET", "https://api.github.com/users/dlcsoup51/repos");
        ourRequest.onload = function () {
            var profile = JSON.parse(ourRequest.responseText);
           
        };
          ourRequest.send();
    }

 );

 //first thing I opened this this morning I realized I had turned the url's around on the LinkedIn and 
 //Github buttons....