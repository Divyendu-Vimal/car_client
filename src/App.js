import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import CarList from './components/CarList';
import RentCar from './components/RentCar';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cars" element={<CarList />} />
                <Route path="/rent/:id" element={<RentCar />} />
            </Routes>
        </Router>
    );
};

export default App;
