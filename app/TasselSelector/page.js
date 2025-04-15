import React from 'react';
import Image from 'next/image';

const Selector = ({ selectedString, onSelect }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Bracelet Style</h2>
      <div className="flex gap-2">
        {STRING_TYPES.map((string) => (
          <button
            key={string.id}
            className={`flex-1 py-2 px-3 rounded-md border-2 transition-all flex flex-col items-center
              ${selectedString === string.id ? 'border-blue-500' : 'border-gray-200'}`}
            onClick={() => onSelect(string.id)}
          >
            <Image
              src={string.image}
              alt={string.name}
              width={50}
              height={50}
              className="object-contain mb-2"
            />
            <span>{string.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StringSelector;