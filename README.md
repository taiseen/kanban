> 15 -July - 2022

yarn add react-feather
https://feathericons.com



# Project Main Data Structure
Board = [
    {},
    {},
]

===============================================

Board = [
    {
        id : '101',
        title : 'Board Title',
        cards : [
            {},
            {},
        ]
    },
    {},
]

===============================================

Board = [
    {
        id : '101',
        title : 'Board Title',
        cards : [
            {
                id : '202',
                title : 'Card Title',
                labels : [
                    {
                        text : Frontend,
                        color : 'green',
                    },
                ],
                tasks : [
                    {
                        id : '303',
                        title : 'Title - 1',
                    },
                ],
                desc : 'Add any descriptions',
                date : new Date(),
            },
        ]
    },
]