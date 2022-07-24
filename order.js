let data=JSON.parse(localStorage.getItem("cartdata"))||[];
let numitems=document.querySelector("#numitems")
let itemt=document.querySelector("#itemt")
let nsum=0;
let isum=localStorage.getItem("carttotal");
let cdis=localStorage.getItem("coupondis")||"00";
let cappend=document.querySelector("#cappend")

data.forEach((el)=>{
    nsum=nsum+(el.strikeprice*el.qty);
    itemt.innerText= isum;
    let cartc=document.createElement("div");
    cartc.setAttribute("id","cartc")
    let img =document.createElement("img");
    img.src=el.image;
    let cbody=document.createElement("div");
    cbody.setAttribute("id","cbody")
    let name=document.createElement("h4");
    name.innerText=el.name;
    let cprice=document.createElement("p");
    cprice.innerHTML=`&#8377;<span id="price">${el.price}</span> <span id="sprice">&#8377;${el.strikeprice}</span>`
    let ex=document.createElement("p");
    ex.innerText="Sold By Reliance Retail";
    let q=document.createElement("p");
    q.setAttribute("id","gr")
    ex.innerText=`qty: ${el.qty}`;
    cbody.append(name,cprice,ex,q);
    cartc.append(img,cbody)
    cappend.append(cartc)
})
document.querySelector("#tprice").innerText=nsum
document.querySelector("#carttotal").innerText=isum
document.querySelector("#distotal").innerText=nsum-isum
document.querySelector("#coupdis").innerText=cdis
localStorage.setItem("coupondis","00")

document.querySelector("#place").addEventListener("click",()=>{
    window.location.href="checkout.html"
})