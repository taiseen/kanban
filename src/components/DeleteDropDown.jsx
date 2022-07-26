import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import { useEffect, useRef } from 'react';


const DeleteDropDown = ({ text, onClose, itemDelete }) => {

    const dropDownRef = useRef();

    // for closing drop down, have no button, so for auto close, need this mechanism 
    // when we click outside or drop down little window, then drop down will be close.
    // so that outer click listen by this handleClick function
    const handleClick = (e) => {
        if (!dropDownRef?.current?.contains(e.target)) {
            // console.log('click outside');
            // if (onClose) onClose()
        }
    }

    useEffect(() => {

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, []);


    // 🟨🟨🟨 Third Party Library for Confirm Dialog Box
    // 🟨🟨🟨 With Custom UI support  
    const submit = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='w-80 bg-gray-200 text-center p-5 py-8 rounded shadow space-y-3'>

                        <h1 className='text-2xl'>Are you sure?</h1>
                        <p className='text-xl'>You want to delete this!</p>

                        <div className='flex gap-4 items-center justify-center pt-2'>
                            <button
                                onClick={onClose}
                                className='text-lg px-3 py-1 bg-gray-400 cursor-pointer duration-300 rounded hover:bg-green-400'
                            >
                                No
                            </button>

                            <button
                                // 🔴🔴🔴 delete function call here... 🔴🔴🔴
                                onClick={() => { itemDelete(); onClose(); }}
                                className='text-lg px-3 py-1 bg-gray-400 cursor-pointer duration-300 rounded hover:bg-red-400'
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                );
            },
        });
    }

    
    return (
        <div
            ref={dropDownRef}
            // onClick={() => itemDelete()}
            onClick={submit}
            className='absolute top-[120%] -right-2.5 w-32 p-2 rounded-md shadow-lg bg-gray-200 font-bold text-center cursor-pointer duration-200 hover:bg-red-200 hover:shadow
            after:content[""]
            after:absolute
            after:-top-1
            after:right-1.5
            after:w-8
            after:h-8
            after:-z-10
            after:rotate-45
            after:duration-200
            after:bg-gray-200
            after:hover:bg-red-200'
        >
            {
                text
            }
        </div>
    )
}

export default DeleteDropDown