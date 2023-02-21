window.onload = function () {

   fetch('./test.json')
      .then((reponse) => reponse.json())
      .then((json) =>

         document.querySelector("#spotify").setAttribute("href", json.tracking_list.spotify)
      )
};