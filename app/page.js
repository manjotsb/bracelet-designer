'use client';
import React, { useState } from 'react';
import BraceletPreview from './BraceletPreview/page';
import ComponentSelector from './ComponentSelector/page';

const HALF_BRACELET_OPTIONS = [
  { id: 'none', name: 'None', image: '/half-bracelets/none.png', price:0 },
  { id: 'pearls', name: 'Pearls', image: '/half-bracelets/pearls.png', price:50  },
  { id: 'amethyst', name: 'Amethyst', image: '/half-bracelets/amethyst.png', price:66  },
  { id: 'beads', name: 'Beads', image: '/half-bracelets/beads.png', price:21  },
  { id: 'knotted', name: 'Knotted', image: '/half-bracelets/knotted.png', price:5  },
  { id: 'chain', name: 'Chain', image: '/half-bracelets/chain.png', price:10  },
];

const FILLER_OPTIONS = [
  { id: 'filler1', image: '/fillers/filler1.png' },
  { id: 'filler2', image: '/fillers/filler2.png' },
];

const BraceletDesigner = () => {
  const [step, setStep] = useState(1);
  const stepNames = {
    1: "String & Clasp",
    2: "Charms",
    3: "Half Bracelet",
    4: "Select Tassel",
    5: "Review"
  };
  
  const [stringType, setStringType] = useState('silver');
  const [claspType, setClaspType] = useState('default');
  const [chainLength, setChainLength] = useState(3);
  const [endCharm, setEndCharm] = useState('heart');
  const [selectedCharm, setSelectedCharm] = useState(null);
  const [placedCharms, setPlacedCharms] = useState(
    Array(14).fill(null).map(() => ({ type: null, variant: null }))
  );
  const [selectedHalfBracelet, setSelectedHalfBracelet] = useState(null);
  const [charmVariants, setCharmVariants] = useState({ circle: 'circle1' });
  const [selectedFiller, setSelectedFiller] = useState('filler1');

  const [selectedTassel, setSelectedTassel] = useState(null); // 1-4 or null

  // Add tassel selector UI somewhere in your component
  const TASSEL_OPTIONS = [
    { id: 'heart', name: 'Heart Tassel', image: '/tassel/heart.png' },
    { id: 'locket', name: 'Locket Tassel', image: '/tassel/locket.png' },
    { id: 'pearl', name: 'Pearl Tassel', image: '/tassel/pearl.png' },
    { id: 'plain', name: 'Plain Tassel', image: '/tassel/plain.png' },
  ];

  const handleVariantSelect = (charmType, variant) => {
    setCharmVariants((prev) => ({
      ...prev,
      [charmType]: variant,
    }));
  };

  const handlePositionSelect = (position) => {
    if (!selectedCharm) return;
    if (selectedHalfBracelet && position >= 7) return;
    setPlacedCharms(prev => {
      const newPlacedCharms = [...prev];
      newPlacedCharms[position] = { 
        type: selectedCharm,
        variant: charmVariants[selectedCharm] || null
      };
      return newPlacedCharms;
    });
  };

  const toggleHalfBracelet = (type) => {
    if (type === 'none') {
      setSelectedHalfBracelet(null); // Clear selection
    } else if (selectedHalfBracelet === type) {
      setSelectedHalfBracelet(null); // Toggle off
    } else {
      setSelectedHalfBracelet(type); // Select new type
      // Clear charms from positions 7 and beyond
      setPlacedCharms(prev => {
        const newPlacedCharms = [...prev];
        for (let i = 7; i < newPlacedCharms.length; i++) {
          newPlacedCharms[i] = { type: null, variant: null };
        }
        return newPlacedCharms;
      });
    }
  };

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const removeCharm = (position) => {
    setPlacedCharms(prev => {
      const newPlacedCharms = [...prev];
      newPlacedCharms[position] = { type: null, variant: null };
      return newPlacedCharms;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-black">
      <div className="flex-1 flex flex-col md:flex-row p-8">
        <div className="md:w-1/2 flex items-center justify-center">
          <BraceletPreview
            stringType={stringType}
            claspType={claspType}
            chainLength={chainLength}
            endCharm={endCharm}
            placedCharms={placedCharms}
            selectedCharm={selectedCharm}
            onPositionSelect={handlePositionSelect}
            selectedHalfBracelet={selectedHalfBracelet}
            charmVariants={charmVariants}
            onRemoveCharm={removeCharm}
            halfBraceletOptions={HALF_BRACELET_OPTIONS}
            step={step}
            selectedTassel={selectedTassel}
          />
        </div>
        <div className="md:w-1/2 p-8 mt-10">
        <div className='flex items-center justify-between'>
          <h2 className="text-5xl font-serif mb-2">Customize</h2>
          <h2 className="text-xl font-serif mb-2">Total Price: ${60}</h2>
        </div>
          <p className="text-lg mb-6">
            Step {step}: {step === 1 ? 'Choose your string and clasp' : step === 2 ? 'Add charms' : step === 3 ? 'Select half bracelet' : 'Confirm & Checkout'}
          </p>
          <ComponentSelector
            step={step}
            setStep={setStep}
            stringType={stringType}
            setStringType={setStringType}
            claspType={claspType}
            setClaspType={setClaspType}
            chainLength={chainLength}
            setChainLength={setChainLength}
            endCharm={endCharm}
            setEndCharm={setEndCharm}
            selectedCharm={selectedCharm}
            setSelectedCharm={setSelectedCharm}
            halfBraceletOptions={HALF_BRACELET_OPTIONS}
            selectedHalfBracelet={selectedHalfBracelet}
            toggleHalfBracelet={toggleHalfBracelet}
            charmVariants={charmVariants}
            setCharmVariants={setCharmVariants}
            handleVariantSelect={handleVariantSelect}
            selectedTassel={selectedTassel}
            setSelectedTassel={setSelectedTassel}
            tasselOptions={TASSEL_OPTIONS}
          />
        </div>
      </div>
      <div className="flex justify-center space-x-4 p-4">
        {[1, 2, 3, 4, 5].map((stepNumber) => (
          <button
            key={stepNumber}
            className={`text-sm ${step === stepNumber ? 'font-bold underline' : ''}`}
            onClick={() => {
              setStep(stepNumber);
              setSelectedCharm(null);
            }}
          >
            Step {stepNumber}: {stepNames[stepNumber]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BraceletDesigner;