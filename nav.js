function navbar(){
    return `
    <div id="navbar-fDiv">
        <div><img class="logo-img" src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" alt="">
        </div>
        <div id="search-select">
            <div>
                <select onfocus='this.size=10;' onblur='this.size=1;' onchange='this.size=1;
             this.blur();'>
                    <option>All Departments</option>
                    <option>Auto</option>
                    <option>Baby</option>
                    <option>Beauty</option>
                    <option>Books</option>
                    <option>Business</option>
                    <option>Cameras</option>
                    <option>Clothes</option>
                    <option>Computers</option>
                    <option>Electronics</option>
                    <option>Garden</option>
                    <option>Gift</option>
                    <option>Home Store</option>


                </select>
            </div>
            <div id="input-div"><input type="text" placeholder="Search SHOP.COM..."></div>
            <button id="search-btn"><i id="serch-icon" class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div><img id="shop-nowI"
                src="https://img.shop.com/Image/header2013/motives-usa-can-100110-sculpting-concealer-banners-header1650486339409.svg"
                alt=""></div>
    </div>
    <div id="categories">
        <div>
            <div id="burger-id"><img id="burger"
                    src="https://img.shop.com/Image/resources/images/icon-menu-24px.svg" alt=""></div>
            <div>
                <p  id="cat"> Categories</p>
            </div>
        </div>


        <div>
            <table   id="different-cartegories"  >
                <tr>
                    <td class="td-brands">Exclusive Brands
                    </td>
                    <td class="td-brands">
                        Stores
                    </td>
                    <td class="td-brands">
                        Deals</td>
                        <td class="td-brands">SHOP Travel</td>
                        <td class="td-brands">
                            Departments</td>
                        <td class="td-brands">
                            ShopBuddy</td>
                            <td class="td-brands">SHOP Local</td>
                </tr>
            </table>
        </div>
        <div>
            <div class="sin-card-orders">
                <img src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg" alt=""><p class="orders-img-text">Sign in</p>
            </div>
            <div class="sin-card-orders"><img src="https://img.shop.com/Image/resources/images/icon-orders-24px.svg" alt=""><p  class="orders-img-text" >Orders</p></div>
            <div class="sin-card-orders"><p class="orders-img-text"> <img src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg" alt=""><p  class="orders-img-text">cart</p></div>
        </div>
    </div>`
}
export  {navbar };