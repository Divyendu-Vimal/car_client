import React, { useState } from 'react';
import axios from 'axios';

const RentCar = ({ carId }) => {
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        hours_requirement: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/car/rent', { ...formData, car_id: carId });
            alert(response.data.status);
        } catch (error) {
            alert('Error renting car');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="origin" placeholder="Origin" onChange={handleChange} required />
            <input type="text" name="destination" placeholder="Destination" onChange={handleChange} required />
            <input type="number" name="hours_requirement" placeholder="Hours Requirement" onChange={handleChange} required />
            <button type="submit">Rent Car</button>
        </form>
    );
};

export default RentCar;
