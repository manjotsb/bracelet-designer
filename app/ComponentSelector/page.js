import React from 'react';
import Image from 'next/image';
import StringSelector from '../StringSelector/page';

const CLASP_TYPES = [
  {type:'bird', name:'Bird', icon: '/clasp/bird.png' },
  {type:'butterfly', name:'Butterfly', icon: '/clasp/butterfly.png' },
  {type:'feather', name:'Feather', icon: '/clasp/feather.png' },
  {type:'flower', name:'Flower', icon: '/clasp/flower.png' },
  {type:'flower2', name:'Flower 2', icon: '/clasp/flower2.png' },
  {type:'plain', name:'Plain', icon: '/clasp/plain.png' },
  {type:'regular', name:'Regular', icon: '/clasp/regular.png' },
  {type:'tail', name:'Tail', icon: '/clasp/tail.png' },
];

export const CHARM_TYPES = [
  { 
    type: 'green', 
    name: 'Green Series', 
    icon: '/charms/green/flower.png',
    variants: [
      { id: 'flower', name: 'Flower', icon: '/charms/green/flower.png' },
      { id: 'heart', name: 'Heart', icon: '/charms/green/heart.png' },
      { id: 'oval', name: 'Oval', icon: '/charms/green/oval.png' },
      { id: 'oval2', name: 'Oval 2', icon: '/charms/green/oval2.png' },
      { id: 'shape', name: 'Shape', icon: '/charms/green/shape.png' },
    ]
  },
  { 
    type: 'clover', 
    name: 'Clover', 
    icon: '/charms/clover/clover1.png',
    variants: [
      { id: 'clover1', name: 'Clover 1', icon: '/charms/clover/clover1.png' },
      { id: 'clover2', name: 'Clover 2', icon: '/charms/clover/clover2.png' },
      { id: 'clover3', name: 'Clover 3', icon: '/charms/clover/clover3.png' },
      { id: 'clover4', name: 'Clover 4', icon: '/charms/clover/clover4.png' },
      { id: 'clover5', name: 'Clover 5', icon: '/charms/clover/clover5.png' },
    ]
  },
  { 
    type: 'red', 
    name: 'Red Series', 
    icon: '/charms/red/bead.png',
    variants: [
      { id: 'bead', name: 'Bead', icon: '/charms/red/bead.png' },
      { id: 'heart', name: 'Heart', icon: '/charms/red/heart.png' },
      { id: 'square', name: 'Square', icon: '/charms/red/square.png' },
      { id: 'square2', name: 'Square 2', icon: '/charms/red/square2.png' },
      { id: 'star', name: 'Star', icon: '/charms/red/star.png' },
    ]
  },
  { 
    type: 'pearl', 
    name: 'Pearl Series', 
    icon: '/charms/pearl/circle.png',
    variants: [
      { id: 'circle', name: 'Circle', icon: '/charms/pearl/circle.png' },
      { id: 'circle2', name: 'Circle 2', icon: '/charms/pearl/circle2.png' },
      { id: 'circle3', name: 'Circle 3', icon: '/charms/pearl/circle3.png' },
      { id: 'flower', name: 'Flower', icon: '/charms/pearl/flower.png' },
      { id: 'pearl', name: 'Pearl', icon: '/charms/pearl/pearl.png' },
      { id: 'shape', name: 'Shape', icon: '/charms/pearl/shape.png' },
    ]
  },
  { 
    type: 'circle', 
    name: 'Circle', 
    icon: '/charms/circle/circle1.png',
    variants: [
      { id: 'circle1', name: 'Circle 1', icon: '/charms/circle/circle1.png' },
      { id: 'circle2', name: 'Circle 2', icon: '/charms/circle/circle2.png' },
      { id: 'circle3', name: 'Circle 3', icon: '/charms/circle/circle3.png' },
      { id: 'circle4', name: 'Circle 4', icon: '/charms/circle/circle4.png' },
    ]
  },
  { 
    type: 'wood', 
    name: 'Wood Series', 
    icon: '/charms/wood/circle.png',
    variants: [
      { id: 'circle', name: 'Circle', icon: '/charms/wood/circle.png' },
      { id: 'cylinder', name: 'Cylinder', icon: '/charms/wood/cylinder.png' },
      { id: 'cylinder2', name: 'Cylinder 2', icon: '/charms/wood/cylinder2.png' },
      { id: 'oval', name: 'Oval', icon: '/charms/wood/oval.png' },
      { id: 'square', name: 'Square', icon: '/charms/wood/square.png' },
    ]
  },
];

