const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY",
});

const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow' as RequestRedirect,
};

const DOG_API_BASE_URL = 'https://api.thedogapi.com/v1';
const CAT_API_BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchDogBreeds = async () => {
    const response = await fetch(`${DOG_API_BASE_URL}/breeds`, requestOptions);
    const data = await response.json();
    return data.map((breed: any) => ({
        id: breed.id,
        name: breed.name,
        imageUrl: breed.image?.url || '/placeholder.png',
    }));
};

export const fetchCatBreeds = async () => {
    const response = await fetch(`${CAT_API_BASE_URL}/breeds`, requestOptions);
    const data = await response.json();
    return data.map((breed: any) => ({
        id: breed.id,
        name: breed.name,
        imageUrl: breed.image?.url || '/placeholder.png',
    }));
};

export const fetchBreedDetails = async (id: string, type: 'dog' | 'cat') => {
    const url =
        type === 'dog'
            ? `${DOG_API_BASE_URL}/breeds/${id}`
            : `${CAT_API_BASE_URL}/breeds/${id}`;
    const response = await fetch(url, requestOptions);
    return await response.json();
};

export const fetchBreedImages = async (id: string, type: 'dog' | 'cat') => {
    const url =
        type === 'dog'
            ? `${DOG_API_BASE_URL}/images/search?breed_id=${id}&limit=10`
            : `${CAT_API_BASE_URL}/images/search?breed_id=${id}&limit=10`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data.map((img: any) => img.url);
};
