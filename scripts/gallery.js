window.onload = function () {

    fetch('./../test.json')
        .then((reponse) => reponse.json())
        .then((json) => {
            
            let gallery = json.gallery

            //looping gallery images
            let i = 1
            gallery.forEach(displayImages)
            function displayImages(image) {
         
                let picture = 
                `<img
                    src="${image.path}"
                    style="width: 100%"
                    title="${image.title}"
                />`
                
                let column = document.getElementById("column" + i)
                column.innerHTML += picture
        
                if (i === 4) {
                    i = 1
                } else {
                    i++
                }
            }
            
         })

 };