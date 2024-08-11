import { fetchBreedDetails, fetchBreedImages } from '../../../utils/api';

const BreedDetailsPage = async ({ params }: { params: { id: string; type: 'dog' | 'cat' } }) => {
    const { id, type } = params;

    const breed = await fetchBreedDetails(id, type);
    const images = await fetchBreedImages(id, type);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{breed.name}</h1>
            <p>{breed.temperament}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {images.map((image:string, index:number) => (
                    <img
                        key={index}
                        src={image}
                        alt={breed.name}
                        className="w-full h-48 object-cover rounded-md shadow-md"
                    />
                ))}
            </div>
        </div>
    );
};

export default BreedDetailsPage;
