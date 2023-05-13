import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard';
import Swal from 'sweetalert2';
import { useState } from 'react';

function App() {
  const lodadedCoffes = useLoaderData();

  const [coffees,setCoffees] = useState(lodadedCoffes)

  const handleDeleteBtn = (id) => {
    fetch(`http://localhost:5000/coffee/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              if(deletedCount===1){
                 const newCoffees = coffees.filter(coffee=>coffee._id===id)
                 setCoffees(newCoffees)
                 Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success') 
              }
            }
          })
    })
}

  return (
    <div className='mx-20 my-10'>
      <h1 className='text-4xl mb-8'>All coffee data number {coffees.length}</h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees?.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            handleDeleteBtn={handleDeleteBtn}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
