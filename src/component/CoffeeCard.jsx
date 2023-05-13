import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, teste, category, details, photo } = coffee;
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
                    <button className="btn">Update</button>
                    <button className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;