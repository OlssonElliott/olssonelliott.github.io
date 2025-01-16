const repos = document.getElementById("repos")


fetch("https://api.github.com/users/OlssonElliott/repos")
.then(res => res.json())
.then(data => {
    console.log("detta fick jag: " + JSON.stringify(data, null, 2));
    console.log(data);
    
    for (let i=0; i < data.length; i++){
        repos.insertAdjacentHTML("beforeend",
  `<div class="githubrepo">
     <a href="${data[i].html_url}" target="_blank">
       ${data[i].name}
     </a>
   </div>`)
    }
})
