function loadPage(page){

    fetch("pages/" + page)

    .then(response => response.text())

    .then(data=>{

        document.getElementById("content").innerHTML=data;

    })

    .catch(()=>{

        document.getElementById("content").innerHTML=
        "<h2>Page Not Found</h2>";

    });

}

window.onload=function(){

    loadPage("dashboard.html");

}