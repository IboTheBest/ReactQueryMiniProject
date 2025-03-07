import _React from 'react'
import getProducts from '../service/getProducts'
import { Button } from 'antd'

const Header = () => {
const {data} = getProducts("/categories", "categories")

  return (
    <header className='z-50 flex justify-between p-7 m-2 mb-3 shadow-md bg-white'>
        <strong>Products</strong>
        <nav>
            {data?.map((item:any, index:number)=><Button type='text' key={index}>{item.name}</Button>)}
        </nav>
    </header>
  )
}

export default Header