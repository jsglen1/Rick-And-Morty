import React from 'react';
import Navbar from './NavBar';

export default function Welcome() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
                <h1 className="text-4xl font-bold mb-4">¡Bienvenido a Mi Aplicación!</h1>
                <p className="text-lg">Esperamos que disfrutes tu experiencia.</p>
            </div>
        </div>
    );
}
