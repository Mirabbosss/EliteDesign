'use client';

import { useState, useEffect } from 'react';
import HomeBgBarbaraFirst from '../../../../public/images/home-bg-img-barbara-1.png';
import HomeBgBarbaraSecond from '../../../../public/images/home-bg-img-barbara-2.png';
import HomeBgBarbaraThird from '../../../../public/images/home-bg-img-barbara-3.png';
import HomeBgGrandFirst from '../../../../public/images/home-bg-img-grand-1.png';
import HomeBgGrandSecond from '../../../../public/images/home-bg-img-grand-2.png';
import HomeBgGrandThird from '../../../../public/images/home-bg-img-grand-3.png';
import HomeBgWhiteSwanFirst from '../../../../public/images/home-bg-img-whiteswan-1.png';
import HomeBgWhiteSwanSecond from '../../../../public/images/home-bg-img-whiteswan-2.png';
import HomeBgWhiteSwanThird from '../../../../public/images/home-bg-img-whiteswan-3.png';
import SliderText from '../../../components/layouts/home-slider-text';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  const images = [
    HomeBgBarbaraFirst.src,
    HomeBgBarbaraSecond.src,
    HomeBgBarbaraThird.src,
    HomeBgGrandFirst.src,
    HomeBgGrandSecond.src,
    HomeBgGrandThird.src,
    HomeBgWhiteSwanFirst.src,
    HomeBgWhiteSwanSecond.src,
    HomeBgWhiteSwanThird.src,
  ];

  const totalGroups = 3;
  const groupSize = images.length / totalGroups;
  const getProgressPercentage = () => {
    const currentGroupIndex = Math.floor(currentIndex / groupSize);
    const positionInGroup = currentIndex % groupSize;
    return ((currentGroupIndex * groupSize + positionInGroup + 1) / images.length) * 100;
  };

  useEffect(() => {
    if (!isManual) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isManual, images.length]);

  const handleButtonClick = (startIndex: number) => {
    setIsManual(true);
    setCurrentIndex(startIndex);
    setTimeout(() => {
      setIsManual(false);
    }, 5000);
  };

  const currentGroup = Math.floor(currentIndex / groupSize);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          transition: 'background-image 1s ease-in-out',
        }}
        className="h-[calc(100vh-135px)] bg-cover bg-center w-full relative"
      >
        <div className="max-w-[820px] bg-[#000000E5] h-[108px] flex justify-between gap-5 absolute bottom-[35px] right-0 py-5">
          <span
            className="w-[100px] h-1 bg-[#765579] absolute top-0"
            style={{
              width: `${getProgressPercentage()}%`,
              transition: 'width 1s ease-in-out',
            }}
          ></span>

          <button
            onClick={() => handleButtonClick(0)}
            className={`px-4 hover:text-white duration-200 ${currentGroup === 0 ? 'text-white' : 'text-[#FFFFFF66]'}`}
          >
            Santa Barbara Residence
          </button>
          <button
            onClick={() => handleButtonClick(3)}
            className={`px-4 hover:text-white duration-200 border-x-[1px] border-[#FFFFFF66] ${currentGroup === 1 ? 'text-white' : 'text-[#FFFFFF66]'}`}
          >
            le Grand Chalet de Moniatis
          </button>
          <button
            onClick={() => handleButtonClick(6)}
            className={`px-4 hover:text-white duration-200 ${currentGroup === 2 ? 'text-white' : 'text-[#FFFFFF66]'}`}
          >
            Club house "White Swan"
          </button>
        </div>
      </div>

      <SliderText />
    </>
  );
}
