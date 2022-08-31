import React from 'react'

const CardSmall = ({ img, number, text, subscipe, state }) => {
    return (
        <div className={`p-6 bg-light_card dark:bg-darkbg-card rounded  relative overflow-hidden   hover:bg-slate-200 hover:cursor-pointer transition-all `} >
            <div className='flex justify-between items-center'>
                <p className=' text-gray-500 font-semibold  text-sm'>{text}</p>
                <img src={img} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                <h5 className='mt-3 text-[35px] font-bold dark:text-white'>{number}</h5>
                {
                    state === 'up' ?
                        <div className='flex items-center mt-4'><img src="/images/icon-up.svg" alt="" /><span className='text-sm text-green-600 font-semibold '>{subscipe}</span></div>
                        :
                        <div className='flex items-center mt-4'><img src="/images/icon-down.svg" alt="" /><span className='text-sm text-red-600 font-semibold'>{subscipe}</span></div>
                }
            </div>

        </div >

    )
}

export default CardSmall