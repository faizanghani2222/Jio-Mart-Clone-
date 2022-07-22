let mynav=()=>{
    let qcounts=localStorage.getItem("counts")||0
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
                <p><i class="fa-solid fa-circle-user"></i>Hello, <span id="name">Sign in</span></p>
                <a href="profile.html"><button>Account</button></a>
                <a href="profile.html"><button>Orders</button></a>
            </div>
            <ul>
              <li><a href="index.html">HOME</a></li>
              <li><a href="groceries.html">Groceries</a></li>
              <li><a href="">Home & Kitchen</a></li>
              <li><a href="">Fashion</a></li>
              <li><a href="">Electronics</a></li>
              <li><a href="beauty.html">Beauty</a></li>
              <li><a href="opinion.html">Jewellery</a></li>
              <li><a href="contactus.html">Contact Us</a></li>
            </ul>
        </div>
    </label>
</div>
    <div id="navbar">
       <a href="index.html" class="a"> <img src="https://www.jiomart.com/msassets/jiomart_logo_beta.svg" alt="logo"></a>
      <form class="b">
        <input type="text" placeholder="Search essentials, groceries and more">
      </form >
      <div id="btns" class="c">
        <h2 ><a href=""><i class="fa-solid fa-user"></i>Sign in</a></h2>
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
            <li><a href="">Home & Kitchen<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="">Dining</a></li>
                    <li><a href="">Furnishing</a></li>
                    <li><a href="">Home Decor</a></li>
                    <li><a href="">Electrical</a></li>
                    <li><a href="">Disposables</a></li>
                    <li><a href="">Accessories</a></li>
                </ul>
            </li>
            <li><a href="">Fashion<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">Boys</a></li>
                    <li><a href="">Girls</a></li>
                </ul>
            </li>
            <li><a href="">Electronics<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="">Mobile & Tablets</a></li>
                    <li><a href="">Tv & Speakers</a></li>
                    <li><a href="">Home Appliances</a></li>
                    <li><a href="">Computers</a></li>
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
            <li><a href="">Jewellery<i class="fa-solid fa-chevron-down"></i></a>
                <ul>
                    <li><a href="">Fine Jewellery</a></li>
                </ul>
            </li>
        </ul>
    </div>`
}
export default mynav
