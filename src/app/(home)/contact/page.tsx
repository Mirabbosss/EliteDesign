import { GoogleMapsEmbed } from '@next/third-parties/google'
import ButtonBgImg from '../../../../public/icons/contact-from-button-bg-img.svg';

const Contact = () => {
    return (
        <div className="container max-w-[1440px] w-full mx-auto sm:py-[80px] md:py-[60px] lg:py-[130px]">
            {/* wrapper */}
            <div className="w-full px-[30px] pb-5 sm:pb-[60px] lg:pb-[129px]">
                <div className="grid grid-cols-1 gap-2 sm:flex justify-between max-h-[131px] h-full">
                    <div className="font-normal text-[20px] text-[#222222]">
                        <p>34, Christaki Kranou, Limassol, CY 4041</p>
                        <p>P.O. Box 55209, 3820, Limassol, Cyprus</p>
                    </div>
                    <p className="font-normal text-[20px] text-[#222222]">Tel.: +357 25 321 600</p>
                </div>
            </div>

            {/* Map */}
            {/* 
            <GoogleMapsEmbed
                apiKey="XYZ"
                height={200}
                width="100%"
                mode="place"
                q="Brooklyn+Bridge,New+York,NY"
            /> */}

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509929!2d144.9537353153167!3d-37.81627997975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e9c9%3A0x5045675218ceed30!2sYour%20Location!5e0!3m2!1sen!2sau!4v1613121187605!5m2!1sen!2sau"
                width="100%"
                height="365"
                style={{ border: 0 }}
                loading="lazy"
                className=' mt-5 md:mt-[60px] lg:mt-[60px] sm:px-[30px] h-[173px] sm:h-[365px]'
            ></iframe>

            {/* Send message */}
            <div className='grid grid-cols-1 sm:grid-cols-2 py-[30px] md:py-[80px] px-[30px]'>
                <div>
                    <p className='max-w-[537px] w-full'>Оставьте ваши контакты и мы свяжемся с вами в ближайшее время</p>
                </div>

                <div>
                    <form action="#" className='grid grid-cols-1 gap-[27px] lg:pl-[120px]'>
                        <div className='grid grid-cols-1 gap-[10px]'>
                            <label htmlFor="name" className='font-normal text-[16px] text-[#404040]'>Имя</label>
                            <input type="text" id='name' className='border border-[#404040]' style={{ outline: 'none' }} required />
                        </div>

                        <div className='grid grid-cols-1 gap-[10px]'>
                            <label htmlFor="number" className='font-normal text-[16px] text-[#404040]'>Телефон</label>
                            <input type="number" id='number' className='border border-[#404040]' style={{ outline: 'none' }} required />
                        </div>

                        <div className='flex items-center'>
                            <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            <label htmlFor="remember" className="ms-2 text-[12px] font-normal text-gray-900 dark:text-gray-300"><a href="#" className="text-[#404040] underline dark:text-blue-500">Нажимая на кнопку «Отправить» вы соглашаетесь с  политикой конфиденциальности</a>.</label>
                        </div>

                        <div className='flex justify-end md:justify-start w-full'>
                        <button className='font-bold text-[#222222] text-[18px] hover:scale-95 duration-200 mt-[58px]' style={{
                            backgroundImage: `url(${ButtonBgImg.src})`,
                            backgroundSize: 'cover',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            textAlign: 'center',
                            width: '160px',
                        }}>
                            Отправить
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;