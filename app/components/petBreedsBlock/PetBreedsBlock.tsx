import Link from 'next/link'
import BreedCard from '../breedCard/BreedCard'
import classes from './PetBreedsBlock.module.css'

interface Breeds {
    id: string
    name: string
    imageUrl: string
}

interface BreedsBlock {
    breeds: Breeds[],
    type: string,
    children: any
}

export default function PetBreedsBlock ({breeds, type, children}:BreedsBlock) {
    return (
        <div className={classes.breedsBlock}>
            <h1>{children}</h1>
            <div className={classes.breedsCards}>
                {breeds.map((breed:any) => (
                    <Link key={breed.id} href={`/pages/${type}/${breed.id}`}>
                        <BreedCard
                            id={breed.id}
                            name={breed.name}
                            imageUrl={breed.imageUrl}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}