'use client'
import { useState } from 'react'
import Image from 'next/image'
import Button  from '@/components/Button'
import Card from '@/components/Card'
import Cart from '@/components/Cart'

import { getData } from '@/model/products'
import { Fanwood_Text } from 'next/font/google'

const products = getData();

export default function Home() {
    const [cartItems, setcartItems] = useState([]);

    const onAdd = (product) => {
        const productExist = cartItems.find((item) => item.id == product.id);
        if(productExist){
            setcartItems(cartItems.map(item => {
                item.id == product.id ? {...productExist, quantity: productExist.quantity + 1} : item
            }))
        } else {
            setcartItems([...cartItems, {...product, quantity : 1 }])
        }
    }

    const onRemove = (product) => {
        const productExist = cartItems.find((item) => item.id == product.id);
        if(productExist.quantity == 1){
            setcartItems(cartItems.filter(item => item.id !== product.id))
        } else {
            setcartItems(cartItems.map(item => {
                item.id == product.id ? {...productExist, quantity: productExist.quantity - 1} : item
            }))
        }
    }

    return (
        <>
            <h1 className='heading'>Order Food</h1>
            <Cart cartItems={cartItems} />
            <div className='card__container'>
                {
                    products.map((product) => <Card product={product} onAdd={onAdd} onRemove={onRemove}/>)
                }
            </div>
        </>
    )
}
