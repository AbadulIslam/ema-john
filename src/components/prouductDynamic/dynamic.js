import React from 'react';
import './dynamic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const DynamicProuduct = (props) => {
//  console.log(props.buttonData);
 const {name,seller,img,price,stock}=props.dataSend;


    return (
        <div className='parent'>
    <div className="prouduct-image">
        <img src={img} alt="prouduct images" />
    </div>
        
        <div className="product-text">
        <h2>{name}</h2>
       <p>by:{seller}</p>
    <div className="price">
    <p>${price}</p>
    </div>
     
        <h5>only {stock} left in stock - order soon<br></br></h5>
        <button className='cartButton' onClick={()=>props.buttonData(props.dataSend)}><FontAwesomeIcon icon={faCartShopping} />add to cart</button>

 

        </div>

        </div>
    );
};

export default DynamicProuduct;