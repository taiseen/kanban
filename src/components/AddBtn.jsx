import { useState } from 'react'
import { X } from 'react-feather'

const AddBtn = ({ text, placeHolder, btnText, onSubmit, bgHover, width, defaultData, initValue }) => {

    const [showEdit, setShowEdit] = useState(false);
    const [inputValue, setInputValue] = useState(defaultData || '');


    const handleSubmit = e => {
        // prevent auto refresh page by button click
        e.preventDefault();


        // 🟥🟥🟥 very very important... onSubmit become dynamic... But How...? 🤔😮🤯
        // 🟨🟨🟨 this input value send... at the caller place (Parent) component - inside its JSX, 
        // 🟨🟨🟨 where this AddBtn component is actually calling, by passing this onSubmit as a props...
        // 🟨🟨🟨 for that reason this onSubmit become dynamic, for passing values at Parent component...
        if (onSubmit) onSubmit(inputValue);


        // reset at default state
        setShowEdit(false); // after submit value, close editing/input option
        setInputValue('');  // after submit value, clear input field
    }


    return (
        <div
            className={`bg-white rounded-md text-center font-bold text-lg cursor-pointer duration-200 
            ${width || ' border hover:border-dashed hover:border-gray-500'} 
            ${width && 'bg-gray-200 rounded'} 
            ${bgHover || ''} `}
            onClick={e => { e.stopPropagation() }}
        >
            {
                showEdit
                    ? (
                        <form
                            onSubmit={handleSubmit}
                            className={`p-3`}
                        >
                            <input
                                autoFocus
                                required
                                type="text"
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                placeholder={placeHolder || 'Enter Item'}
                                className='outline-none px-2 py-1 w-full rounded-md border border-blue-400'
                            />

                            <div className='flex gap-2 items-center pt-3 cursor-pointer'>
                                <button
                                    type='submit'
                                    className='px-4 py-1 bg-blue-400 rounded-md hover:text-white duration-200'
                                >
                                    {btnText || 'Add'}
                                </button>

                                <X onClick={() => setShowEdit(false)} className='hover:text-red-600 duration-200' />
                            </div>
                        </form>
                    )
                    : (
                        <p
                            onClick={() => setShowEdit(true)}
                            className={`${width || 'w-60'} p-3`}
                        >
                            {initValue ? initValue : text || ''}
                        </p>
                    )
            }
        </div >
    )
}

export default AddBtn