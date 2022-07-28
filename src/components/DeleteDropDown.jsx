import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';


const DeleteDropDown = ({ text, itemDelete }) => {

    
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
            onClick={submit}
            className={`absolute top-[120%] -right-2.5 w-32 p-2 rounded-md shadow-lg bg-gray-200 font-bold text-center cursor-pointer duration-200 hover:bg-red-200 hover:shadow
            before:content[""]
            before:absolute
            before:-top-1
            before:right-1.5
            before:block
            before:w-8
            before:h-8
            ${text === 'Card' ? 'before:z-0' : 'before:-z-10'}
            before:rotate-45
            before:duration-200
            before:bg-gray-200
            before:hover:bg-red-200`}
        >
            <p className='relative'>Delete {text}</p>
        </div>
    )
}

export default DeleteDropDown