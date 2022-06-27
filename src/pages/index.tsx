import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import ReactJS from '../assets/home/tech-stack/ReactJS.png'
import NextJS from '../assets/home/tech-stack/NextJS.png'
import VueJS from '../assets/home/tech-stack/VueJS.png'
import NuxtJS from '../assets/home/tech-stack/NuxtJS.svg'
import JS from '../assets/home/tech-stack/JS.png'
import TypeScript from '../assets/home/tech-stack/Typescript.png'
import TailwindCSS from '../assets/home/tech-stack/TailwindCSS.png'
import OurTechStack from '../components/molecules/our-tech-stack'

const BGImage = dynamic(() => import("../components/atoms/background-image"), {
  ssr: false,
});

const Home: NextPage = () => {
  const frontendStacks = [
    {
      name: 'React JS',
      logo: ReactJS
    },
    {
      name: 'Next JS',
      logo: NextJS,
      width: 30,
      height: 15,
    },
    {
      name: 'Vue JS',
      logo: VueJS,
      width: 30,
      height: 15,
    },
    {
      name: 'Nuxt JS',
      logo: NuxtJS,
    },
    {
      name: 'JavaScript',
      logo: JS,
      width: 30,
      height: 15,
    },
    {
      name: 'TypeScript',
      logo: TypeScript,
      width: 30,
      height: 15,
    },
    {
      name: 'TailwindCSS',
      logo: TailwindCSS,
      width: 30,
      height: 15,
      paddingX: 5
    }
  ]
  return (
    <div>
      <Head>
        <title>jasalova</title>
        <meta name="description" content="jasalova builds what you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-screen w-full">
        <main className="container absolute z-10 w-full h-full top-0 right-0 left-0 mt-[10vh]">
          <h1 className="text-white text-[40px] md:text-[60px] text-center font-poppins">
            welcome to <span className={'text-[#24c4f5f7]'}>jasa</span>lova!
          </h1>

          <div className="text-center text-white font-poppins font-thin">
            we build what you need
          </div>
          <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 xl:gap-4 text-white text-center mt-[40vh] xl:mt-[60vh]">
            <div className="flex justify-center">
              <div className="bg-gray-500 hover:bg-white hover:text-black bg-opacity-30 w-full md:w-2/3 h-16 leading-16 rounded-md font-poppins cursor-pointer">personal website</div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-500 hover:bg-white hover:text-black bg-opacity-30 w-full md:w-2/3 h-16 leading-16 rounded-md font-poppins cursor-pointer">company website</div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-500 hover:bg-white hover:text-black bg-opacity-30 w-full md:w-2/3 h-16 leading-16 rounded-md font-poppins cursor-pointer">marketplace</div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-500 hover:bg-white hover:text-black bg-opacity-30 w-full md:w-2/3 h-16 leading-16 rounded-md font-poppins cursor-pointer">custom website</div>
            </div>
          </div>
        </main>

        <BGImage />
      </div>

      <div className="relative h-screen w-full">
        <main className="container absolute z-10 w-full md:h-full top-[10vh] md:top-0 right-0 left-0 flex flex-col justify-center">
          <h1 className="mb-5 text-2xl font-poppins">
            Our Tech Stack
          </h1>

          <div className="grid sm:grid-cols-2 sm:gap-2 xl:grid-cols-4 xl:gap-4">
            <OurTechStack title="Frontend" stacks={frontendStacks}/>
            <OurTechStack title="Backend" stacks={frontendStacks}/>
            <OurTechStack title="Design" stacks={frontendStacks}/>
            <OurTechStack title="Server" stacks={frontendStacks}/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
