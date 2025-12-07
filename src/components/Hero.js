import HeroImg from '../assets/my photo.jpg';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer ',
        social: {
            
            github: 'https://github.com/AarthiArikrishnan',
            linkedin: 'https://www.linkedin.com/in/aarthi-a-arikrishnan2003'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'></span> A.Aarthi
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                {/* <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a> */}
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
      <img className="hero-img w-40 h-40 md:w-60 md:h-80" src={HeroImg} />

    </section>
}
