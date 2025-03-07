import _React from 'react'
import getProducts from '../service/getProducts'
import CostumCard from '../components/CostumCard'
import { CardItemTypes } from '../types/CardItemTypes'

const Home = () => {
    const { data, isLoading, isError } = getProducts("/products", "products")

    if (isError) {
        return <h1>Page Not Found</h1>
    }
    else {
        return (
            <div className='flex items-center justify-center flex-wrap gap-8'>
                {isLoading ? "Loading..." : data.map((item: CardItemTypes, index:number) => <CostumCard key={index} item={item} />)}
            </div>
        )
    }

}

export default Home