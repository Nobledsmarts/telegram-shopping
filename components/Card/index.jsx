"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Button from '@/components/Button'
import './Card.css'

const Card = ({product, onAdd, onRemove}) => {
    const [count, setCount] = useState(0);
    const { image, title, price, id } = product; 

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
    }

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
    }

    return (
        <div className='card'>
            <span 
                className={`${count !== 0 ? 'card__badge' : 'card__badge--hidden'}`}
            >
            {count}
            </span>
            <div className='image__container'>
                <Image src={image} alt={title}/>
            </div>
            <h4 className='card__title'>
                {title} . <span className='card__price'>{price}</span>
            </h4>
            <div className='btn-container'>
                <Button title={'+'} type={'add'} onClick={handleIncrement}/>
                {
                    count ? (<Button title={'-'} type={'remove'} onClick={handleDecrement}/>) : ""
                }
            </div>
        </div>
    )
}

export default Card