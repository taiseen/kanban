import { createContext, useContext, useState } from "react";

const BoardCardContext = createContext();


export const BoardCardItem = ({ children }) => {

    const [boards, setBoards] = useState([
        {
            id: Date.now() + Math.random(),
            title: 'To Do',
            cards: [
                {
                    id: Date.now() + Math.random(),
                    title: 'Card 1',
                    tasks: [],
                    labels: [
                        { text: 'frontend', color: 'bg-blue-500' },
                    ],
                    desc: 'This is testing',
                    date: ''
                },
                {
                    id: Date.now() + Math.random(),
                    title: 'Card 2',
                    tasks: [],
                    labels: [
                        { text: 'UI/UX', color: 'bg-orange-500' },
                    ],
                    desc: 'This is UI testing',
                    date: ''
                }
            ]
        }
        ,
        {
            id: Date.now() + Math.random() * 2,
            title: 'Board 2',
            cards: [
                {
                    id: Date.now() + Math.random(),
                    title: 'Task going on',
                    tasks: [],
                    labels: [
                        { text: 'React', color: 'bg-blue-500' },
                    ],
                    desc: 'This is testing',
                    date: ''
                },

            ]
        }
    ]);


    const addBoard = title => setBoards(pre => [...pre, { id: Date.now() + Math.random(), title, cards: [] }]);

    const removeBoard = bid => setBoards(pre => pre.filter(({ id }) => id !== bid))

    const addCard = (title, bid) => {

        // 🟩🟩🟩 1st coming data from user ==> Create a new card
        const card = {
            id: Date.now() + Math.random(),
            title,
            labels: [],
            tasks: [],
            date: '',
            desc: ''
        }


        // 🟩🟩🟩 2nd Find 🔎 that specific Board index, for enter ==> the Newly Created Card. 
        const boardIndex = boards.findIndex(({ id }) => id === bid);
        console.log(boardIndex)
        if (boardIndex < 0) return; // IF no board found, return nothing...


        // 🟩🟩🟩 3rd update the Card inside a specific Board
        const tempBoard = [...boards];              // copy ==> total old board 
        tempBoard[boardIndex].cards.push(card);     // add  ==> new card into that copied board
        setBoards(tempBoard);                       // update ==> exiting board by this new copied board
    }


    const removeCard = (bid, cid) => {

        // 🟥🟥🟥 1st ==> 🔎 Find the Board index
        const boardIndex = boards.findIndex(({ id }) => id === bid);
        if (boardIndex < 0) return; // IF no board found, return nothing...

        // 🟥🟥🟥 2nd ==> 🔎 Find the Card index
        const cardIndex = boards[boardIndex].cards.findIndex(({ id }) => id === cid);
        if (cardIndex < 0) return; // IF no card found, return nothing...

        // 🟥🟥🟥 3rd ==> remove tha specific Card from a specific Board + Update Board
        // setBoards(pre => pre[boardIndex].cards.filter(({ id }) => id !== bid));
        const tempBoard = [...boards];                      // copy 
        tempBoard[boardIndex].cards.splice(cardIndex, 1);   // delete
        setBoards(tempBoard);                               // update 
    }


    return (
        <BoardCardContext.Provider value={{
            boards,
            addBoard,
            removeBoard,
            addCard,
            removeCard,
        }}>
            {
                children
            }
        </BoardCardContext.Provider>
    )
}

export const useBoardCardContext = () => useContext(BoardCardContext);