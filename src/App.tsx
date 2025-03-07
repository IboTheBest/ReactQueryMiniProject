import './App.css'
import Header from './modules/Header'
import ProductRoutes from './routes'

function App() {
  return (
    <div className='w-full flex flex-col'>
      <Header />
      <ProductRoutes />
    </div>
  )
}
export default App
