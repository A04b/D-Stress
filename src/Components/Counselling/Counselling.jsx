import CList from "./CList";
import Sfooter from "../Sfooter";
import SearchBar from "../SearchBar";
import S_header from "../S_header";
import { Link } from "react-router-dom";

//user appointments
import React, { useEffect, useState } from 'react';
import ProfessionalCard from './ProfessionalCard';

const Counselling = () => {
    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/professional/professionals')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setProfessionals(data);
                } else {
                    console.error("Invalid JSON format:", data);
                }
            })
            .catch((error) => console.error('Error fetching professionals:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {professionals.map((professional) => (
                <ProfessionalCard key={professional.professionalId} professional={professional} />
            ))}
        </div>
    );
};

export default Counselling;
