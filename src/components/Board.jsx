import { MoreHorizontal } from 'react-feather'
import { Card, Editable, DropDown } from '.';
import { useState } from 'react';


const Board = () => {

    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <section className='w-80 p-4 bg-white flex flex-col gap-5 rounded-md '>

            {/* Board Head */}
            <div className='flex items-center text-gray-800'>
                <p className='flex-1 text-xl font-bold'>To Do <span className='text-gray-400'>2</span></p>

                <div className='relative' onClick={() => setShowDropDown(pre => !pre)}>
                    <MoreHorizontal className='cursor-pointer' />
                    {
                        showDropDown &&
                        <DropDown text='Delete Board' onClick={() => setShowDropDown(false)} />
                    }
                </div>

            </div>


            {/* Board Body --- Card Holder */}
            <div className='customScroll bg-gray-200 rounded-md p-2 flex flex-col gap-2 overflow-y-auto'>
                <Card />
                <Card />



                <Editable
                    text='+ Add Card'
                    placeHolder='Enter Card Title'
                />
            </div>

        </section>
    )
}

export default Board