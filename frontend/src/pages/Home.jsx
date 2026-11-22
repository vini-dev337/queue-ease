import React from 'react'
import Searchcard from '../components/Searchcard'
import Chips from '../components/Chips'
import Buttons from '../components/Buttons'

const Home = () => {
  return (
    <main className='w-full min-h-dvh flex items-center justify-center p-4 pb-32'>
      <section className='w-230 h-120 bg-white flex flex-col gap-15 p-4'>
        <div className='text-center flex flex-col gap-3'>
          <h1 className='text-5xl font-bold text-blue-950 pt-5'>Healthcare, without the wait.</h1>
          <p className='text-slate-500'>Book tests, track your turn and get your reports, all in one place.</p>
        </div>

        <Searchcard />
        <Buttons text="Find Slot"/>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          <span className='text-slate-500'>Popular</span>
          <Chips text="Ultrasound" />
          <Chips text="X-ray" />
          <Chips text="Blood test" />
        </div>
      </section>
    </main>
  )
}

export default Home