import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPerson = cart.reduce((sum,person) => person.phone + sum,'')
    return (
        <div>
            <h2>Added: {cart.length} </h2>
            {/* <h4>Persons: {totalPerson + " "} </h4> */}
        </div>
    );
};

export default Cart;