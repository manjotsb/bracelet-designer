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
  {type:'elephant', name:'Elephant', icon: '/clasp/elephant.png' },
];

export const CHARM_TYPES = [
  { 
    type: 'green', 
    name: 'Green Series', 
    icon: '/charms/green/flower.png',
    variants: [
      { id: 'flower', name: 'Flower', icon: '/charms/green/flower.png', price:14 },
      { id: 'heart', name: 'Heart', icon: '/charms/green/heart.png', price:14 },
      { id: 'oval', name: 'Oval', icon: '/charms/green/oval.png', price:14 },
      { id: 'oval2', name: 'Oval 2', icon: '/charms/green/oval2.png', price:14 },
      { id: 'shape', name: 'Shape', icon: '/charms/green/shape.png', price:14 },
    ]
  },
  { 
    type: 'amethyst', 
    name: 'Amethyst Series', 
    icon: '/charms/amethyst/amethyst.png',
    variants: [
      { id: 'amethyst', name: 'Amethyst', icon: '/charms/amethyst/amethyst.png', price:17 },
      { id: 'circle', name: 'Circle', icon: '/charms/amethyst/circle.png', price:17 },
      { id: 'oval', name: 'Oval', icon: '/charms/amethyst/oval.png', price:17 },
      { id: 'oval2', name: 'Oval 2', icon: '/charms/amethyst/oval2.png', price:17 },
    ]
  },
  { 
    type: 'aqua-marine', 
    name: 'Aqua Marine Series', 
    icon: '/charms/aqua-marine/circle.png',
    variants: [
      { id: 'circle', name: 'Circle', icon: '/charms/aqua-marine/circle.png', price:13 },
      { id: 'tower', name: 'Tower', icon: '/charms/aqua-marine/tower.png', price:13 },
    ]
  },
  { 
    type: 'blue-topaz', 
    name: 'Blue Topaz Series', 
    icon: '/charms/blue-topaz/bow.png',
    variants: [
      { id: 'bow', name: 'Bow', icon: '/charms/blue-topaz/bow.png', price:15 },
      { id: 'circle', name: 'Circle', icon: '/charms/blue-topaz/circle.png', price:15 },
      { id: 'circle2', name: 'Circle 2', icon: '/charms/blue-topaz/circle2.png', price:15 },
      { id: 'clover', name: 'Clover', icon: '/charms/blue-topaz/clover.png', price:15 },
      { id: 'oval', name: 'Oval', icon: '/charms/blue-topaz/oval.png', price:15 },
    ]
  },
  { 
    type: 'red', 
    name: 'Red Series', 
    icon: '/charms/red/bead.png',
    variants: [
      { id: 'bead', name: 'Bead', icon: '/charms/red/bead.png', price:5 },
      { id: 'heart', name: 'Heart', icon: '/charms/red/heart.png', price:19 },
      { id: 'square', name: 'Square', icon: '/charms/red/square.png', price:19 },
      { id: 'square2', name: 'Square 2', icon: '/charms/red/square2.png', price:19 },
      { id: 'star', name: 'Star', icon: '/charms/red/star.png', price:19 },
    ]
  },
  { 
    type: 'pearl', 
    name: 'Pearl Series', 
    icon: '/charms/pearl/circle.png',
    variants: [
      { id: 'circle', name: 'Circle', icon: '/charms/pearl/circle.png', price:14 },
      { id: 'circle2', name: 'Circle 2', icon: '/charms/pearl/circle2.png', price:14 },
      { id: 'circle3', name: 'Circle 3', icon: '/charms/pearl/circle3.png', price:19 },
      { id: 'flower', name: 'Flower', icon: '/charms/pearl/flower.png', price:14 },
      { id: 'heartCrown', name: 'Heart Crown', icon: '/charms/pearl/heartCrown.png', price:19 },
      { id: 'butterfly', name: 'Butterfly', icon: '/charms/pearl/butterfly.png', price:19 },
      { id: 'pearl', name: 'Pearl', icon: '/charms/pearl/pearl.png', price:3 },
      { id: 'hexagon', name: 'Hexagon', icon: '/charms/pearl/hexagon.png', price:14 },
      { id: 'rabbit', name: 'Rabbit', icon: '/charms/pearl/rabbit.png', price:19 },
    ]
  },
  { 
    type: 'extra', 
    name: 'Extras', 
    icon: '/charms/extra/amberHeart.png',
    variants: [
      { id: 'amberHeart', name: 'Amber Heart', icon: '/charms/extra/amberHeart.png', price:12 },
      { id: 'amazonite', name: 'Amazonite', icon: '/charms/extra/amazonite.png', price:4 },
      { id: 'laminarCircle', name: 'Laminar Circle', icon: '/charms/extra/laminarCircle.png', price:12 },
      { id: 'moonstoneClover', name: 'Moonstone Clover', icon: '/charms/extra/moonstoneClover.png', price:12 },
    ]
  },
  { 
    type: 'lapis-lazuli', 
    name: 'Lapis Lazuli Series', 
    icon: '/charms/lapis-lazuli/circle.png',
    variants: [
      { id: 'circle', name: 'Circle', icon: '/charms/lapis-lazuli/circle.png', price:11 },
      { id: 'clover', name: 'Clover', icon: '/charms/lapis-lazuli/clover.png', price:11 },
      { id: 'oval', name: 'Oval', icon: '/charms/lapis-lazuli/oval.png', price:11 },
      { id: 'square', name: 'Square', icon: '/charms/lapis-lazuli/square.png', price:11 },
      { id: 'tear', name: 'Tear', icon: '/charms/lapis-lazuli/tear.png', price:11 },
    ]
  },
  { 
    type: 'opal', 
    name: 'Opal Series', 
    icon: '/charms/opal/clover.png',
    variants: [
      { id: 'clover', name: 'Clover', icon: '/charms/opal/clover.png', price:15 },
      { id: 'oval', name: 'Oval', icon: '/charms/opal/oval.png', price:15 },
      { id: 'star', name: 'Star', icon: '/charms/opal/star.png', price:15 },
    ]
  },
  { 
    type: 'pink', 
    name: 'Pink Series', 
    icon: '/charms/pink/clover.png',
    variants: [
      { id: 'clover', name: 'Clover', icon: '/charms/pink/clover.png', price:12 },
      { id: 'oval', name: 'Oval', icon: '/charms/pink/oval.png', price:21 },
      { id: 'flower', name: 'Flower', icon: '/charms/pink/flower.png', price:21 },
      { id: 'heartCrown', name: 'Heart Crown', icon: '/charms/pink/heartCrown.png', price:21 },
      { id: 'doubleHeart', name: 'Double Heart', icon: '/charms/pink/doubleHeart.png', price:21 },
    ]
  },
  { 
    type: 'AgarWood', 
    name: 'AgarWood Series', 
    icon: '/charms/wood/circle.png',
    variants: [
      { id: 'circle', name: 'Circle', icon: '/charms/wood/circle.png', price:11 },
      { id: 'cylinder', name: 'Cylinder', icon: '/charms/wood/cylinder.png', price:11 },
      { id: 'cylinder2', name: 'Cylinder 2', icon: '/charms/wood/cylinder2.png', price:11 },
      { id: 'oval', name: 'Oval', icon: '/charms/wood/oval.png', price:11 },
      { id: 'square', name: 'Square', icon: '/charms/wood/square.png', price:11 },
    ]
  },
];

