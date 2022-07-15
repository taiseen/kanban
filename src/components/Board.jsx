import { MoreHorizontal } from 'react-feather'
import { Card } from '.';


const Board = () => {

    return (
        <section className='w-72 max-h-full p-4 bg-white flex flex-col gap-5 rounded-md'>

            {/* Board Head */}
            <div className='flex items-center text-gray-800'>
                <p className='flex-1 text-xl font-bold'>To Do <span className='text-gray-400'>2</span></p>
                <MoreHorizontal className='cursor-pointer' />
            </div>


            {/* Board Body --- Card Holder */}
            <div className='bg-gray-200 rounded-md p-2 flex flex-col gap-2 '>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>



        </section>
    )
}

export default Board