const ComponentSelector = ({
  step,
  setStep,
  stringType,
  setStringType,
  claspType,
  setClaspType,
  selectedCharm,
  setSelectedCharm,
  halfBraceletOptions,
  selectedHalfBracelet,
  toggleHalfBracelet,
  charmVariants,
  handleVariantSelect,
}) => {
  const handleNext = () => step < 4 && setStep(step + 1);
  const handlePrevious = () => step > 1 && setStep(step - 1);

  const stepNames = {
    1: "String & Clasp",
    2: "Charms",
    3: "Half Bracelet",
    4: "Review"
  };

  const getCharmImage = (charm) => {
    const variant = charmVariants[charm.type];
    const defaultVariant = charm.variants[0].id;
    const variantToUse = variant || defaultVariant;
    
    const selectedVariant = charm.variants.find(v => v.id === variantToUse);
    return selectedVariant ? selectedVariant.icon : charm.icon;
  };

  return (
    <div className="space-y-6 text-black">
      {/* Step 1: String and Clasp Selection */}
      {step === 1 && (
        <div>
          <StringSelector 
            selectedString={stringType}
            onSelect={(type) => {
              setStringType(type);
              if (type === 'no-clasp') setClaspType(null);
            }}
          />
          
          <div className="mt-4">
            <h3 className="font-medium mb-2">Clasp Style</h3>
            <div className="grid grid-cols-4 gap-4">
              {CLASP_TYPES.map((clasp) => (
                <button
                  key={clasp.type}
                  className={`p-2 rounded-md border-2 flex flex-col items-center transition-colors
                    ${claspType === clasp.type ? 'border-black bg-gray-100' : 'border-gray-200'}
                    ${stringType === 'no-clasp' ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-300'}`}
                  onClick={() => stringType !== 'no-clasp' && setClaspType(clasp.type)}
                  disabled={stringType === 'no-clasp'}
                >
                  <div className="w-12 h-12 relative">
                    <Image
                      src={clasp.icon}
                      alt={clasp.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm mt-1">{clasp.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Charm Selection */}
      {step === 2 && (
        <div>
          <h3 className="font-medium mb-4">Add Charms</h3>
          <div className="grid grid-cols-4 gap-4">
            {CHARM_TYPES.map((charm) => (
              <div key={charm.type} className="flex flex-col items-center">
                <button
                  className={`p-3 rounded-full border-2 transition-all hover:shadow-md
                    ${selectedCharm === charm.type ? 'border-black shadow-md' : 'border-gray-200'}`}
                  onClick={() => setSelectedCharm(selectedCharm === charm.type ? null : charm.type)}
                >
                  <div className="w-12 h-12 relative">
                    <Image
                      src={getCharmImage(charm)}
                      alt={charm.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
                <span className="text-sm mt-2 font-medium text-center">{charm.name}</span>
              </div>
            ))}
          </div>

          {/* Variant Selection */}
          {selectedCharm && (
            <>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-medium mb-3 text-gray-700">
                  {CHARM_TYPES.find(c => c.type === selectedCharm)?.name} Variants
                </h4>
                <div className="grid grid-cols-5 gap-3">
                  {CHARM_TYPES
                    .find(c => c.type === selectedCharm)
                    ?.variants?.map(variant => (
                      <button
                        key={variant.id}
                        className={`p-2 rounded-lg border-2 transition-all flex flex-col items-center
                          ${charmVariants[selectedCharm] === variant.id
                            ? 'border-black bg-gray-100'
                            : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => handleVariantSelect(selectedCharm, variant.id)}
                      >
                        <div className="w-10 h-10 relative">
                          <Image
                            src={variant.icon}
                            alt={variant.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </button>
                    ))}
                </div>
              </div>
              
              {/* <button 
                onClick={() => setSelectedCharm(null)}
                className="mt-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear Selected Charm
              </button> */}
            </>
          )}
        </div>
      )}

      {/* Step 3: Half Bracelet */}
      {step === 3 && (
        <div>
          <h3 className="font-medium mb-4">Half Bracelet Style</h3>
          <div className="grid grid-cols-4 gap-4">
            {halfBraceletOptions.map((option) => (
              <div key={option.id} className="flex flex-col items-center">
                <button
                  className={`p-2 rounded-full border-2 flex items-center justify-center w-20 h-20 transition-all
                    ${selectedHalfBracelet === option.id || (option.id === 'none' && !selectedHalfBracelet)
                      ? 'border-black bg-gray-100'
                      : 'border-gray-200 hover:border-gray-300'}`}
                  onClick={() => toggleHalfBracelet(option.id)}
                >
                  <div className="w-10 h-10 relative">
                    <Image
                      src={option.image}
                      alt={option.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
                <span className="text-sm mt-2 text-center">{option.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Review */}
      {step === 4 && (
        <div>
          <h3 className="font-medium mb-4">Review Your Bracelet</h3>
          {/* Add your review content here */}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => {handlePrevious(); setSelectedCharm(null);}}
          disabled={step === 1}
          className={`px-5 py-2 text-black font-semibold tracking-wide text-lg transition-colors ${
            step === 1 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'text-black hover:text-white hover:bg-black border-2'
          }`}
        >
          {step > 1 ? `Previous: ${stepNames[step - 1]}` : "Previous"}
        </button>
        
        <button
          onClick={() => {handleNext(); setSelectedCharm(null);}}
          className={`px-5 py-2 text-white font-semibold tracking-wide text-lg transition-colors ${
            step === 4 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-black hover:text-black hover:bg-white border-2'
          }`}
        >
          {step < 4 ? `Next: ${stepNames[step + 1]}` : 'Complete Order'}
        </button>
      </div>
    </div>
  );
};

export default ComponentSelector;