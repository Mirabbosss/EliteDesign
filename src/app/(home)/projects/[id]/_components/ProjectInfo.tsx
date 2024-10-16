'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/ui/tabs";
import Image from "next/image";
import AboutProjectImgOne from '../../../../../../public/images/projects-project-about-img-1.png';
import AboutProjectImgTwo from '../../../../../../public/images/projects-project-about-img-2.png';
import AboutProjectImgThree from '../../../../../../public/images/projects-project-about-img-3.png';
import LayoutsImg1 from '../../../../../../public/images/projects-layouts-1-img.png';
import LayoutsImg2 from '../../../../../../public/images/projects-layouts-2-img.png';
import LayoutsImg3 from '../../../../../../public/images/projects-layouts-3-img.png';
import LayoutsImg4 from '../../../../../../public/images/projects-layouts-4-img.png';
import GalleryImgOne from '../../../../../../public/images/projects-gallery-img-1.png';
import GalleryImgTwo from '../../../../../../public/images/projects-gallery-img-2.png';
import GalleryImgThree from '../../../../../../public/images/projects-gallery-img-3.png';
import GalleryImgFour from '../../../../../../public/images/projects-gallery-img-4.png';
import GalleryImgFiveFirst from '../../../../../../public/images/projects-gallery-img-5-1.png';
import GalleryImgFiveSecond from '../../../../../../public/images/projects-gallery-img-5-2.png';
import GalleryImgSix from '../../../../../../public/images/projects-gallery-img-6.png';
import GalleryImgSeven from '../../../../../../public/images/projects-gallery-img-7.png';
import GalleryImgEight from '../../../../../../public/images/projects-gallery-img-8.png';
import GalleryImgNine from '../../../../../../public/images/projects-gallery-img-9.png';
import GalleryImgTen from '../../../../../../public/images/projects-gallery-img-10.png';
import GalleryImgElevenFirst from '../../../../../../public/images/projects-gallery-img-11-1.png';
import GalleryImgElevenSecond from '../../../../../../public/images/projects-gallery-img-11-2.png';
import GalleryImgTwelve from '../../../../../../public/images/projects-gallery-img-12.png';
import GalleryImgThirteen from '../../../../../../public/images/projects-gallery-img-13.png';
import GalleryImgFourteen from '../../../../../../public/images/projects-gallery-img-14.png';
import GalleryImgFifteen from '../../../../../../public/images/projects-gallery-img-15.png';

