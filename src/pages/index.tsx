import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const BGImage = dynamic(() => import("../components/atoms/backgroundImage"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>jasalova</title>
        <meta name="description" content="jasalova builds what you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'relative h-screen w-full'}>
        <main className={'container absolute z-10 w-full h-full top-0 right-0 left-0 mt-[10vh]'}>
          <h1 className={'text-white text-[40px] md:text-[60px] text-center font-poppins'}>
            welcome to <span className={'text-[#24c4f5f7]'}>jasa</span>lova!
          </h1>

          <div className={'text-center text-white font-poppins font-thin'}>
            we build what you need
          </div>
          <div className={'grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 text-white text-center mt-[40vh] md:mt-[60vh]'}>
            <div className={'flex justify-center'}>
              <div className={'bg-gray-500 hover:bg-white hover:text-black bg-opacity-30 w-full md:w-2/3 h-16 leading-16 rounded-md font-poppins cursor-pointer'}>personal website</div>
            </div>
            <div className={'flex justify-center'}>
              <div className={'bg-gray-500 hover:bg-white hover:text-black bg-opacity-30 w-full md:w-2/3 h-16 leading-16 rounded-md font-poppins cursor-pointer'}>company website</div>
            </div>
            <div className={'flex justify-center'}>
              <div className={'bg-gray-500 hover:bg-white hover:text-black bg-opacity-30 w-full md:w-2/3 h-16 leading-16 rounded-md font-poppins cursor-pointer'}>marketplace</div>
            </div>
            <div className={'flex justify-center'}>
              <div className={'bg-gray-500 hover:bg-white hover:text-black bg-opacity-30 w-full md:w-2/3 h-16 leading-16 rounded-md font-poppins cursor-pointer'}>custom website</div>
            </div>
          </div>
        </main>

        <BGImage />
      </div>

      <div className={'relative h-screen w-full'}>
        <main className={'container absolute z-10 w-full h-full top-0 right-0 left-0 flex flex-col justify-center'}>
          <h1 className={'mb-5 text-2xl'}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <div>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
