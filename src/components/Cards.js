import React from 'react'
import CardSmall from './CardSmall'
import Card from './Card'
import { CardsInfo } from '../data/CardsInfo'
import { CaedsSmallInfo } from '../data/CaedsSmallInfo'

const Cards = () => {
    return (

        <div className='  dark:bg-darkbg-dark'>
            <div className=' container -mt-32   '>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4   '>
                    {
                        CardsInfo.map(item => {
                            return (
                                <Card
                                    username={item.username}
                                    number={item.number}
                                    img={item.img}
                                    sub={item.subscipe}
                                    text={item.text}
                                    state={item.state}
                                    bg_border={item.border_color}
                                />
                            )
                        })
                    }

                </div>
                <h5 className='my-6 text-gray-500 font-bold text-lg'>Overview - Today</h5>
                <div className=' grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4   '>

                    {
                        CaedsSmallInfo.map(item => {
                            return (

                                <CardSmall
                                    key={item.id}
                                    img={item.img}
                                    number={item.number}
                                    text={item.text}
                                    subscipe={item.subscipe}
                                    state={item.state}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}

export default Cards