export const ProjectInfo = () => {
    return (
        <div className="container max-w-[1440px] w-full mx-auto">
            <Tabs defaultValue="info" className="w-full">
                <TabsList>
                    {/* О проекте */}
                    <TabsTrigger value="info"> О проекте </TabsTrigger>

                    {/* Галерея */}
                    <TabsTrigger value="gallery"> Галерея </TabsTrigger>

                    {/* Характеристики */}
                    <TabsTrigger value="characteristics"> Характеристики </TabsTrigger>

                    {/* Планировки */}
                    <TabsTrigger value="layouts"> Планировки </TabsTrigger>

                    {/* Видео */}
                    <TabsTrigger value="video"> Видео </TabsTrigger>

                    {/* Месторасположение */}
                    <TabsTrigger value="location"> Месторасположение </TabsTrigger>
                </TabsList>

                {/* О проекте */}
                <TabsContent value="info">
                    {/* About text */}
                    <p>
                        Вдохновленная природой и передовым стилем жизни резиденция Санта Барбара - это современный дом со своей эксклюзивной матрицей.
                        С гордостью представляем дизайн этого уникального жилого проекта площадью 3260 кв.м., превышавший на момент своего строительства любой другой по уровню инноваций и роскоши на прекрасном острове Кипр. Полная реконструкция этого проекта заняла 3 года. Частично сохраняя оригинальную форму строения с добавлением дополнительного верхнего уровня “Зевс”, мы трансформировали четырехуровневое здание в уникальную 5-ти этажную виллу - имитирующую морские волны - отличительный элемент, который прослеживается также в дизайне интерьеров резиденции.
                        Нашей задачей было создать легенду, новый стиль городской резиденции и объединить с современным, экстравагантным, но удобным интерьером, где из всех жилых помещений должны открываться безграничные виды на море.
                        Заказчику было предложено 3 варианта дизайна здания и прилегающих территорий. Мы много работали над планированием внутренних помещений. Воплощенный проект является симбиозом самых интересных и практичных идей.
                        Строительство объекта полностью завершено. По желанию заказчика были изменены некоторые детали. Мебель, отделочные материалы, светильники, аксессуары, представленные в проекте, были тщательно отобраны из коллекций компании Elite Interiors (ссылка), многие предметы обстановки и оборудования были разработаны нами эксклюзивно для этой резиденции.
                        Каждый уровень имеет свое назначение и отличительный дизайн. Строительство проекта было полностью завершено в 2012 году. Некоторые детали были изменены по желаю заказчика. Представленная в проекте мебель, отделочные материалы, светильники, аксессуары были тщательно подобраны из коллекций компании Elite Interiors (ссылка), многие предметы обстановки и оборудования были эксклюзивно разработаны нами для данной резиденции.
                        Уникальный дизайн этого проекта был высоко оценен на нескольких международных конкурсах. В 2011 году на конкурсе проводимым в Лондоне международной ассоциацией EUROPEAN RESIDENTIAL PROPERTY AWARDS, проект был удостоен престижной награжды за лучший дизайн интерьера. Годом ранее, в рамках выставки и международного конкурса "AQUA-SALON. WELLNESS & SPA", проходивших в Московском выставочном центре "Крокус-Экспо", проект завоевал 1 место за лучшее решение частного бассейна и СПА.
                    </p>

                    {/* About Images */}
                    <div className="grid grid-cols-1 gap-y-[20px] sm:flex gap-x-[136px] px-[61px] pt-[50px] sm:pt-[152px]">
                        <Image src={AboutProjectImgOne} alt="project-img" />

                        <div className="flex gap-x-[30px]">
                            <Image src={AboutProjectImgTwo} alt="project-img" />

                            <Image src={AboutProjectImgThree} alt="project-img" />
                        </div>
                    </div>
                </TabsContent>

                {/* Галерея */}
                <TabsContent value="gallery">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[25px]'>
                        {/* IMAGES */}

                        <div>
                            <Image src={GalleryImgOne} width={400} height={275} alt="Image" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgTwo} width={400} height={275} alt="Image" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgThree} width={400} height={275} alt="Image" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgFour} width={399} height={513} alt="Image" style={{ width: '100%', height: '100%' }} className="max-h lg:max-h-[513px]" />
                        </div>

                        {/* 2 images */}

                        <div className="flex flex-col gap-y-6 justify-center">
                            <Image src={GalleryImgFiveFirst} width={401} height={242} alt="Image" style={{ width: '100%', height: '239px' }} />

                            <Image src={GalleryImgFiveSecond} width={401} height={242} alt="Image" style={{ width: '100%', height: '239px' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgSix} width={399} height={513} alt="Image" style={{ width: '100%', height: '100%' }} className="max-h lg:max-h-[513px]" />
                        </div>

                        <div>
                            <Image src={GalleryImgSeven} width={400} height={275} alt="Image" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgEight} width={400} height={275} alt="Image" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgNine} width={400} height={275} alt="Image" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgTen} width={399} height={513} alt="Image" style={{ width: '100%', height: '100%' }} className="max-h lg:max-h-[513px]" />
                        </div>

                        {/* 2 images */}

                        <div className="flex flex-col gap-y-6 justify-center">
                            <Image src={GalleryImgElevenFirst} width={401} height={242} alt="Image" style={{ width: '100%', height: '239px' }} />

                            <Image src={GalleryImgElevenSecond} width={401} height={242} alt="Image" style={{ width: '100%', height: '239px' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgTwelve} width={399} height={513} alt="Image" style={{ width: '100%', height: '100%' }} className="max-h lg:max-h-[513px]" />
                        </div>

                        <div>
                            <Image src={GalleryImgThirteen} width={400} height={275} alt="Image" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgFourteen} width={400} height={275} alt="Image" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div>
                            <Image src={GalleryImgFifteen} width={400} height={275} alt="Image" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </TabsContent>

                {/* Характеристики */}
                <TabsContent value="characteristics">
                    <div className="text-[16px] sm:text-[17px] font-normal">
                        <h1>Эксклюзивные характеристики объекта:</h1>

                        <ul className="mt-[30px]">
                            <li>- Панорамное термоизоляционное остекление от фирмы SANT-GOBAIN</li>
                            <li>- Эксклюзивное остекление с жидко кристаллическим потоком PRIVA- LIGHT от фирмы SANT-GOBAIN</li>
                            <li>- Зимний сад с автоматической раздвижной крышей</li>
                            <li>- Дизайнерский винный погреб в виде вырубки в скальной породе</li>
                            <li>- Полностью остекленная паровая кабина цилиндрической формы</li>
                            <li>- Снежная кабина от фирмы KLAFS</li>
                            <li>- 2 сауны: традиционная и инфракрасная от фирмы KLAFS</li>
                            <li>- Морской аквариум длиной 11 метров и емкостью 40 тонн!</li>
                            <li>- Автоматические раздвижные перегородки от фирмы KOBE</li>
                            <li>- Дополнительная кухня с профессиональным оборудованием</li>
                            <li>- Закрытый подогреваемый бассейн площадью 200м2 c флуоресцентной плиткой</li>
                            <li>- Открытый двухуровневый инфинити бассейн с панорамным акриловым стеклом</li>
                            <li>- Эксклюзивная мастер ванная чаша на заказ с прозрачными стенками</li>
                            <li>- Эксклюзивное авторское напольное покрытие из ламинированного стекла с цифровой печатью</li>
                            <li>- Эксклюзивная мастер гардеробная из цветного гнутого стекла</li>
                            <li>- Подвальный этаж для размещения персонала</li>
                        </ul>
                    </div>
                </TabsContent>

                {/* Планировки */}
                <TabsContent value="layouts">
                    {/* Text */}
                    <p>
                        Уровень «Зевс» (верхний уровень резиденции) - Представляет стихии огня и воды, их превосходство, поддержку и власть. <br /> Футуристическое пространство 240 кв.м. – спальня хозяев - сконцентрировано вокруг огромной круглой кровати. Экстравагантная ванная в виде аквариума, позволяет любоваться бесконечными видами на морские просторы. <br /> В спальне расположен салон отдыха с круглым диваном, рабочий стол, просторные гардеробные с раздвижными дверями из гнутого цветного стекла, мини-кухня, две полностью оборудованные ванные комнаты. Главная ванная оснащена инфракрасной сауной и имеет панорамный вид на курорт. Остекление этой ванной позволяет хозяину сохранить приватность, используя специальное свойство стекол – становиться матовыми с помощью технологии PRIVA-LITE. <br /><br /> Уровень «Гермес» (четвертый уровень) - Олицетворяет гостеприимство и деловой успех своего владельца. <br /> Открытое мобильное пространство площадью 700 кв.м. которое за несколько секунд может трансформироваться в отдельную кухню, столовую на 20 человек и салон-гостиную. Использование автоматических стеклянных перегородок легко адаптирует помещение к различным потребностям его владельца, будь то официальный обед, конференция, фуршет или тихий ужин при свечах. Пол в обеденной зоне изготовлен в Австрии по индивидуальной технологии печати на стекле, что придает помещению непередаваемую атмосферу свободного парения в пространстве. На этом же уровне находится кабинет, оборудованный для работы и официальных встреч. <br /> Уровень «Аполлон» (третий уровень) - посвящен красоте и покровительству искусства, поэзии и музыке. <br /> Этот уровень предназначен для отдыха и удовольствия. Здесь расположились просторный кинотеатр – он же музыкальный салон с роялем; "лабиринт " – чарующее сплетение изогнутых полупрозрачных перегородок, тропических растений, журчащих водопадов, сформированных вокруг цилиндрического аквариума с морской водой – места для минут уединения и медитации. Бильярдный зал со стеклянным игровым столом имеет вид на переливной открытый бассейн. На этом уровне расположены три гостевые спальни с отдельным входом, каждая из которых имеет просторную ванную комнату и выход на галерею, ведущую к открытому плавательному бассейну. <br /><br /> SPA УРОВЕНЬ «Посейдон» (второй уровень) - ассоциирован с природным оазисом, который в сочетании с современной технологией задает новые категории интегрированного подхода к релаксации. <br /> СПА площадью 1200 кв.м может соперничать с любым профессиональным центром. Здесь есть все для полноценного отдыха: крытый бассейн площадью 200 кв.м с отдельными купелями; сауна, отделанная рельефной доской из каменной сосны и термически обработанным деревом аббачи; экстравагантная паровая- стеклянный гейзер; впервые смонтированная на Кипре снежная кабина; 2 массажных кабинета ; комнаты для переодеваний; зона отдыха с баром. <br /> Но самая главная особенность этого уровня – 40-тонный океанский аквариум в полный рост человека с плавно изгибающимся обзорным стеклом, за которым разворачивается жизнь футуристического рифа, протянувшийся на 11 метров вдоль стены! <br /> Галерея с вырубленными в скале винными хранилищами соединяет СПА и Зимний сад - царство круглогодичного тропического оазиса. Автоматическая раздвижная стеклянная крыша зимнего сада обеспечивает доступ дневного света и свежего воздуха не только с зимний сад, но и в находящиеся радом тренажерный зал и игровую комнату. <br /> На этом же уровне расположены изолированные технические и складские помещения, в том числе рабочая кухня, прачечная и холодильная комната. <br /><br /> Уровень «Гефест» - нижний уровень резиденции, представляющий трудолюбие и мастерство. <br /> В подвальном уровне спланированы три отдельные спальни с ванными комнатами, готовые с комфортом разместить от 7 до 9 человек обслуживающего персонала. В каждую комнату обеспечен доступ дневного света и выход на веранду. <br /><br /> Интересное решение было найдено и для прилегающей к зданию зоны побережья. Разбитый в трех уровнях сад в минималистическом стиле не противоречит с обликом резиденции и позволяет выявить всю красоту проекта усиливая ее в зеркальных отражениях ступенчатых водных каскадов.
                    </p>


                    {/* Images */}

                    <div className="flex flex-col gap-5">
                        <Image src={LayoutsImg1} alt="image" className="md:w-full md:h-[550px]" />

                        <Image src={LayoutsImg2} alt="image" className="md:w-full md:h-[550px]" />

                        <Image src={LayoutsImg3} alt="image" className="md:w-full md:h-[550px]" />

                        <Image src={LayoutsImg4} alt="image" className="md:w-full md:h-[550px]" />
                    </div>
                </TabsContent>

                {/* Видео */}
                <TabsContent value="video">
                    <h2 className="p-5 text-center text-[24px] sm:text-[30px] md:text-[36px] text-[#765579] font-medium">Elite Design</h2>

                    <div className="video-wrapper">
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/7Kcd2f2TWJQ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-[217px] sm:h-[300px] lg:h-[500px]"
                        ></iframe>
                    </div>
                </TabsContent>

                {/* Месторасположение */}
                <TabsContent value="location">
                    <div className="max-h-[131px] h-full">
                        <p className="font-normal text-[20px] text-[#222222] text-end">Limassol</p>
                        <p className="font-normal text-[20px] text-[#222222] text-end">Limassol, Cyprus</p>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509929!2d144.9537353153167!3d-37.81627997975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e9c9%3A0x5045675218ceed30!2sYour%20Location!5e0!3m2!1sen!2sau!4v1613121187605!5m2!1sen!2sau"
                        width="100%"
                        height="365"
                        style={{ border: 0 }}
                        loading="lazy"
                        className='mt-[60px] h-[217px] sm:h-[300px] lg:h-[500px]'
                    ></iframe>
                </TabsContent>
            </Tabs>
        </div>
    );
}
