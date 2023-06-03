import Image from 'next/image'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
        <Button title={'add'} disable={false} type={'add'}/>
        <Button title={'remove'} disable={false} type={'remove'}/>
        <Button title={'chekout'} disable={false} type={'checkout'}/>

    </>
  )
}
