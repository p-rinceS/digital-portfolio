import Image from 'next/image'
import logo from './images/princeLogo.png'

export default function Home() {
  return (

    <div>
    <head>
<title>Prince Sonani</title>
<meta name= "description"></meta>
    </head>
 
    <main className='bg-gradient-to-b from-gray-800 to-gray-900 justify-normal'>

    <header className='bg-gray-700 bg-opacity-15 sticky top-0 z-[20] mx-auto my-auto flex w-full items-center justify-between p-8 text-white'>
    <logo />
    Header</header>


      <section className='min-h-screen'>
      <div className='flex justify-end'>

    
      {/*First navigation, resume*/}
      <nav className='flex py-3 fixed' >
      <div className='flex-1 flex justify-center'>

        <h1>
          <ul className=''>

            <li className=''> 
              <a className = "bg-gradient-to-t from-gray-600 to-gray-700 text-white px-10 py-2 rounded-md text-xs font-bold" href='#'>
                CV
              </a>
            </li>

          </ul>
        </h1>
        </div>
      </nav>

            {/*Second navigation, resume*/}
            <nav className='flex py-3 fixed' >
      <div className='flex-1 flex justify-center'>

        <h1>
          <ul className=''>

            <li className=''> 
              <a className = "bg-gradient-to-t from-gray-600 to-gray-700 text-white px-10 py-2 rounded-md text-xs font-bold" href='#'>
                CV
              </a>
            </li>

          </ul>
        </h1>
        </div>
      </nav>


      </div>
      
      
      </section>

      <section>

<h1 className= 'px-10 py-5 text-white text-center text-xl'>
  Prince Sonani
</h1>
</section>
   
    </main>

    </div>
    
  );
}
