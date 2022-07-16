import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import { Chip, DropDown } from '.';
import { useState } from 'react'


const Card = () => {

    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <section className='card bg-white rounded-md p-4 flex flex-col gap-4 group'>

            <div className='flex gap-2 items-center'>

                <div className="flex gap-2 flex-wrap flex-1">
                    {/* <Chip text='frontend' color='green' bgColor='' /> */}
                    <Chip text='frontend' color='green' bgColor='' close />
                </div>

                <div className='relative' onClick={() => setShowDropDown(pre => !pre)}>
                    <MoreHorizontal className='opacity-0 duration-200 group-hover:opacity-100 cursor-pointer' />
                    {
                        showDropDown &&
                        <DropDown text='Delete Card' onClick={() => setShowDropDown(false)} />
                    }
                </div>
            </div>

            <div className='font-bold'>
                Lorem ipsum dolor sit amet.
            </div>

            <div className='flex items-center justify-between'>
                <p className='flex items-center gap-1'><Clock className='w-4 inline' /> 15 Jul</p>
                <p className='flex items-center gap-1'><CheckSquare className='w-4 inline' /> 1/4</p>
            </div>

        </section>
    )
}

export default Card