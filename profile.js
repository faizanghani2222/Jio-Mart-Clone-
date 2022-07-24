let userdata=JSON.parse(localStorage.getItem("user"))||[]

let pname=document.querySelector("#pname");
pname.innerText=userdata.name
let pemail=document.querySelector("#pemail");
pemail.innerText=userdata.email;

function logoutf(){
    userdata=null;
    localStorage.setItem("user",JSON.stringify(userdata));
    window.location.href="index.html"
}
document.querySelector("#logout").addEventListener("click",logoutf)
