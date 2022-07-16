import { useBoardCardContext } from './context/BoardCardContext';
import { Board, Editable } from './components';


const App = () => {

  const { boards, addBoard } = useBoardCardContext();


  return (

    // app holder
    <main className='w-full h-screen flex flex-col bg-gray-100'>

      <nav className='w-full px-5 py-8 border-b border-gray-3 00'>
        <h1 className='text-3xl font-extrabold tracking-wider'>Kanban Board</h1>
      </nav>


      <section className='flex-auto w-full overflow-x-auto p-4'>
        <div className=' min-w-fit h-full flex space-x-4'>
          {
            boards?.map(board => <Board key={board.id} board={board} />)
          }

          <div>
            <Editable
              text='+ Add Board'
              placeHolder='Enter Board Title'
              onSubmit={title => addBoard(title)}
            />
          </div>

        </div>
      </section>

    </main>
  )
}

export default App