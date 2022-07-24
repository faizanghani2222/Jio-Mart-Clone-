import footerf from "./footer.js"
document.querySelector("footer").innerHTML=footerf()
var el = JSON.parse(localStorage.getItem("onedata"))

let cartdata=JSON.parse(localStorage.getItem("cartdata"))||[];
let counts=localStorage.getItem("counts")||0;

let lastfun = (el)=>{
    let box =document.createElement("div")
    box.setAttribute("id","detailbox")
    
    let box3 = document.createElement("div")
    box3.setAttribute("class","box3main")

    let box5 = document.createElement("div")
    box5.setAttribute("class","box5main")
    let p3 =document.createElement("p")
    p3.innerText=el.stock;
    


    let box2 =document.createElement("div")
    let p2 =document.createElement("p")
    let discount = Number(el.strikeprice-el.price);
    p2.innerText=`You Save: ₹ ${discount} Inclusive of all taxes`
    p2.setAttribute("class","discount")

    let p1 =document.createElement("p")
    p1.innerText=el.name;
    let image =document.createElement("img")
    image.src=el.image
    image.setAttribute("class","imagedetail")
   

    let sprice =document.createElement("strike")
    sprice.innerText=`M.R.P: ₹ ${el.strikeprice}.00`;

    let price =document.createElement("p")
    price.innerText=`₹ ${el.price}.00`;
    
    document.querySelector("#detailpageimg").append(image)
    box.append(p1)
    box3.append(price,sprice)
    box2.append(p2)
    box5.append(p3)
    document.querySelector("#detailspageappenddiv").append(box,box3,box2,box5)
    }
    lastfun(el)


    document.querySelector("#pcart").addEventListener("click",()=>{
     
        if(el.qty==0){
         el.qty=1
         cartdata.push(el)
         counts++
         localStorage.setItem("counts",counts)
         location.reload()
        }else{
         alert("Item already added")
        }
         localStorage.setItem("cartdata",JSON.stringify(cartdata))
         localStorage.setItem("onedata",JSON.stringify(el))
    })