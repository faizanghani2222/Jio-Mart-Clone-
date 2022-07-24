import mynav from "./navbar.js"
document.querySelector("#mynav").innerHTML=mynav()

let userdata=JSON.parse(localStorage.getItem("user"))||[]

function fsearch(){
    event.preventDefault()
    let query=document.querySelector("#query").value
    if(query=="electronics"){
        window.location.href="electronics.html"
    }else if(query=="groceries"){
        window.location.href="groceries.html"
    }else if(query=="jewellery"){
        window.location.href="jewellery.html"
    }else if(query=="kitchen"){
        window.location.href="kitchen.html"
    }else if(query=="fashion"){
        window.location.href="fashion.html"
    }else if(query=="beauty"){
        window.location.href="beauty.html"
    }
}
document.querySelector("#search").addEventListener("submit",fsearch)


