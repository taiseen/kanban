import { useBoardCardContext } from './context/BoardCardContext';
import { Board, AddBtn } from './components';


const App = () => {

  const { boards, addBoard } = useBoardCardContext();

  return (

    // app holder
    <main className='w-full h-screen flex flex-col bg-gray-100 select-none'>

      <header className='w-full p-5 border-b border-gray-400'>
        <h1 className='text-2xl lg:text-3xl font-extrabold tracking-wider'>
          Kanban Board <span className=' text-gray-300'> - Drag & Drop</span>
        </h1>
      </header>


      <section className='flex-auto w-full overflow-x-auto p-4 customScroll'>
        <div className=' min-w-fit h-full flex gap-4 justify-center md:justify-start'>
          {
            boards?.map(board => <Board key={board.id} board={board} />)
          }

          <div>
            <AddBtn
              text='+ Add Board'
              placeHolder='Enter Board Title'
              bgHover='hover:bg-[#ffe]'
              onSubmit={title => addBoard(title)}
            />
          </div>

        </div>
      </section>

    </main>
  )
}

export default App