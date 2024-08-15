"use client"
import { useEffect, useState } from 'react';
import { fetchDogBreeds, fetchCatBreeds } from './utils/api';
import PetBreedsBlock from './components/petBreedsBlock/PetBreedsBlock'

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
        <PetBreedsBlock breeds={dogBreeds} type={'dog'}>
          Dog Breeds
        </PetBreedsBlock>
        <PetBreedsBlock breeds={catBreeds} type={'cat'}>
          Cat Breeds
        </PetBreedsBlock>
      </div>
  );
}
