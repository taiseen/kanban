import { useRef } from 'react'

const DropDown = ({ text, onClose, itemDelete }) => {


    const dropDownRef = useRef();

    // for closing drop down, have no button, so for auto close, need this mechanism 
    // when we click outside or drop down little window, then drop down will be close.
    // so that outer click listen by this handleClick function
    // const handleClick = (e) => {
    //     if (!dropDownRef?.current?.contains(e.target)) {
    //         console.log('click outside');
    //         if (onClose) onClose()
    //     }
    // }

    // useEffect(() => {

    //     document.addEventListener('click', handleClick);

    //     return () => document.removeEventListener('click', handleClick);
    // }, []);

    return (
        <div
            ref={dropDownRef}
            onClick={() => itemDelete()}
            className='absolute top-full right-0 p-2 rounded-md shadow-xl bg-gray-200 font-bold w-32 text-center cursor-pointer hover:bg-red-200 duration-200'>

            {text}

        </div>
    )
}

export default DropDown