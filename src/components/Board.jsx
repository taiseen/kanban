import { useBoardCardContext } from '../context/BoardCardContext';
import { MoreHorizontal } from 'react-feather'
import { Card, Editable, DropDown } from '.';
import { useState } from 'react';


const Board = ({ board }) => {

    const { removeBoard, addCard } = useBoardCardContext();
    const [showDropDown, setShowDropDown] = useState(false);


    return (
        <section className='w-80 p-4 bg-white flex flex-col gap-5 rounded-md '>

            {/* Board Head */}
            <div className='flex items-center text-gray-800'>

                <p className='flex-1 text-xl font-bold'>
                    {board?.title} &nbsp;
                    <span className='text-gray-400'>
                        {board?.cards?.length}
                    </span>
                </p>

                {/* 🟥🟥🟥 For ==> Board Delete 🟥🟥🟥 */}
                <div className='relative' onClick={() => setShowDropDown(pre => !pre)}>
                    <MoreHorizontal className='cursor-pointer' />
                    {
                        showDropDown &&
                        <DropDown text='Delete Board' itemDelete={() => removeBoard(board?.id)} />
                    }
                </div>

            </div>



            {/* 🟨🟨🟨 Board Body & Loop Card Array + Add Card Btn 🟨🟨🟨 */}
            <div className='customScroll bg-gray-200 rounded-md p-2 flex flex-col gap-2 overflow-y-auto'>
                {
                    board?.cards?.map(card => <Card key={card.id} card={card} boardId={board?.id} />)
                }
                <Editable
                    text='+ Add Card'
                    placeHolder='Enter Card Title'
                    onSubmit={title => addCard(title, board.id)}
                />
            </div>

        </section>
    )
}

export default Board