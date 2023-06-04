import React from 'react'
import './Cart.css'
import Button from '@/components/Button'

const Cart = ({ cartItems, onAdd, onRemove }) => {
    const totalPrice = cartItems.reduce((initialValue, items) => initialValue + items.price * items.quantity, 0)
    return (
        <div className='cart__container'>
            {
                cartItems.length == 0 ? "No Items in cart" : ""
            }
            <br />
            <span className=''>
                Total Price : ${totalPrice.toFixed(2)}
            </span>
            <Button title={`${cartItems.length === 0 ? 'Order !' : 'Checkout'}`}
                type={'checkout'}
                disable={cartItems.length == 0}
            />
        </div>
    )
}

export default Cart