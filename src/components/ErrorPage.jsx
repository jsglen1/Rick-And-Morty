import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorCode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-red-500">Error {errorCode}</h1>
      <p className="text-gray-600 mt-2">¡Ups! Algo salió mal. Por favor, intenta nuevamente más tarde.</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">Volver a la página de inicio</Link>
    </div>
  );
};

export default ErrorPage;
