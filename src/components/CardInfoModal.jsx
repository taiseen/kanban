import { Calendar, Check, CheckSquare, List, Tag, Trash, Type, X } from 'react-feather'
import { useBoardCardContext } from '../context/BoardCardContext';
import { useEffect, useState } from 'react';
import { AddBtn, Chip } from '.';


const CardInfoModal = ({ setShowModal, card, boardId }) => {

    const { updateCard } = useBoardCardContext();
    // const { id, title, desc, labels, date, tasks } = card;

    // convert Props >>> into >>> State
    const [values, setValues] = useState({ ...card });

    const [activeColor, setActiveColor] = useState('');
    const [colors] = useState([
        'bg-red-600',
        'bg-green-500',
        'bg-sky-400',
        'bg-lime-600',
        'bg-violet-500',
        'bg-pink-500',
        'bg-indigo-900',

        // '#cf61a1',
        // '#240959', // these color system not working...
    ])



    // Calculate total task completed percentage
    const calculatePercentage = () => {

        if (values?.tasks?.length === 0) return 'w-0'

        const completed = values?.tasks?.filter(({ completed }) => completed).length;

        const value = (completed / values?.tasks?.length) * 100;

        return value;
    }



    const addLabel = (text, color) => {

        const index = values?.labels?.findIndex(item => item.text === text);
        if (index > -1) return;

        // update labels...
        setValues({ ...values, labels: [...values.labels, { text, color }] });
        setActiveColor(''); // reset label color 
    }



    const removeLabel = (text) => {

        // 1st | remove from array 
        const afterRemoveLabel = values?.labels?.filter(item => item.text !== text)

        // 2ns | update state variable
        setValues({ ...values, labels: afterRemoveLabel });
    }



    const addTask = text => {

        // 1st | create task Object  
        const task = { id: Date.now() + Math.random(), text, completed: false };

        // 2nd | update / add this task Object into state variable
        setValues({ ...values, tasks: [...values.tasks, task] });
    }



    const updateTask = (id, completed) => {

        const index = values?.tasks?.findIndex(item => item.id === id);
        if (index < 0) return;

        const tempTasks = [...values.tasks];
        tempTasks[index].completed = completed;
        setValues({ ...values, tasks: tempTasks });
    }



    const removeTask = id => {

        const afterRemoveTask = values?.tasks?.filter(item => item.id !== id);

        setValues({ ...values, tasks: afterRemoveTask });
    }



    // CardInfo Modal Data Update
    useEffect(() => updateCard(boardId, card.id, values), [values, boardId, card.id, updateCard]);



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
                            text={values?.title}
                            defaultData={values?.title}
                            placeHolder='Enter Title'
                            width='w-fit'
                            btnText='Edit Title'
                            onSubmit={value => setValues({ ...values, title: value })}
                        />
                    </div>
                    {/* This is very good For web development */}
                    {/* 🟡🟡🟡 UI For ==> Description 🟡🟡🟡 */}
                    <div className='mb-8'>
                        <div className='p-2 flex items-center gap-3'>
                            <List /> <span className='text-2xl font-bold'>Description</span>
                        </div>
                        <AddBtn
                            text={values?.desc}
                            // defaultData={values?.desc}
                            placeHolder='Enter Description'
                            width='w-fit'
                            btnText='Set Description'
                            // initValue='Add Description '
                            onSubmit={value => setValues({ ...values, desc: value })}
                        />
                    </div>

                    {/* 🟡🟡🟡 UI For ==> Date 🟡🟡🟡 */}
                    <div className='mb-8'>
                        <div className='p-2 flex items-center gap-3'>
                            <Calendar /> <span className='text-2xl font-bold'>Date</span>
                        </div>
                        <input
                            type="date"
                            defaultValue={values?.date ? new Date(values?.date).toISOString().substring(0, 10) : ''}
                            onChange={e => setValues({ ...values, date: e.target.value })}
                            className='p-3 border outline-none border-gray-400 rounded'
                        />
                    </div>


                    {/* 🟡🟡🟡 UI For ==> Labels 🟡🟡🟡 */}
                    <div className='mb-8'>
                        <div className='p-2 flex items-center gap-3'>
                            <Tag /> <span className='text-2xl font-bold'>Labels</span>
                        </div>

                        {/* Label Chips */}
                        <div className='w-full pb-3 flex gap-2 items-center'>
                            {
                                values?.labels?.map(({ text, color }, idx) =>
                                    <Chip
                                        close
                                        key={idx}
                                        text={text}
                                        color={color}
                                        onClose={() => removeLabel(text)} />
                                )
                            }
                        </div>

                        {/* Color Container */}
                        <div className='flex items-center gap-4 pb-3'>
                            {
                                colors?.map(color =>
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
                            onSubmit={value => addLabel(value, activeColor)}
                        />
                    </div>


                    {/* 🟡🟡🟡 UI For ==> Tasks 🟡🟡🟡 */}
                    <div className=''>
                        <div className='p-2 flex items-center gap-3'>
                            <CheckSquare /> <span className='text-2xl font-bold'>Tasks</span>
                        </div>

                        {/* Progressbar */}
                        <div className='h-2.5 w-full rounded-md border border-gray-500 mx-2 mb-4'>
                            <div
                                style={{ width: calculatePercentage() + '%' }}
                                className={`h-full rounded-md 
                                ${values.tasks.length !== 0 && 'bg-blue-500'} 
                                ${calculatePercentage() >= 100 && 'bg-green-600'} `}
                            />
                        </div>

                        <div className='space-y-2 mb-4'>
                            {
                                values?.tasks?.map(item =>
                                    <div className='flex items-center gap-4 px-2' key={item.id}>
                                        <input
                                            type="checkbox"
                                            defaultValue={item.completed}
                                            className='w-4 h-4 cursor-pointer'
                                            onChange={e => updateTask(item.id, e.target.checked)}
                                        />
                                        <p className='text-lg'>{item.text}</p>
                                        <Trash
                                            onClick={() => removeTask(item.id)}
                                            className='ml-auto hover:text-red-500 duration-200 cursor-pointer'
                                        />
                                    </div>
                                )
                            }
                        </div>

                        <AddBtn
                            placeHolder='Enter Task'
                            width='w-fit'
                            btnText='Add Tasks'
                            initValue='Add New Task'
                            onSubmit={value => addTask(value)}
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default CardInfoModal