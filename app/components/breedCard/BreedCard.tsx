import React from 'react';
import classes from './BreedCard.module.css'

interface BreedCardProps {
    id: string;
    name: string;
    imageUrl: string;
}

export default function BreedCard({ id, name, imageUrl }:BreedCardProps) {
    return (
            <div key={id} className={classes.breedCardComponent}>
                <img src={imageUrl} alt={name} />
                <div className={classes.breedName}>
                    <h3>{name}</h3>
                </div>
            </div>
    );
};