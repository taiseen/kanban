import { useBoardCardContext } from '../context/BoardCardContext';
import { Card, AddBtn, DeleteDropDown } from '.';
import { MoreHorizontal } from 'react-feather'
import { useState } from 'react';


const Board = ({ board }) => {

    const { removeBoard, addCard } = useBoardCardContext();
    const [showDeleteDropDown, setShowDeleteDropDown] = useState(false);


    return (
        <section className='w-80 p-4 bg-white flex flex-col gap-5 rounded-md'>

            {/* Board Head */}
            <div className='flex items-center'>

                <p className='flex-1 text-xl font-bold'>
                    {board?.title} &nbsp;
                    <span className='text-gray-400'>
                        {board?.cards?.length}
                    </span>
                </p>

                {/* 🟥🟥🟥 For ==> Board Delete 🟥🟥🟥 */}
                <div className='relative z-10' onClick={() => setShowDeleteDropDown(pre => !pre)}>
                    <MoreHorizontal className='cursor-pointer' />
                    {
                        showDeleteDropDown &&
                        <DeleteDropDown
                            text='Delete Board'
                            itemDelete={() => removeBoard(board?.id)}
                        />
                    }
                </div>

            </div>



            {/* 🟨🟨🟨 Board Body & Loop Card Array + Add Card Btn 🟨🟨🟨 */}
            <div className='customScroll bg-gray-200 rounded-md p-2 flex flex-col gap-2 overflow-y-auto'>
                {
                    board?.cards?.map(card => <Card key={card?.id} card={card} boardId={board?.id} />)
                }
                <AddBtn
                    text='+ Add Card'
                    placeHolder='Enter Card Title'
                    bgHover='hover:bg-[#efe]'
                    onSubmit={title => addCard(title, board?.id)}
                />
            </div>

        </section>
    )
}

export default Board