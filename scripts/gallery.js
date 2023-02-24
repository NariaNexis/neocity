window.onload = function () {

    fetch('./../test.json')
        .then((reponse) => reponse.json())
        .then((json) => {
            
            //   document.querySelector("#spotify").setAttribute("href", json.tracking_list.spotify)
            let gallery = json.gallery

            let i = 1
            gallery.forEach(displayImages)
            function displayImages() {
         
                console.log(i)
        
                if (i === 4) {
                    i = 1
                } else {
                    i++
                }
            }
            
         })

 };