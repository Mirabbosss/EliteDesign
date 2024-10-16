import CardBarbaraImg from '../../../../public/images/home-bg-img-barbara-1.png';
import CardGrandImg from '../../../../public/images/home-bg-img-grand-2.png';
import CardWhiteSwan from '../../../../public/images/home-bg-img-whiteswan-1.png';
import CardDote from '../../../../public/icons/projects-card-dote.svg';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { cn } from '../../../lib/utils';

interface Project {
    id: number;
    imageUrl: string | StaticImageData;
    title: string;
    description: string;
    year: number | string;
    location: string;
}

const projects: Project[] = [
    { id: 1, title: 'Santa Barbara Residence', description: 'Вдохновленная природой и передовым стилем жизни резиденция Санта Барбара - это современный дом со своей эксклюзивной матрицей. ', imageUrl: CardBarbaraImg, year: 2012, location: 'Лимассол, Кипр' },
    { id: 2, title: 'le Grand Chalet de Moniatis', description: 'Роскошный дом в традиционном альпийском стиле.', imageUrl: CardGrandImg, year: 2024, location: 'Тродос, Кипр' },
    { id: 3, title: 'Club house "White Swan', description: 'Элитный клубный дом оригинальной архитектуры.', imageUrl: CardWhiteSwan, year: 'На стадии реализации', location: 'Агиос Афанасиос, Лимассол, Кипр' },
];


const Projects = () => {
    return (
        <>
            <div className="container mx-auto max-w-[1440px] sm:px-9 sm:pt-[62px] sm:pb-[70px]">

                <div className='w-full grid grid-cols-1 gap-y-[40px] pb-[40px]'>
                    {projects?.map((project) => {
                        return (
                            // Card
                            <div key={project.id} className='flex flex-col sm:flex-row sm:even:flex-row-reverse group sm:mt-[40px] min-h-[500px] sm:min-h-[370px]'>
                                {/* LEFT */}
                                <div className='w-full sm:w-1/2'>
                                    <Image src={project.imageUrl} alt={project.title} className="bg-center" width={620} height={369} style={{ width: '100%', height: '100%' }} />
                                </div>

                                {/* RIGHT */}
                                <div className="w-full sm:w-1/2 p-[20px] sm:p-[30px]">
                                    <div className='max-h-[181px] sm:h-full max-w-[575px] w-full'>
                                        <h1 className='font-normal text-[#765579] text-[22px]'>{project.title}</h1>

                                        <p className='font-normal text-[#666666] text-[16px] mt-[22px]'>{project.description}</p>
                                    </div>

                                    <div className='flex items-center gap-[10px] justify-start group-even:justify-end font-normal text-[#404040] text-[16px] pt-[30px]'>
                                        <span>
                                            {project.location}
                                        </span>

                                        <span>
                                            <Image src={CardDote} alt='logo' />
                                        </span>

                                        <span>
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* MORE INFO */}
                                    <div className='flex group-even:justify-end'>
                                        <Link href={`/projects/${project.id}`} className={cn
                                            ("bg-cover text-[18px] text-[#765579] w-[365px] mt-[30px] flex justify-end text-right py-[10px] px-[16px] bg-[url('/icons/projects-right-card-SMbutton-bg.svg')]",
                                                // Group
                                                "group-even:justify-start group-even:bg-[url('/icons/projects-left-card-SMbutton-bg.svg')] group-even:self-end",

                                                // LG
                                                "lg:px-6 lg:w-[420px] lg:bg-[url('/icons/projects-right-card-LGbutton-bg.svg')] lg:group-even:bg-[url('/icons/projects-left-card-LGbutton-bg.svg')]",
                                                // MD
                                                "",
                                                // SM 
                                                "sm:text-[#AFACAC] sm:w-[374px] sm:bg-[url('/icons/projects-right-card-MDbutton-bg.svg')] sm:group-even:bg-[url('/icons/projects-left-card-MDbutton-bg.svg')]"
                                            )
                                        }
                                        >
                                            <span>Подробнее</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Projects;