const repos = document.getElementById("repos")
const info1 = document.getElementById("info1")

fetch("https://api.github.com/users/OlssonElliott/repos")
.then(res => res.json())
.then(data => {
    for (let i=0; i < data.length; i++){
        repos.insertAdjacentHTML("beforeend",
  `<div class="githubrepo">
     <a href="${data[i].html_url}" target="_blank">
       ${data[i].name}
     </a>
   </div>`)
    }
});

fetch("info.json")
  .then(res => res.json())
  .then(data => {
    const parts = Object.keys(data);  

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const textInnehåll = data[part][0]; 

      info1.insertAdjacentHTML(
        "beforeend",
        `<div class="brödtext1">
           <p>${textInnehåll}</p>
         </div>`
      );

      // Om det inte är sista elementet, bryt rad
      if (i < parts.length - 1) {
        info1.insertAdjacentHTML("beforeend", "<br>");
      }
    }
  });