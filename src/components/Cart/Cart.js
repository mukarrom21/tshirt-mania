import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    //Conditional rendering option
    //1. Element Variable
    let command;
    if (cart.length === 0) {
        command = <p>Please, Add at least one item!</p>
    }else if (cart.length === 1) {
        command = <p>Please, Add more....</p>
    }else{
        command = <p>Thanks for adding items.</p>
    }
    return (
        <div>
            {
                cart.map(tShirt=> <p>
                    {tShirt.name}
                    <button onClick={()=>handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {command}
        </div>
    );
};

export default Cart;