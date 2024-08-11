import React from 'react';

interface BreedCardProps {
    id: string;
    name: string;
    imageUrl: string;
    type: 'dog' | 'cat';
}

const BreedCard: React.FC<BreedCardProps> = ({ id, name, imageUrl, type }) => {
    return (
            <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                </div>
            </div>
    );
};

export default BreedCard;
