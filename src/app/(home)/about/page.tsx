import type { FC } from 'react';
import Image from 'next/image';
import AboutIntroImg from '../../../../public/images/about-bottom-img-1.png';
import BottomFirstImg from '../../../../public/images/about-bottom-img-1.png';
import BottomSecondImgFirst from '../../../../public/images/about-bottom-img-2-1.png';
import BottomSecondImgSecond from '../../../../public/images/about-bottom-img-2-2.png';
import BottomThirdImg from '../../../../public/images/about-bottom-img-3.png';
import ButtonBgImg from '../../../../public/icons/about-button-bg-img.svg';
import Link from 'next/link';

const About: FC = () => {
    return (
        <div>
            {/* INTRO */}
            <Image src={AboutIntroImg} width={1440} height={743} className='w-full h-[210px] sm:h-[547px] md:h-[calc(100vh-136px)] bg-center' alt='Image'/>

            {/* О НАС */}
            <div className="container max-w-[1440px] w-full mx-auto">
                <div className="font-normal text-[18px] px-[10px] py-5 flex flex-col gap-[40px] mt-[50px]">
                    <p>Elite Design and Development - новое направление деятельности компании Elite Interiors LTD, которая работает на рынке Кипра с 2005 года. Задача этого направления - разработка и строительство новых концептуальных проектов для частных и общественных нужд. </p>

                    <p>Наша цель представлять на рынок эксклюзивные продукты оригинальной архитектуры и дизайна - которые являются не только комфортабельным местом проживания, но также наделены определенной философией жизни, присущей жильцам проектов премиального класса.  Это единичный продукт с тенденцией быть замеченным в огромном выборе предлагаемой на рынке недвижимости. Помимо всех сопутствующих элитному жилью комфорту, таких, как полное техническое оснащение, эстетическое содержание представлено на самом высоком уровне. Покупатели такого жилья смогут быть объединены не только общим местом проживания, но и похожим менталитетом и отношением к окружающему миру и действительности.</p>

                    <p>Для реализации наших проектов мы подбираем лучшие локации в престижных и комфортабельных районах с развитой инфраструктурой. Наш богатый опыт позволяет в каждом проекте тщательно продумывать планировки помещений и эффективную организацию общественных зон для наибольшего комфорта жильцов и гостей. Красивые входные группы, огроженная территория, просторные спальни, видовые гостиные, эргономичный кухни, высокие потолки, сантехника престижных марок, качественные
                        и проверенные временем отделочные материалы, полное техническое обеспечение включая подогрев полов, центральную систему кондиционирования, автоматизацию и систему умный дом – это неполный список оснащения наших проектов, где тщательно обдумывается каждая деталь для обеспечения вашего комфорта</p>
                </div>

                {/* IMAGES */}

                <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px] pb-[60px] px-[10px]">
                    <div>
                        <Image src={BottomFirstImg} width={400} height={513} alt="Image" objectFit='fill' style={{ width: '100%', height: '100%' }} className='grayscale-[100%] max-h lg:max-h-[513px]'/>
                    </div>

                    <div className="flex flex-col gap-8 justify-center">
                        <Image src={BottomSecondImgFirst} width={400} height={242} alt="Image" objectFit='fill' style={{ width: '100%', height: '239px' }} className='grayscale-[100%] min-w-full'/>

                        <Image src={BottomSecondImgSecond} width={400} height={242} alt="Image" objectFit='fill' style={{ width: '100%', height: '239px' }} className='grayscale-[100%] min-w-full'/>
                    </div>

                    <div>
                        <Image src={BottomThirdImg} width={400} height={513} alt="Image" objectFit='fill' style={{ width: '100%', height: '100%' }} className='grayscale-[100%] max-h lg:max-h-[513px]'/>
                    </div>
                </div>

                <div className="flex justify-end mb-[104px] pr-[10px]">
                    <Link href='/projects' legacyBehavior>
                        <button className='font-bold text-[#765579] hover:scale-95 duration-200 ' style={{
                            backgroundImage: `url(${ButtonBgImg.src})`,
                            backgroundSize: 'cover',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            textAlign: 'center',
                            width: '160px',
                        }}>
                            Все проекты
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;