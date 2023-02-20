window.onload = function() {
    const title = ["Hello Jon", "Funny Seeing You Here &#128065", "Worm Zone", ]
    const random = Math.floor(Math.random() * title.length);
   document.querySelector("h1").innerHTML = title[random]
};