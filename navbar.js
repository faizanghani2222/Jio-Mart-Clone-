let mynav=()=>{
    let qcounts=localStorage.getItem("counts")||0
    let username=JSON.parse(localStorage.getItem("user"))||null;
    let navname,link
    if(username==null){
        navname="Signup";
        link="signup.html"
    }else{
        navname=username.name;
        link="profile.html"
    }
    let qid
    if(qcounts<1){
        qid="none"
    }else{
        qid="qcount"
    }
    return ` <div class="ss">
    <label>
        <input type="checkbox">
        <div class="toggle">
            <span class="top_line common"></span>
            <span class="middle_line common"></span>
            <span class="bottom_line common"></span>
        </div>
        <div class="slide">
            <div id="sltop">
                <p><i class="fa-solid fa-circle-user"></i>Hello, <span id="name">${navname}</span></p>
                <a href=${link}><button>Account</button></a>
                <a href=${link}><button>Orders</button></a>
            </div>
            <ul>
              <li><a href="index.html">HOME</a></li>
              <li><a href="groceries.html">Groceries</a></li>
              <li><a href="kitchen.html">Home & Kitchen</a></li>
              <li><a href="fashion.html">Fashion</a></li>
              <li><a href="electronics.html">Electronics</a></li>
              <li><a href="beauty.html">Beauty</a></li>
              <li><a href="jewellery.html">Jewellery</a></li>
              <li><a href="contactus.html">Contact Us</a></li>
            </ul>
        </div>
    </label>
</div>
    <div id="navbar">
       <a href="index.html" class="a"> <img src="https://www.jiomart.com/msassets/jiomart_logo_beta.svg" alt="logo"></a>
      <form id="search" class="b">
        <input id="query" type="text" placeholder="Search electronics, groceries, jewellery, kitchen and more...">
      </form >
      <div id="btns" class="c">
        <h2 ><a href=${link}><i class="fa-solid fa-user"></i>${navname}</a></h2>
      <h2><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i><span id=${qid}>${qcounts}</span>Cart</a></h2>
      </div>
    </div>
    <div id="seminav">
        <ul>
            <li><a href="groceries.html">Groceries<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="groceries.html">Fruits & Vegetables</a></li>
                    <li><a href="groceries.html">Dairy & Bakery</a></li>
                    <li><a href="groceries.html">Staples</a></li>
                    <li><a href="groceries.html">Beverages</a></li>
                </ul>
            </li>
            <li><a href="kitchen.html">Home & Kitchen<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="kitchen.html">Dining</a></li>
                    <li><a href="kitchen.html">Furnishing</a></li>
                    <li><a href="kitchen.html">Home Decor</a></li>
                    <li><a href="kitchen.html">Electrical</a></li>
                    <li><a href="kitchen.html">Disposables</a></li>
                    <li><a href="kitchen.html">Accessories</a></li>
                </ul>
            </li>
            <li><a href="fashion.html">Fashion<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="fashion.html">Men</a></li>
                    <li><a href="fashion.html">Women</a></li>
                    <li><a href="fashion.html">Boys</a></li>
                    <li><a href="fashion.html">Girls</a></li>
                </ul>
            </li>
            <li><a href="electronics.html">Electronics<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="electronics.html">Mobile & Tablets</a></li>
                    <li><a href="electronics.html">Tv & Speakers</a></li>
                    <li><a href="electronics.html">Home Appliances</a></li>
                    <li><a href="electronics.html">Computers</a></li>
                </ul>
            </li>
            <li><a href="beauty.html">Beauty<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="beauty.html">Makeup</a></li>
                    <li><a href="beauty.html">Hair</a></li>
                    <li><a href="beauty.html">Skin Care</a></li>
                    <li><a href="beauty.html">Fragrance</a></li>
                </ul>
            </li>
            <li><a href="jewellery.html">Jewellery<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="jewellery.html">Fine Jewellery</a></li>
                </ul>
            </li>
        </ul>
    </div>`
}
export default mynav
