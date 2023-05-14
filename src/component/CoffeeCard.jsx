import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, handleDeleteBtn }) => {
    const { _id, name, quantity, supplier, teste, category, details, photo } = coffee;



    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full">
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="">{quantity}</p>
                    <p className="">{supplier}</p>
                    <p className="">{teste}</p>
                    <p className="">{category}</p>
                    <p className="">{details}</p>
                </div>
                <div className="btn-group btn-group-vertical space-y-4">
                    <button className="btn ">Veiw</button>
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="btn">Update</button>
                    </Link>
                    <button onClick={() => handleDeleteBtn(_id)} className="btn bg-red-500" >Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;