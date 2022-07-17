import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import { useBoardCardContext } from '../context/BoardCardContext';
import { Chip, DropDown, CardInfoModal } from '.';
import { useState } from 'react'


const Card = ({ card, boardId }) => {

    const { removeCard, handleDragEnd, handleDragEnter } = useBoardCardContext();
    const [showModal, setShowModal] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);


    return (
        <section
            draggable
            onClick={() => setShowModal(true)}
            onDragEnd={() => handleDragEnd(boardId, card.id)}
            onDragEnter={() => handleDragEnter(boardId, card.id)}
            className='card bg-white rounded-md p-4 flex flex-col gap-4 group relative hover:bg-[#efe] duration-200'
        >

            {
                card?.labels?.length > 0 &&
                <div className="flex gap-2 flex-wrap flex-1">
                    {
                        card?.labels?.map(({ text, color }, idx) =>
                            <Chip key={idx} text={text} color={color} close />
                        )
                    }
                </div>
            }


            {/* 🟥🟥🟥 Fro ==> Card Delete 🟥🟥🟥 */}
            <div
                className='absolute right-4'
                onClick={(e) => { e.stopPropagation(); setShowDropDown(pre => !pre) }}>
                <MoreHorizontal className='opacity-0 duration-200 group-hover:opacity-100 cursor-pointer' />
                {
                    showDropDown &&
                    <DropDown text='Delete Card' itemDelete={() => removeCard(boardId, card?.id)} />
                }
            </div>


            <div className='font-bold'>{card?.title}</div>

            <div className='flex items-center justify-between'>
                {
                    card?.date &&
                    <p className='flex items-center gap-1'><Clock className='w-4 inline' /> {card?.date}</p>
                }
                <p className='flex items-center gap-1'><CheckSquare className='w-4 inline' /> 1/4</p>
            </div>

            {
                showModal &&
                <CardInfoModal setShowModal={setShowModal} card={card}/>
            }
        </section >
    )
}

export default Card;