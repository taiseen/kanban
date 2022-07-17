import { useEffect, useRef } from 'react'

const DropDown = ({ text, onClose, itemDelete }) => {

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

    return (
        <div
            ref={dropDownRef}
            onClick={() => itemDelete()}
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

export default DropDown