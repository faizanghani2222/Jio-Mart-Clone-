
let getData = async () => {
    let res = await fetch("https://jiomart-server.herokuapp.com/api/Allproduct");
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

    let gimage =document.createElement("img")
    gimage.src=el.image
    gimage.setAttribute("class","proimg")

    let des =document.createElement("p")
    des.innerText=el.name

    let sprice =document.createElement("p")
    sprice.innerText=el.strikeprice;

    let price =document.createElement("p")
    price.innerText=el.price;
    
    let btn = document.createElement("button")
    btn.innerText="Add to Cart"
    btn.setAttribute("id","cartbtn")
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
    box1.append(gimage,des,sprice,price,btn)
    appendbox.append(box1)


    })
  }
  export  {getData,append}