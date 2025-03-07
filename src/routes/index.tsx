import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SIngleProduct from '../pages/SIngleProduct'
const ProductRoutes = () => {
  return (
    <div className='flex w-full flex-col'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:id' element={<SIngleProduct/>}/>
        </Routes>
    </div>
  )
}

export default ProductRoutes