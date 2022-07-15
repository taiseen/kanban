import React from 'react'
import { MoreHorizontal } from 'react-feather';
import Chip from './Chip';

const Card = () => {

    return (
        <section className='card bg-white rounded-md p-4 flex flex-col gap-4'>

            <div className='cardTop flex gap-2'>

                <div className="cardLabels">
                    {/* <Chip text='frontend' color='green' bgColor=''/> */}
                    < Chip text='frontend' color='green' bgColor='' close/>
                </div>

                <MoreHorizontal />
            </div>


        </section>
    )
}

export default Card