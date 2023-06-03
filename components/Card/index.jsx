"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Button from '@/components/Button'

const Card = ({product}) => {
    const [count, setCount] = useState(0);
    const { image, title, price, id } = product; 

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const decrementIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div className='card'>
            <span 
                className={`${count !== 0 ? 'card_badge' : 'card__badge--hidden'}`}
            >
            {count}
            </span>
            <div className='image__container'>
                <Image src={image} alt={title}/>
            </div>
            <h4 className='card__title'>
                {title} . <span className='card__price'>{price}</span>
            </h4>
            <div className='btn-conta'>
                <Button title={'+'} type={'add'} onClick={handleIncrement}/>
                {
                    count && <Button title={'-'} type={'remove'} onClick={handleIncrement}/>
                }
            </div>
        </div>
    )
}

export default Card