let getData = async () => {
    let res = await fetch("https://jiomart-server.herokuapp.com/api/Allproduct");
    let data = await res.json();
   return data[0]
  }


  let append = (data)=>{
    let cartdata=JSON.parse(localStorage.getItem("cartdata"))||[]
    let appendbox=document.getElementById("groceriesappend")
    appendbox.innerHTML=""
    data.forEach((el)=>{
    let box1 =document.createElement("div") 
    box1.setAttribute("class","box1main")
    box1.addEventListener("click",()=>{
      fulldata(el)
      window.location.href="pdetail.html";
    })

    let box2 =document.createElement("div")
    box2.setAttribute("class","box2main")
   
    let box3 = document.createElement("div")
    box3.setAttribute("class","box3main")

    let box4 =document.createElement("div")
    box4.setAttribute("class","box4main")

    let gimage =document.createElement("img")
    gimage.src=el.image
    gimage.setAttribute("class","proimg")

    let des =document.createElement("p")
    des.innerText=el.name

    let sprice =document.createElement("strike")
    sprice.innerText=`M.R.P: ₹ ${el.strikeprice}.00`;

    let price =document.createElement("p")
    price.innerText=`₹ ${el.price}.00`;
    
    let btn = document.createElement("button")
    btn.innerText="Add to Cart"
    btn.setAttribute("class","buttonmain")
    btn.addEventListener("click",()=>{
      if(el.qty==undefined){
        el.qty=1
        cartdata.push(el);
      }else{
        el.qty++
        cartdata=cartdata.filter((elem)=>{
          return elem.name!==el.name
        })
        cartdata.push(el)
      }
      
      localStorage.setItem("cartdata",JSON.stringify(cartdata))
    })
    box1.append(gimage,box2,box3,box4)
    box2.append(des)
    box3.append(price,sprice)
    box4.append(btn)
    appendbox.append(box1)


    })
  }

  let fulldata= (el)=>{
    localStorage.setItem("onedata",JSON.stringify(el))
    return el
}
  export  {getData,append,fulldata}