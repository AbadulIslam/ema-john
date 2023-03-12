import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import DynamicProuduct from '../prouductDynamic/dynamic';
import './prouduct.css';
 import Cart from '../cart/cart';



 

const Prouduct = () => {
    console.log(fakeData);
    const fakeSlice=fakeData.slice(0,10);
    const [products,setProducts]=useState(fakeSlice);
    const [cartStatus,setCart]=useState([]);

 
    function buttonHandle(Prouduct){
        const newItem=[...cartStatus,Prouduct];
        setCart(newItem);

    } 

    return (
        <div className='product-area'>
            <div className="product-left">
               {
                products.map(product=><
                    DynamicProuduct dataSend={product} 
                    buttonData={buttonHandle}
                    
                    
                    ></DynamicProuduct>)

               }
         
         
            </div>
            <div className='orderReview'>
            
        <Cart cart={cartStatus}></Cart>

            </div>

        </div>
    );
};

export default Prouduct;