import React from 'react'
import Dropdown from './Dropdown'

const Searchcard = () => {
    return (
        <>

            <div className='grid grid-cols-3 gap-4'>
                <Dropdown label="Hospital" id="hospital" options={["Select hospital", "Hospital 1", "Hospital 2"]} />
                <Dropdown label="Test" id="test" options={["Select test", "Ultrasound", "X-ray", "Blood test"]} />
                <div className='flex flex-col gap-2'>
                    <label htmlFor="date" className='text-base font-semibold text-slate-500 pl-3'>Date</label>
                    <input id="date" type="date" className='h-12 w-full rounded-lg border border-slate-200 bg-white px-3 text-base text-slate-800' />
                </div>
            </div>
        </>
    )
}

export default Searchcard