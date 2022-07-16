import { X } from 'react-feather'

const Chip = ({ text, close, color, onClose }) => {

  return (
    <div className={`${color ? color : 'bg-gray-400'} flex gap-1 items-center px-4 py-1 rounded-[40px] text-white w-fit`}>
      {text}
      {
        close &&
        <X
          className='w-5 h-5 cursor-pointer hover:text-red-500 duration-200'
          onClick={() => onClose ? onClose() : ''}
        />
      }

    </div>
  )
}

export default Chip