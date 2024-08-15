import { fetchBreedDetails, fetchBreedImages } from '/app/utils/api';

import classes from './page.module.css'

interface BreedDetails {
    id: string,
    type: 'dog' | 'cat'
}

const BreedDetailsPage = async ({ params }: BreedDetails) => {
    const { id, type } = params;

    const breed = await fetchBreedDetails(id, type);
    const images = await fetchBreedImages(id, type);

    return (
        <div className={classes.breedPage}>
            <h1>{breed.name}</h1>
            <p>{breed.temperament}</p>
            <div className={classes.breedImg}>
                {images.map((image:string, index:number) => (
                    <img
                        key={index}
                        src={image}
                        alt={breed.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default BreedDetailsPage;
