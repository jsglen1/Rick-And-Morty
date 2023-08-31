import React, { useEffect, useState } from 'react';
import Navbar from './NavBar';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const response = await data.json();

      setDetail(response);
    }

    fetchData().catch(console.error);
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{detail.name}</h2>
        <img src={detail.image} alt={detail.name} className="mb-4 rounded-md" />
        <div className="mb-2">
          <strong>Status:</strong> {detail.status}
        </div>
        <div className="mb-2">
          <strong>Species:</strong> {detail.species}
        </div>
        <div className="mb-2">
          <strong>Gender:</strong> {detail.gender}
        </div>
        <div className="mb-2">
          <strong>Origin:</strong> {detail.origin?.name || 'Unknown'}
        </div>
        <div className="mb-2">
          <strong>Location:</strong> {detail.location?.name || 'Unknown'}
        </div>
      </div>
    </div>
  );
}
