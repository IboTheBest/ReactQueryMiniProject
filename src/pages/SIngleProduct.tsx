import _React from 'react'
import getProducts from '../service/getProducts'
import { useParams } from 'react-router-dom'
import CostumCard from '../components/CostumCard'

const SIngleProduct = () => {
  const {id} = useParams()
  const {data} = getProducts(`/products/${id}`, "product")
  
  return (
    <div className='flex items-center justify-center'>
       <CostumCard key={data} item={data} isBack/>
    </div>
  )
}

export default SIngleProduct