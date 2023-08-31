import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ character }) => {
  const { id, name, status, species, image } = character;

  return (
    <Link to={`/profile/${id}`} className="block">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt={name} />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{status}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
