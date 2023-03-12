import React from 'react';
import './cart.css'

const Cart = (props) => {
 const myCart=props.cart;
const total=myCart.reduce((total,prd)=>total+prd.price,0);
let shipping=0;
if(total>30){
    shipping=0;
}
else if(total >15){
    shipping=4.99;
}
else if(total > 10){
    shipping=10.99;
}
else if(total > 5){
    shipping=3;
}

const tax=total/10;



   return (
        <div className="product-right">

                <h3>order summery</h3>
                <p>Items ordered:{myCart.length}</p>
               <table>
               <tbody>
                <tr>
                    <td>Items:{myCart.length}</td>
                    <td>${total}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling:</td>
                    <td>${shipping}</td>
                </tr>
                <tr>
                    <td>Total before tax:</td>
                    <td>${total+shipping}</td>
                </tr>
                <tr>
                    <td>Estimated Tax:</td>
                    <td>${tax}</td>
                </tr>
                <tr >
                    <td>Order Total:</td>
                    <td>${total+shipping+tax}</td>
                </tr>
               </tbody>
               </table>
               <button>review your order</button>

            
        </div>
    );
};

export default Cart;