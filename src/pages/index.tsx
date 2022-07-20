import type { NextPage } from 'next'
import { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { SwitchHorizontalIcon } from '@heroicons/react/solid'
import { AppDispatch } from '../context/store';
import { useDispatch } from 'react-redux';
import { get_languages } from '../context/api/translate';
import { languagesData } from '../data/languages';

const Home: NextPage = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    // dispatch(get_languages())
  }, [])




  return (
    <Layout title='Translate | Next ' content='translate app with next js, tailwind , typescript'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-let text-7xl font-bold tracking-wider underline  text-center py-10'>
          Translate
        </h1>
        <>
          <div className='flex justify-between items-center bg-gray-800 border-t-2 border-let'>
            <div className=' py-3 '>
              <label className='text-let-100 font-semibold text-xl  p-3 uppercase border-b-2 border-dev hover:bg-gray-900'>
                English
              </label>
              <label className='text-let text-xl font-semibold  p-3 uppercase hover:bg-gray-900 '>
                English
              </label>
            </div>
            <button className='hover:bg-dev-200 p-3 rounded-full'>
              <SwitchHorizontalIcon className='h-6 w-6 text-dev ' />
            </button>

            <div className='py-3'>
              <label className='text-let-100 font-semibold text-xl  p-3 uppercase border-b-2 border-dev hover:bg-gray-900'>
                English
              </label>
              <label className='text-let text-xl font-semibold  p-3 uppercase hover:bg-gray-900 '>
                English
              </label>
            </div>
          </div>

          <div className='flex'>
            <div className='w-1/2  flex flex-col  '>


              <div className='border-t border-l border-b h-60 border-slate-500'>
                <textarea placeholder='Enter text to translate' className='w-full h-full focus:outline-none   border-gray-700 bg-gray-800  text-indigo-100 p-3 text-3xl' />
              </div>

            </div>
            <div className='w-1/2  flex flex-col  '>
              <div className='border-t border-l border-b border-r h-60 bg-dark-300  border-slate-500'>
                <h1 className='w-full h-full focus:outline-none   border-gray-700  text-indigo-100 p-3 text-3xl' >
                  Translated text
                </h1>
              </div>

            </div>
          </div>
          <div className='grid grid-cols-6 gap-2 px-5 pt-10'>
            {

              languagesData.map((language, index) => {
                return (
                  <div key={index} className='text-white '>
                    <p >{language.name}</p>

                  </div>
                )
              })
            }
            <h1 className='text-red-900'>{languagesData.length}</h1>

          </div>



        </>

      </div>
    </Layout>
  )
}

export default Home
