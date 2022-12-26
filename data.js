
let getData = async () => {
    let res = await fetch("https://nice-plum-wasp-boot.cyclic.app/api/Allproduct");
    let data = await res.json();
   return data[0]
  }
  

  let append = (data)=>{
    let cartdata=JSON.parse(localStorage.getItem("cartdata"))||[];
    let counts=localStorage.getItem("counts")||0;
    let appendbox=document.getElementById("groceriesappend")
    appendbox.innerHTML=""
    data.forEach((el)=>{
      let fl=true;
      cartdata.forEach((elem)=>{
        if(el.name==elem.name){
          el.qty=1
          fl=false
        }
      })
      if(fl==true){
        el.qty=0
    }
    let box1 =document.createElement("div") 
    box1.setAttribute("class","box1main")

    let box2 =document.createElement("div")
    box2.setAttribute("class","box2main")
   
    let box3 = document.createElement("div")
    box3.setAttribute("class","box3main")

    let box4 =document.createElement("div")
    box4.setAttribute("class","box4main")


    let gimage =document.createElement("img")
    gimage.src=el.image
    gimage.setAttribute("class","proimg")
    gimage.addEventListener("click",()=>{
      fulldata(el)
      window.location.href="pdetail.html";
    })

    let des =document.createElement("p")
    des.innerText=el.name

    let sprice =document.createElement("strike")
    sprice.innerText=`M.R.P: ₹ ${el.strikeprice}.00`;

    let price =document.createElement("p")
    price.innerText=`₹ ${el.price}.00`;
    let btn = document.createElement("button")
    btn.innerText="Add to Cart"
    // btn.setAttribute("id","cartbtn")
    btn.setAttribute("class","buttonmain")
    btn.addEventListener("click",()=>{
     
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
    })

    box1.append(gimage,box2,box3,box4)
    box2.append(des)
    box3.append(price,sprice)
    box4.append(btn)
    appendbox.append(box1)


    // box1.append(gimage,des,sprice,price,btn)
    // appendbox.append(box1)


    })
  }
  let fulldata= (el)=>{
    localStorage.setItem("onedata",JSON.stringify(el))
    return el
}
  export  {getData,append,fulldata}