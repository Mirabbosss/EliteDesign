import Image from 'next/image';
import FooterFirstLogo from '../../../public/icons/footer-first-logo.svg';
import FooterSecondLogo from '../../../public/icons/footer-second-logo.svg';
import FooterYouTube from '../../../public/icons/footer-youtube.svg';
import FooterInstagram from '../../../public/icons/footer-instagram.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-black'>
      <div className="container max-w-[1440px] w-full mx-auto px-[17px]  py-[30px] sm:py-[21px] select-none">
        <nav className='text-white text-center sm:text-start font-normal text-[12px] md:text-[14px]'>
          <ul className='grid grid-cols-1 gap-y-5 gap-x-3 sm:flex sm:items-center justify-between'>
            <li className='flex justify-between max-w-[200px] sm:max-w-[310px] mx-auto sm:mx-0 w-full'>
              <Link href='/'>
                <Image src={FooterFirstLogo} width={45} height={55} alt='logo' className='sm:w-[72px] sm:h-[90px]' />
              </Link>

              <Link href=''>
                <Image src={FooterSecondLogo} width={79} height={56} alt='logo' className='sm:[120px] sm:h-[90px]' />
              </Link>
            </li>

            <li>
              <p>34, Christaki Kranou, Limassol, CY 4041</p>
              <p>P.O. Box 55209, 3820, Limassol, Cyprus</p>
            </li>

            <li>
              <a href='tel: +35725321600' className='hover:text-blue-400'>Tel.: +357 25 321 600</a>
            </li>

            <li className='flex justify-between gap-5 max-w-[68px] w-full mx-auto sm:mx-0'>
              <Link href='https://www.youtube.com/' legacyBehavior>
                <a target='_blank'>
                  <Image src={FooterYouTube} width={24} height={24} alt='logo' className='hover:scale-90 duration-200' />
                </a>
              </Link>

              <Link href='https://www.instagram.com/' legacyBehavior>
                <a target='_blank'>
                  <Image src={FooterInstagram} width={24} height={24} alt='logo' className='hover:scale-90 duration-200' />
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <p className='text-white text-center font-normal text-[12px] md:text-[14px] mt-8'>© 2024</p>
      </div>
    </footer>
  )
}