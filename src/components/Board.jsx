import { useBoardCardContext } from '../context/BoardCardContext';
import { useEffect, useRef, useState } from 'react';
import { Card, AddBtn, DeleteDropDown } from '.';
import { MoreHorizontal } from 'react-feather'


const Board = ({ board }) => {

    const dropDownRef = useRef();
    const { removeBoard, addCard } = useBoardCardContext();
    const [showDeleteDropDown, setShowDeleteDropDown] = useState(false);


    // for closing drop down, have no button, so for auto close, need this mechanism 
    // when we click outside or drop down little window, then drop down will be close.
    // so that outer click listen by this handleClick function
    const handleClick = e => {
        // 🧐🧐🧐 track out-side of click... & ❌❌❌ close this div...
        if (!dropDownRef?.current?.contains(e.target)) setShowDeleteDropDown(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        // unMounting time, remove this eventListener
        return () => document.removeEventListener('click', handleClick);
    }, []);



    return (
        <section className='h-full w-80 p-4 bg-white flex flex-col gap-5 rounded-md'>

            {/* Board Head */}
            <div className='flex items-center justify-between'>

                <p className='text-xl font-bold'>
                    {board?.title} &nbsp;
                    <span className='text-gray-400'>
                        {board?.cards?.length}
                    </span>
                </p>

                {/* 🟥🟥🟥 For ==> Board Delete 🟥🟥🟥 */}
                <div
                    ref={dropDownRef}
                    className='relative z-10'
                    onClick={() => setShowDeleteDropDown(pre => !pre)} // by clicking On/Off toggling...
                >
                    <MoreHorizontal className='cursor-pointer hover:text-red-600 duration-200' />
                    {
                        showDeleteDropDown &&
                        <DeleteDropDown text='Board' itemDelete={() => removeBoard(board?.id)} />
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