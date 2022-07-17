import { Calendar, Check, CheckSquare, List, Tag, Trash, Type, X } from 'react-feather'
import { useState } from 'react';
import { AddBtn } from '.';


const CardInfoModal = ({ setShowModal, card }) => {

    const [activeColor, setActiveColor] = useState('');
    const [colors] = useState([
        // '#a8193d',
        // '#4fcc25',
        // '#1ebffa',
        // '#8da177',
        // '#9975bd',
        // '#cf61a1',
        // '#240959',
        'bg-red-600',
        'bg-green-500',
        'bg-sky-400',
        'bg-lime-600',
        'bg-violet-500',
        'bg-pink-500',
        'bg-indigo-900',
    ])

    return (
        <section
            className='fixed top-0 right-0 left-0 bottom-0 p-4 z-20 bg-black/50 grid place-items-center'
        // onClick={e => { e.stopPropagation(); setShowModal(false) }}
        >
            <div className='bg-white w-full md:w-[650px] h-[80vh] overflow-y-auto relative rounded-lg customScroll'>

                <X
                    // ❌❌❌ Just For Close Btn UI ❌❌❌
                    className='cursor-pointer hover:text-red-500 absolute top-2 right-2'
                    onClick={e => { e.stopPropagation(); setShowModal(false) }}
                />

                <div className='p-6 w-full'>

                    {/* 🟡🟡🟡 UI For ==> Title 🟡🟡🟡 */}
                    <div className='mb-8'>
                        <div className='p-2 flex items-center gap-3'>
                            <Type /> <span className='text-2xl font-bold'>Title</span>
                        </div>
                        <AddBtn
                            text={card.title}
                            placeholder='Enter Title'
                            width='w-fit'
                            btnText='Edit Title'
                        />
                    </div>

                    {/* 🟡🟡🟡 UI For ==> Description 🟡🟡🟡 */}
                    <div className='mb-8'>
                        <div className='p-2 flex items-center gap-3'>
                            <List /> <span className='text-2xl font-bold'>Description</span>
                        </div>
                        <AddBtn
                            text={card.desc}
                            placeHolder='Enter Description'
                            width='w-fit'
                            btnText='Set Description'
                            initValue='Your Description Here'
                        />
                    </div>

                    {/* 🟡🟡🟡 UI For ==> Date 🟡🟡🟡 */}
                    <div className='mb-8'>
                        <div className='p-2 flex items-center gap-3'>
                            <Calendar /> <span className='text-2xl font-bold'>Date</span>
                        </div>
                        <input type="date" className='p-3 border outline-none border-gray-400 rounded' />
                    </div>


                    {/* 🟡🟡🟡 UI For ==> Labels 🟡🟡🟡 */}
                    <div className='mb-8'>
                        <div className='p-2 flex items-center gap-3'>
                            <Tag /> <span className='text-2xl font-bold'>Labels</span>
                        </div>
                        <div className='flex items-center gap-4 pb-3'>
                            {
                                colors.map(color =>
                                    <li
                                        key={color}
                                        onClick={() => setActiveColor(color)}
                                        className={`${color} w-7 h-7 rounded-full list-none duration-200 border-4 border-transparent cursor-pointer flex items-center`}
                                    >
                                        {color === activeColor && <Check className='text-white' />}
                                    </li>
                                )
                            }
                        </div>
                        <AddBtn
                            text={card.desc}
                            placeHolder='Enter Labels'
                            width='w-fit'
                            btnText='Add Label'
                            initValue='Add Label'
                        />
                    </div>


                    {/* 🟡🟡🟡 UI For ==> Tasks 🟡🟡🟡 */}
                    <div className=''>
                        <div className='p-2 flex items-center gap-3'>
                            <CheckSquare /> <span className='text-2xl font-bold'>Tasks</span>
                        </div>

                        {/* Progressbar */}
                        <div className='h-2.5 w-full rounded-md border border-gray-500 mb-4'>
                            <div className='h-full w-[30%] rounded-md bg-blue-400 ' />
                        </div>

                        <div className='space-y-2 mb-4'>
                            <div className='flex items-center gap-4 px-2'>
                            <input type="checkbox" className='w-4 h-4 cursor-pointer' />
                                <p className='text-lg'>Task 1</p>
                                <Trash className='ml-auto hover:text-red-500 duration-200 cursor-pointer'/>
                            </div>
                            <div className='flex items-center gap-4 px-2'>
                                <input type="checkbox" className='w-4 h-4 cursor-pointer' />
                                <p className='text-lg'>Task 1</p>
                                <Trash className='ml-auto hover:text-red-500 duration-200 cursor-pointer'/>
                            </div>
                        </div>

                        <AddBtn
                            placeHolder='Enter Task'
                            width='w-fit'
                            initValue='Add Tasks'
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default CardInfoModal