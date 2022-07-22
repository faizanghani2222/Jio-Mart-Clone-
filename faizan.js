import mynav from "./navbar.js"

document.querySelector("#mynav").innerHTML=mynav()

let cartbodydata=()=>{
    return ` <div id="leftd">
    <div id="basket">
        <div class="flbtw">
            <h3>Groceries Baskets <span id="numitems"></span></h3>
            <h3 id="itemt">&#8377; 10.00</h3>
        </div>
        <div id="promo">
           <p><i class="fa-solid fa-tag"></i>Apply Coupon "MASAI" and get &#8377;100 off on order above &#8377;399 (Offer is applicable only on products sold by Reliance Retail . For specific exclusions & offer details refer T&C)</p>
        </div>
        <div id="cappend">
            <div id="cartc">
                <img src="https://www.jiomart.com/images/product/75x75/490001795/maaza-mango-drink-1-2-l-bottle-product-images-o490001795-p490001795-0-202203171010.jpg" alt="">
                <div id="cbody">
                    <h4>Maaza Mango Drink 1.2 L</h4>
                    <p>&#8377;<span id="price">50.00</span> <span id="sprice">&#8377;70</span></p>
                    <p>Sold By Reliance Retail</p>
                    <div id="cartbtn">
                        <button id="minus"><i class="fa-solid fa-minus"></i></button>
                        <span id="qty">1</span>
                        <button id="plus"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>                 
            </div>
            <div id="cartc">
                <img src="https://www.jiomart.com/images/product/75x75/490001795/maaza-mango-drink-1-2-l-bottle-product-images-o490001795-p490001795-0-202203171010.jpg" alt="">
                <div id="cbody">
                    <h4>Maaza Mango Drink 1.2 L</h4>
                    <p>&#8377;<span id="price">50.00</span> <span id="sprice">&#8377;70</span></p>
                    <p>Sold By Reliance Retail</p>
                    <div id="cartbtn">
                        <button id="minus"><i class="fa-solid fa-minus"></i></button>
                        <span id="qty">1</span>
                        <button id="plus"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>                 
            </div>
        </div>
    </div>
   </div>
    <div id="pay">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <input type="text" placeholder="Enter Coupon Code">
            <button>Apply</button>
            <hr>
        </div>
        <div id="cpayment">
            <h3>Payment Details</h3>
            <div class="flbtw">
                <p id="gr">MRP Total</p>
                <p>&#8377;<span id="tprice">175.00</span></p>
            </div>
            <hr>
            <div class="flbtw">
                <p id="gr">Product Discount</p>
                <p>- &#8377;<span id="tprice">20.00</span></p>
            </div>
            <hr>
            <div class="flbtw">
                <p >Total Amount</p>
                <p>&#8377;<span id="total">2155.00</span></p>
            </div>
        </div>
        <div id="cartbtn">
            <a href="order.html"><button id="place">Place Order</button></a>
        </div>
    </div>`
}


export {cartbodydata}