import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
    <div className='mx-20 my-10'>
      <h1 className='text-4xl mb-8'>All coffee data number {coffees.length}</h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
