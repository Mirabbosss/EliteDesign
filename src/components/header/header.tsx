'use client';

import Image from 'next/image';
import HeaderLogo from '../../../public/icons/header-elite-logo.svg';
import LangIcon from '../../../public/icons/header-lang-icon.svg';
import LangBottomIcon from '../../../public/icons/header-lang-bottom.svg';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('RU');

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdown(!isDropdown);
  };

  return (
    <header className="sticky sm:relative top-0 z-[1000] bg-white">
      <div className="container max-w-[1440px] w-full mx-auto px-[17px] sm:px-[30px] py-[30px] sm:py-[21px] relative">
        <nav className='flex justify-between items-center font-bold gap-[59px]'>
          <ul>
            <Link href='/' passHref>
              <Image src={HeaderLogo} quality={100} alt="logo" width='180' height='41' className='w-auto h-auto' />
            </Link>
          </ul>

          <ul className='max-w-[580px] w-full justify-between gap-[10px] hidden sm:flex'>
            <Link href='/' className={`hover:text-[#765579] ${pathname === '/' ? 'text-[#765579]' : 'text-[#AFACAC]'}`}>Главная</Link>
            <Link href='/about' className={`hover:text-[#765579] min-w-[42px] ${pathname === '/about' ? 'text-[#765579]' : 'text-[#AFACAC]'}`}>О Нас</Link>
            <Link href='/projects' className={`hover:text-[#765579] ${pathname.startsWith('/projects') ? 'text-[#765579]' : 'text-[#AFACAC]'}`}>Проекты</Link>
            <Link href='/contact' className={`hover:text-[#765579] ${pathname === '/contact' ? 'text-[#765579]' : 'text-[#AFACAC]'}`}>Контакты</Link>
          </ul>

          {/* LANG DROPDOWN */}
          <ul className='hidden sm:block relative'>
            <div>
              <button className='flex items-center gap-[6px] w-[60px]' onClick={() => setIsDropdown(!isDropdown)}>
                <Image src={LangIcon} alt='Logo' width='15' height='15' />
                <span className='font-normal text-[16px]'> {selectedLanguage} </span>
                <Image src={LangBottomIcon} alt='Logo' width='7' height='7' />
              </button>

              <div className={`absolute mt-1 w-auto border text-center ${isDropdown ? 'block' : 'hidden'} top-[20px] left-0 right-0 bg-white z-50`}>
                <div onClick={() => handleLanguageChange('RU')} className='hover:cursor-pointer hover:bg-gray-100 px-2'>RU</div>
                <div onClick={() => handleLanguageChange('ENG')} className='hover:cursor-pointer hover:bg-gray-100 px-2'>ENG</div>
              </div>
            </div>
          </ul>

          {/* Mobile Hamburger Menu */}
          <button
            className="sm:hidden flex flex-col gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-1 bg-[#765579]"></span>
            <span className="w-6 h-1 bg-[#765579]"></span>
            <span className="w-6 h-1 bg-[#765579]"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[120px] bg-white z-40 flex flex-col gap-[20px] text-center py-[20px] overflow-y-auto">
            <ul className="flex flex-col gap-[20px] mt-[25%]">
              <Link href="/" className={`hover:text-[#765579] ${pathname === '/' ? 'text-[#765579]' : 'text-[#AFACAC]'}`} onClick={() => setIsMenuOpen(false)}>Главная</Link>
              <Link href="/about" className={`hover:text-[#765579] ${pathname === '/about' ? 'text-[#765579]' : 'text-[#AFACAC]'}`} onClick={() => setIsMenuOpen(false)}>О Нас</Link>
              <Link href="/projects" className={`hover:text-[#765579] ${pathname.startsWith('/projects') ? 'text-[#765579]' : 'text-[#AFACAC]'}`} onClick={() => setIsMenuOpen(false)}>Проекты</Link>
              <Link href="/contact" className={`hover:text-[#765579] ${pathname === '/contact' ? 'text-[#765579]' : 'text-[#AFACAC]'}`} onClick={() => setIsMenuOpen(false)}>Контакты</Link>
            </ul>

            {/* LANG DROPDOWN */}
            <div className='mx-auto'>
              <div className='relative'>
                <button className='flex items-center gap-[6px] w-[60px]' onClick={() => setIsDropdown(!isDropdown)}>
                  <Image src={LangIcon} alt='Logo' width='14' height='14' />
                  {selectedLanguage}
                  <Image src={LangBottomIcon} alt='Logo' width='4' height='4' />
                </button>

                <div className={`absolute mt-1 w-auto border text-center ${isDropdown ? 'block' : 'hidden'} top-[20px] left-0 right-0 bg-white z-50`}>
                  <div onClick={() => handleLanguageChange('RU')} className='hover:cursor-pointer hover:bg-gray-100 px-2'>RU</div>
                  <div onClick={() => handleLanguageChange('ENG')} className='hover:cursor-pointer hover:bg-gray-100 px-2'>ENG</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}