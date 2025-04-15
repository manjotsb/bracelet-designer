import Image from 'next/image';
import React from 'react';
import { CHARM_TYPES } from '../ComponentSelector/page';

const BraceletPreview = ({
  stringType,
  claspType,
  selectedTassel,
  placedCharms,
  selectedCharm,
  onPositionSelect,
  selectedHalfBracelet,
  charmVariants,
  onRemoveCharm,
  halfBraceletOptions,
  step
}) => {

  const getStringImage = () => {
    return stringType === 'with-clasp'
      ? '/bracelet/bracelet-with-clasp.png'
      : '/bracelet/bracelet-no-clasp.png';
  };

  const getTasselImage = () => {
    if (!selectedTassel || stringType !== 'with-clasp') return null;
    return `/tassel/${selectedTassel}.png`; // Assuming naming pattern tassel-1.png, etc.
  };

  // Calculate tassel position (adjust these values based on your design)
  const tasselPosition = {
    x: 0,       // Horizontal adjustment
    y: 120,     // Vertical position from chain end
    rotation: 0 // Rotation adjustment
  };

  const getHalfBraceletClipPath = (type) => {
    switch(type) {
      case 'chain':
        return 'polygon(11% 0, 100% 0%, 100% 100%, 57% 90%)';
      case 'amethyst':
        return 'polygon(0% 0%, 100% 0%, 100% 100%, 35% 100%)';
      case 'pearls':
        return 'polygon(0% 0%, 100% 0%, 100% 100%, 79% 100%)';
      case 'knotted':
        return 'polygon(0% 00%, 100% 0%, 100% 100%, 70% 100%)';
      case 'beads':
        return 'polygon(0% 0%, 100% 0%, 100% 100%, 75% 100%)';
      default:
        return 'none';
    }
  }

  const getClaspImage = () => {
    if (stringType !== 'with-clasp') return null;
    
    // Return the appropriate clasp image based on claspType
    switch(claspType) {
      case 'bird': return '/clasp/bird.png';
      case 'butterfly': return '/clasp/butterfly.png';
      case 'feather': return '/clasp/feather.png';
      case 'flower': return '/clasp/flower.png';
      case 'flower2': return '/clasp/flower2.png';
      case 'plain': return '/clasp/plain.png';
      case 'regular': return '/clasp/regular.png';
      case 'tail': return '/clasp/tail.png';
      case 'elephant': return '/clasp/elephant.png';
      default: return null; // default clasp
    }
  };

  const getCharmIcon = (type, variant, rotation) => {
    if (!type) return null;
  
    // Find the charm type in CHARM_TYPES
    const charmType = CHARM_TYPES.find(c => c.type === type);
    if (!charmType) return null;
  
    // Find the specific variant or use the first one as default
    const selectedVariant = variant 
      ? charmType.variants.find(v => v.id === variant)
      : charmType.variants[0];
  
    if (!selectedVariant) return null;
  
    return (
      <Image
        src={selectedVariant.icon}
        alt={`${type} charm - ${selectedVariant.name}`}
        width={48}
        height={48}
        className="object-contain charm-image"
        style={{transform:`rotate(${rotation+5}deg)`}}
      />
    );
  };

  

  const allPositions = Array.from({ length: 14 }, (_, i) => {

    if (stringType=== 'with-clasp' && (i === 7 || i === 6)) return null;
    const startAngle = (2.86 * Math.PI) / 2;
    const angle = startAngle + (i / 14) * 2 * Math.PI;
    const radius = 143;
    const charmAngle = (angle + Math.PI / 2) * (180 / Math.PI) + 78;

    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      position: i,
      rotation: charmAngle,
    };
  }).filter(Boolean);

  const getWidth = (claspType) => {
    if (claspType === 'elephant') return 75;
    return 50;
  };

  const handlePositionClick = (position) => {
    if (!selectedCharm) return;
    if (selectedHalfBracelet && position >= 7) return;
    onPositionSelect(position);
  };

  return (
    <div className="relative flex justify-center items-center select-none">
      <div className="flex relative w-[700px] h-[700px] justify-center items-center">
        {/* Base String */}
        <div className='absolute top-[190px] left-[198px]'>
          <Image
            src={getStringImage()}
            alt="Base String"
            width={310}
            height={300}
            className=" object-contain"
            style={{transform: 'rotate(15deg)',
              clipPath: getHalfBraceletClipPath(selectedHalfBracelet),
            }}
          />
        </div>

        {/* Tassel Chain - Only shown when with-clasp is selected */}
        {stringType === 'with-clasp' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-[-115px] -translate-y-[-87px] z-5">
            <Image
              src="/tasselChain.png"  // Your single tassel chain image
              alt="Tassel Chain"
              width={25}  // Adjust to match your image dimensions
              height={20} // Adjust to match your image dimensions
              className="object-contain"
              style={{
                transform: 'rotate(-15deg)',
              }}
            />
          </div>
        )}

        {/* Tassel Position */}
        {/* Tassel Position - Only shown when with-clasp is selected */}
        {stringType === 'with-clasp' && (
          <div className={`
            absolute bottom-[90px] left-[500px] transform -translate-x-1/2
            ${step === 4 && !selectedTassel ? 'w-7 h-7 rounded-full border-2 border-red-500 ring-4 ring-red-200 animate-pulse' : ''}
            flex items-center justify-center
          `}>
            {/* Show either the tassel image or nothing */}
            {selectedTassel ? (
              <Image
                src={`/tassel/${selectedTassel}.png`}
                alt={`Tassel ${selectedTassel}`}
                width={30}
                height={60}
                rotate= {selectedTassel === 'locket' ? 10 : 0}
                className="object-contain"
              />
            ) : (
              step === 4 && (
                <div className="w-7 h-7 rounded-full border-2 border-red-500 ring-4 ring-red-200 animate-pulse"></div>
              )
            )}
          </div>
        )}


        {/* Clasp */}
        {stringType === 'with-clasp' && getClaspImage() && (
        <div className={`absolute -top-5 ${(claspType === 'butterfly' || claspType === 'flower') ? "left-[330px]" : "left-1/2"} transform ${(claspType === 'butterfly' || claspType === 'flower' || claspType === 'flower2' || claspType === 'tail') ? "translate-x-[95px] translate-y-[435px]" : "translate-x-[55px] translate-y-[465px]"} z-10`}>
          <Image
            src={getClaspImage()}
            alt={claspType}
            width={getWidth(claspType)}
            height={40}
            className="object-contain"
            style={{ transform: (claspType === 'regular' || claspType === 'bird') ? 'rotate(105deg)' : 'rotate(0deg)' }}
          />
        </div>
      )}

    {/* Charm Positions */}
    {(selectedHalfBracelet ? allPositions.slice(0, 7) : allPositions).map((slot) => {
    const charm = placedCharms[slot.position]?.type;
    const variant = placedCharms[slot.position]?.variant;

  return (
            <div
              key={slot.position}
              className={`absolute flex items-center justify-center z-10 ${
                selectedCharm ? 'cursor-pointer' : ''
              }`}
              style={{
                left: `calc(50% + ${slot.x}px)`,
                top: `calc(50% + ${slot.y}px)`,
                transform: `translate(-50%, -50%) rotate(${slot.rotation}deg)`,
                transformOrigin: 'center center',
              }}
              onClick={() => handlePositionClick(slot.position)}
            >
              {charm ? (
                <div className="relative flex items-center">
                  <div style={{ transform: `rotate(${-slot.rotation}deg)` }}>
                    {getCharmIcon(charm, variant, slot.rotation)}
                  </div>
                  {step === 2 && (
                    <button
                    className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-red-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering handlePositionClick
                        onRemoveCharm(slot.position);
                    }}
                    >
                     ×
                    </button>
                  )}
                </div>
              ) : (
                <div 
                  className={`
                    relative
                    w-7 h-7 rounded-full
                    ${step === 2 ? `
                      bg-blue-50 border-2 border-blue-500
                      ring-4 ring-blue-200
                      animate-[pulse_1.5s_ease-in-out_infinite,bounce_2s_ease-in-out_infinite]
                      hover:scale-125 hover:bg-blue-100
                    ` : `
                      border border-dashed border-gray-400
                    `}
                    transition-all duration-300
                    ${selectedCharm ? '!scale-125 !bg-blue-100' : ''}
                  `}
                >
                  {step === 2 && (
                    <>
                      {/* Subtle radial gradient */}
                      <div className="
                        absolute inset-0 rounded-full
                        bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2)_0%,transparent_80%)]
                      "/>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Half Bracelet Image */}
        {selectedHalfBracelet && selectedHalfBracelet !== 'none' && (
          <div className="absolute top-1/2 left-1/2 z-0">
            {selectedHalfBracelet === 'pearls' && (
              <div className="top-1/2 left-1/2 transform -translate-x-[182px] -translate-y-[125px] z-0">
                <Image 
                  src={halfBraceletOptions.find(o => o.id === 'pearls').image}
                  alt="Pearls"
                  width={175}
                  height={10}
                  className="object-contain"
                  style={{
                    transform: 'rotate(-22deg)',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </div>
            )}

            {selectedHalfBracelet === 'amethyst' && (
              <div className=" top-1/2 left-1/2 transform -translate-x-[165px] -translate-y-[125px] z-0">
                <Image 
                  src={halfBraceletOptions.find(o => o.id === 'amethyst').image}
                  alt='amethyst'
                  width={210}
                  height={270}
                  className="object-contain"
                  style={{
                    rotate:'-45deg',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </div>
            )}
            {selectedHalfBracelet === 'beads' && (
              <div className=" top-1/2 left-1/2 transform -translate-x-[215px] -translate-y-[140px] z-0">
                <Image 
                  src={halfBraceletOptions.find(o => o.id === 'beads').image}
                  alt='beads'
                  width={235}
                  height={220}
                  className="object-contain"
                  style={{
                    rotate:'-5deg',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </div>
            )}
            {selectedHalfBracelet === 'knotted' && (
              <div className=" top-1/2 left-1/2 transform -translate-x-[145px] -translate-y-[125px] z-0">
                <Image 
                  src={halfBraceletOptions.find(o => o.id === 'knotted').image}
                  alt='knotted'
                  width={132}
                  height={200}
                  className="object-contain"
                  style={{
                    rotate:'-20deg',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </div>
            )}
            {selectedHalfBracelet === 'chain' && (
              <div className=" top-1/2 left-1/2 transform -translate-x-[150px] -translate-y-[140px] z-0">
                <Image 
                  src={halfBraceletOptions.find(o => o.id === 'chain').image}
                  alt='chain'
                  width={185}
                  height={200}
                  className="object-contain"
                  style={{
                    rotate:'2deg',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {selectedCharm && (
        <div className="absolute bottom-0 text-center text-sm text-blue-600">
          Click on an empty position to place the {selectedCharm} charm
        </div>
      )}
    </div>
  );
};

export default BraceletPreview;