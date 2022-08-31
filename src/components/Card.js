import React from 'react'

const Card = ({ username, number, img, state, sub, text, bg_border }) => {
    return (
        <div className={`p-6 bg-light_card dark:bg-darkbg-card rounded flex justify-center items-center flex-col relative overflow-hidden before:contents" " before:w-full before:h-1 before:top-0 before:left-0 before:absolute  hover:bg-slate-200 hover:cursor-pointer transition-all ${bg_border}`} >
            <div className='flex items-center'>
                <img src={img} alt="" />
                <span className='ml-2 dark:text-gray-500'>{username}</span>
            </div>
            <h5 className='mt-3 text-[50px] font-bold dark:text-white'>{number}</h5>
            <p className=' text-gray-500 font-semibold uppercase text-sm'>{text}</p>
            {
                state === 'up' ?
                    <div className='flex items-center mt-4'><img src="/images/icon-up.svg" alt="" /><span className='text-sm text-green-600 font-semibold '>{sub}</span></div>
                    :
                    <div className='flex items-center mt-4'><img src="/images/icon-down.svg" alt="" /><span className='text-sm text-red-600 font-semibold'>{sub}</span></div>
            }
        </div >
    )
}

export default Card