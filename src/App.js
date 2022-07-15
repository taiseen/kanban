import { Board } from './components'


const App = () => {

  return (

    // app holder
    <main className='w-full h-screen flex flex-col bg-gray-100'>

      <nav className='w-full px-5 py-8 border-b border-gray-3 00'>
        <h1 className='text-3xl font-extrabold tracking-wider'>Kanban Board</h1>
      </nav>


      <section className='flex-auto w-full overflow-x-auto p-4'>
        <div className=' min-w-fit flex gap-8 '>

          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          
        </div>
      </section>

    </main>
  )
}

export default App