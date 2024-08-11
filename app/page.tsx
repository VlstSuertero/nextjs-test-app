"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import BreedCard from '../app/components/BreedCard';
import { fetchDogBreeds, fetchCatBreeds } from './utils/api';

export default function HomePage() {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [catBreeds, setCatBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const dogs = await fetchDogBreeds();
      const cats = await fetchCatBreeds();
      setDogBreeds(dogs);
      setCatBreeds(cats);
    };
    fetchBreeds();
  }, []);

  return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Dog Breeds</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dogBreeds.map((breed) => (
              <Link key={breed.id} href={`/pages/dog/${breed.id}`}>
                <BreedCard name={breed.name} imageUrl={breed.imageUrl} />
              </Link>
          ))}
        </div>

        <h1 className="text-2xl font-bold mt-8 mb-4">Cat Breeds</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {catBreeds.map((breed) => (
              <Link key={breed.id} href={`/pages/cat/${breed.id}`}>
                <BreedCard name={breed.name} imageUrl={breed.imageUrl} />
              </Link>
          ))}
        </div>
      </div>
  );
}
