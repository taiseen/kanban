import { useState } from 'react'
import { X } from 'react-feather'

const Editable = ({ text, placeHolder, btnText, onSubmit, editCSS, dynamicCSS }) => {

    const [showEdit, setShowEdit] = useState(false)

    return (
        <div className='bg-white p-3 rounded-md text-center font-bold text-lg duration-200 '>

            {
                showEdit
                    ? (
                        <form onSubmit={e => {
                            e.preventDefault();
                            if (onSubmit) onSubmit();
                        }}
                            className={`${editCSS || ''} py-1`}
                        >

                            <input
                                autoFocus
                                type="text"
                                // defaultValue={text}
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
                            className={`cursor-pointer w-60 ${dynamicCSS || ''}`}
                        >
                            {text || ''}
                        </p>
                    )

            }
        </div >
    )
}

export default Editable