const ComponentSelector = ({
  step,
  setStep,
  selectedTassel,
  tasselOptions,
  setSelectedTassel,
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
  placedCharms,
  selectedColor,
}) => {
  const handleNext = () => step < 5 && setStep(step + 1);
  const handlePrevious = () => step > 1 && setStep(step - 1);

  const getCharmImage = (charm) => {
    const variant = charmVariants[charm.type];
    const defaultVariant = charm.variants[0].id;
    const variantToUse = variant || defaultVariant;
    
    const selectedVariant = charm.variants.find(v => v.id === variantToUse);
    return selectedVariant ? selectedVariant.icon : charm.icon;
  };

  // Calculate total price for review
  const totalPrice = () => {
    let price = 60; // Base price

    // Add half-bracelet price
    if (selectedHalfBracelet) {
      const halfBracelet = halfBraceletOptions.find(option => option.id === selectedHalfBracelet);
      if (halfBracelet) {
        price += halfBracelet.price;
      }
    }

    // Add placed charms prices
    placedCharms.forEach(charm => {
      if (charm.type && charm.variant) {
        const charmType = CHARM_TYPES.find(c => c.type === charm.type);
        if (charmType) {
          const variant = charmType.variants.find(v => v.id === charm.variant);
          if (variant) {
            price += variant.price;
          }
        }
      }
    });

    return price;
  };

  // Get charm details for review
  const getCharmDetails = () => {
    const details = [];
    placedCharms.forEach((charm, index) => {
      if (charm.type && charm.variant) {
        const charmType = CHARM_TYPES.find(c => c.type === charm.type);
        if (charmType) {
          const variant = charmType.variants.find(v => v.id === charm.variant);
          if (variant) {
            details.push({
              name: `${charmType.name} - ${variant.name}`,
              price: variant.price,
              icon: variant.icon,
            });
          }
        }
      }
    });
    return details;
  };

  // Get clasp details
  const getClaspDetails = () => {
    if (stringType.endsWith('no-clasp')) {
      return { name: 'No Clasp', price: 0 };
    }
    const clasp = CLASP_TYPES.find(c => c.type === claspType);
    return { name: clasp ? clasp.name : 'None', price: 0 };
  };

  // Get half-bracelet details
  const getHalfBraceletDetails = () => {
    if (!selectedHalfBracelet || selectedHalfBracelet === 'none') {
      return { name: 'None', price: 0 };
    }
    const halfBracelet = halfBraceletOptions.find(option => option.id === selectedHalfBracelet);
    return halfBracelet ? { name: halfBracelet.name, price: halfBracelet.price } : { name: 'None', price: 0 };
  };

  // Get tassel details
  const getTasselDetails = () => {
    if (!selectedTassel || !stringType.endsWith('with-clasp')) {
      return { name: 'None', price: 0 };
    }
    const tassel = tasselOptions.find(t => t.id === selectedTassel);
    return tassel ? { name: tassel.name, price: 0 } : { name: 'None', price: 0 };
  };

  // Get color name for display
  const getColorName = () => {
    const colors = {
      blue: 'Blue',
      cyan: 'Cyan',
      gold: 'Gold',
      pearl: 'Pearl',
      pink: 'Pink',
      purple: 'Purple',
      white: 'White',
    };
    return colors[selectedColor] || 'None';
  };

  return (
    <div className="space-y-6 text-black">
      {/* Step 1: String and Clasp Selection */}
      {step === 1 && (
        <div>
          <StringSelector 
            selectedString={stringType}
            selectedColor={selectedColor}
            onSelect={setStringType}
          />
          
          <div className="mt-4">
            <h3 className="font-medium mb-2">Clasp Style</h3>
            <div className="grid h-[210px] overflow-auto grid-cols-4 gap-4">
              {CLASP_TYPES.map((clasp) => (
                <button
                  key={clasp.type}
                  className={`p-2 rounded-md border-2 flex flex-col items-center transition-colors
                    ${claspType === clasp.type ? 'border-black bg-gray-100' : 'border-gray-200'}
                    ${stringType.endsWith('no-clasp') ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-300'}`}
                  onClick={() => stringType.endsWith('no-clasp') || setClaspType(clasp.type)}
                  disabled={stringType.endsWith('no-clasp')}
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
          <div className="grid h-[220px] overflow-auto grid-cols-4 gap-4">
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
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
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
                      <p className='text-sm mt-2'>${variant.price}</p>
                    </button>
                  ))}
              </div>
            </div>
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
                <span className="text-sm mt-2 text-center">${option.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Select Tassel */}
      {step === 4 && (
        <div>
          <h3 className="font-medium mb-4">Select Tassel</h3>
          {stringType.endsWith('no-clasp') ? (
            <p className="text-gray-500">Tassels are only available with clasp bracelets.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {tasselOptions.map((tassel) => (
                <button
                  key={tassel.id}
                  onClick={() => setSelectedTassel(tassel.id)}
                  className={`p-3 rounded-lg border-2 flex flex-col items-center transition-all ${
                    selectedTassel === tassel.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-12 h-12 relative">
                    <Image
                      width={30}
                      height={30}
                      src={tassel.image}
                      alt={tassel.name}
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 text-sm">{tassel.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step 5: Review */}
      {step === 5 && (
        <div>
          <h3 className="font-medium mb-4">Review Your Bracelet</h3>
          <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
            {/* String and Clasp */}
            <div>
              <h4 className="font-semibold text-gray-700">String and Clasp</h4>
              <p className="text-sm">
                String: {stringType.endsWith('with-clasp') ? 'With Clasp' : 'No Clasp'} ({getColorName()}) ($60)
              </p>
              <p className="text-sm">
                Clasp: {getClaspDetails().name} ($0)
              </p>
            </div>

            {/* Charms */}
            <div>
              <h4 className="font-semibold text-gray-700">Charms</h4>
              {getCharmDetails().length > 0 ? (
                <ul className="space-y-2">
                  {getCharmDetails().map((charm, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-8 h-8 relative">
                        <Image
                          src={charm.icon}
                          alt={charm.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm">
                        {charm.name} (${charm.price})
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No charms selected</p>
              )}
            </div>

            {/* Half Bracelet */}
            <div>
              <h4 className="font-semibold text-gray-700">Half Bracelet</h4>
              <p className="text-sm">
                {getHalfBraceletDetails().name} (${getHalfBraceletDetails().price})
              </p>
            </div>

            {/* Tassel */}
            <div>
              <h4 className="font-semibold text-gray-700">Tassel</h4>
              <p className="text-sm">
                {getTasselDetails().name} ($0)
              </p>
            </div>

            {/* Total Price */}
            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-700">
                Total Price: ${totalPrice().toFixed(2)}
              </h4>
            </div>
          </div>
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
          {step > 1 ? `Previous ` : "Previous"}
        </button>
        
        <button
          onClick={() => {handleNext(); setSelectedCharm(null);}}
          className={`px-5 py-2 text-white font-semibold tracking-wide text-lg transition-colors ${
            step === 5 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-black hover:text-black hover:bg-white border-2'
          }`}
        >
          {step < 5 ? `Next` : 'Complete Order'}
        </button>
      </div>
    </div>
  );
};

export default ComponentSelector;