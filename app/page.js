'use client';
import React, { useState } from 'react';
import BraceletPreview from './BraceletPreview/page';
import ComponentSelector from './ComponentSelector/page';

const HALF_BRACELET_OPTIONS = [
  { id: 'none', name: 'None', image: '/half-bracelets/none.png' },
  { id: 'pearls', name: 'Pearls', image: '/half-bracelets/pearls.png' },
  { id: 'amethyst', name: 'Amethyst', image: '/half-bracelets/amethyst.png' },
  { id: 'beads', name: 'Beads', image: '/half-bracelets/beads.png' },
  { id: 'knotted', name: 'Knotted', image: '/half-bracelets/knotted.png' },
  { id: 'chain', name: 'Chain', image: '/half-bracelets/chain.png' },
];

const FILLER_OPTIONS = [
  { id: 'filler1', image: '/fillers/filler1.png' },
  { id: 'filler2', image: '/fillers/filler2.png' },
];

const BraceletDesigner = () => {
  const [step, setStep] = useState(1);
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
          />
        </div>
        <div className="md:w-1/2 p-8 mt-10">
          <h2 className="text-5xl font-serif mb-2">Customize</h2>
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
          />
        </div>
      </div>
      <div className="flex justify-center space-x-4 p-4">
        <button className={`text-sm ${step === 1 ? 'font-bold' : ''}`} onClick={() => { setStep(1); setSelectedCharm(null); }}>
          Step 1: Choose string & clasp
        </button>
        <span>→</span>
        <button className={`text-sm ${step === 2 ? 'font-bold' : ''}`} onClick={() => { setStep(2); setSelectedCharm(null); }}>
          Step 2: Add charms
        </button>
        <span>→</span>
        <button className={`text-sm ${step === 3 ? 'font-bold' : ''}`} onClick={() => { setStep(3); setSelectedCharm(null); }}>
          Step 3: Select half bracelet
        </button>
        <span>→</span>
        <button className={`text-sm ${step === 4 ? 'font-bold' : ''}`} onClick={() => setStep(4)}>
          Step 4: Confirm & Checkout
        </button>
      </div>
    </div>
  );
};

export default BraceletDesigner;