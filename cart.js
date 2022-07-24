// import {cartbodydata} from "./faizan.js"
let data=JSON.parse(localStorage.getItem("cartdata"))||[];
let counts=localStorage.getItem("counts");
let cartbody=document.querySelector("#cartbody")

window.onload = (event) => {
    
    if(data.length==0){
        cartbody.innerHTML=`<div style="width:30%;margin:auto">
        <img width="100%" style="display:block;margin-top:30" src="https://www.jiomart.com/msassets/images/emptycart.svg" alt="">
        <h2 style="text-align:center;padding-left:20px">Your Cart is empty!</h2>
       </div>`
    }
    else{
        // cartbody.innerHTML=cartbodydata()
        let numitems=document.querySelector("#numitems")
        let itemt=document.querySelector("#itemt")
        let nsum=0;
        let isum=0;
        let cdis=0;
        let cappend=document.querySelector("#cappend")

        data.forEach((el)=>{
            nsum=nsum+(el.strikeprice*el.qty);
            isum=isum+(el.price*el.qty)
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
            let cartbtn=document.createElement("div");
            cartbtn.setAttribute("id","cartbtn")
            let minusbtn=document.createElement("button");
            minusbtn.setAttribute("id","minus")
            minusbtn.innerHTML=`<i class="fa-solid fa-minus"></i>`
            let iqty=document.createElement("span")
            iqty.setAttribute("id","qty");
            iqty.innerText=el.qty
            let plusbtn=document.createElement("button");
            plusbtn.setAttribute("id","plus")
            plusbtn.innerHTML=`<i class="fa-solid fa-plus"></i>`
            cartbtn.append(minusbtn,iqty,plusbtn)
           
            minusbtn.addEventListener("click",cminus)
            function cminus(){
                if(el.qty>1){
                el.qty--
                localStorage.setItem("cartdata",JSON.stringify(data))
                window.location.reload()
                }else{
                 data=data.filter((elem)=>{
                    return elem.name!=el.name
                 })
                 counts--
                 localStorage.setItem("counts",counts)
                 localStorage.setItem("cartdata",JSON.stringify(data))
                 window.location.reload()
                }
            }
            plusbtn.addEventListener("click",cplus)
            function cplus(){
                el.qty++;
                localStorage.setItem("cartdata",JSON.stringify(data))
                window.location.reload();
            }
            cbody.append(name,cprice,ex,cartbtn);
            cartc.append(img,cbody)
            cappend.append(cartc)
        })
        numitems.innerText=`(Total Items: ${counts})`
        let qcount=document.querySelector("#qcount")
        qcount.innerText=counts
        itemt.innerText=isum;
        let code=document.querySelector("#coup");
        let couponbtn= document.querySelector("#couponbtn")
        let coupdis= document.querySelector("#coupdis")
        function applied(){
            if(code.value="MASAI" && isum>399){
                isum=isum-100
                localStorage.setItem("carttotal",isum)
                cdis=100
                localStorage.setItem("coupondis",cdis)
                document.querySelector("#carttotal").innerText=isum;
                couponbtn.innerText="Applied"
                couponbtn.style.color="green";
                coupdis.innerText=100
            }
            code.value=""
        }
        
        couponbtn.addEventListener("click",applied)
        document.querySelector("#tprice").innerText=nsum
        document.querySelector("#carttotal").innerText=isum
        document.querySelector("#distotal").innerText=nsum-isum
        let placehref=document.querySelector("#placehref");
        localStorage.setItem("carttotal",isum)
        let userdata=JSON.parse(localStorage.getItem("user"))||[]
        if(userdata==null || userdata.length==0){
            placehref.href="signup.html"
        }else{
            placehref.href="order.html"
        }
    }   
  };