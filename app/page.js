import Image from 'next/image'
import Button  from '@/components/Button'
import Card from '@/components/Card'
import { getData } from '@/model/products'

const products = getData();

export default function Home() {
  return (
    <>
        <h1 className='heading'>Order Food</h1>
        <div className='card__container'>
            {
                products.map((product) => <Card product={product}/>)
            }
        </div>
    </>
  )
}
