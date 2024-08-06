import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [searchParams, setSearchParams] = useState({
        origin: '',
        destination: '',
        category: '',
        required_hours: ''
    });

    

    const handleChange = e => {
        setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <input type="text" name="origin" placeholder="Origin" onChange={handleChange} required />
            <input type="text" name="destination" placeholder="Destination" onChange={handleChange} required />
            <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
            <input type="number" name="required_hours" placeholder="Required Hours" onChange={handleChange} required />
            <button onClick={fetchCars}>Search</button>

            <ul>
                {cars.map(car => (
                    <li key={car.car_id}>
                        {car.category} - {car.model} - ${car.total_payable_amt}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
