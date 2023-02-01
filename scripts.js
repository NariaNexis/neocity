window.onload = function() {
    const title = ["Hello Jon", "Funny Seeing You Here &#128065", "Worm Zone", ]
    const random = Math.floor(Math.random() * title.length);
    console.log (random)
   document.querySelector("h1").innerHTML = title[random]

   document.onmousemove = function(e){
    document.getElementById("babyWorm").style.left = e.pageX
    document.getElementById("babyWorm").style.top = e.pageY
   }
};