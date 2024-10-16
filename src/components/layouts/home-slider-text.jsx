import React from 'react';
import StarIcon from '../../../public/icons/home-star-icon.svg'
import Image from 'next/image';

const componentName = () => {
    return (
        <div className="slider">
            <div className="slide-track flex justify-evenly items-center h-full py-[17px]">
                <div className="text-sm text-[#765579] font-bold flex gap-[30px]">
                    WE CREATE AN ATMOSPHERE OF UNIQUE RESIDENCES!

                    <Image src={StarIcon} alt='star' width={10} height={10} />
                </div>
                <div className="text-sm text-[#765579] font-bold flex gap-[30px]">
                    WE CREATE AN ATMOSPHERE OF UNIQUE RESIDENCES!

                    <Image src={StarIcon} alt='star' width={10} height={10} />
                </div>
                <div className="text-sm text-[#765579] font-bold flex gap-[30px]">
                    WE CREATE AN ATMOSPHERE OF UNIQUE RESIDENCES!

                    <Image src={StarIcon} alt='star' width={10} height={10} />
                </div>

                <div className="text-sm text-[#765579] font-bold flex gap-[30px]">
                    WE CREATE AN ATMOSPHERE OF UNIQUE RESIDENCES!

                    <Image src={StarIcon} alt='star' width={10} height={10} />
                </div>

                <div className="text-sm text-[#765579] font-bold flex gap-[30px]">
                    WE CREATE AN ATMOSPHERE OF UNIQUE RESIDENCES!

                    <Image src={StarIcon} alt='star' width={10} height={10} />
                </div>

                <div className="text-sm text-[#765579] font-bold flex gap-[30px]">
                    WE CREATE AN ATMOSPHERE OF UNIQUE RESIDENCES!

                    <Image src={StarIcon} alt='star' width={10} height={10} />
                </div>
            </div>
        </div>
    );
};

export default componentName;