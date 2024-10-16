import { ProjectInfo } from "./_components/ProjectInfo";
import ProjectImg from '../../../../../public/images/home-bg-img-barbara-1.png';
import Image from 'next/image';

const Project = () => {

  return (
    <div>
      {/* INTRO IMAGE */}
      <Image src={ProjectImg} alt="project-img" className='w-full h-[210px] sm:h-[547px] md:h-[calc(100vh-135px)] bg-cover bg-center grayscale-[100%]'/>

      <div className="container max-w-[1440px] w-full mx-auto sm:py-[23px] px-3">

        <h1 className='text-[22px] sm:text-[36px] text-[#765579] font-medium text-right px-[14px] py-[10px] border-r border-b border-[#AFACAC]'>Santa Barbara Residence</h1>

        {/* ALL INFO */}
        
        <ProjectInfo />

      </div>
      
    </div>
  );
};

export default Project;
