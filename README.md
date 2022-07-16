> 15 -July - 2022
## Kanban Board 

# React + Tailwind


yarn add react-feather
https://feathericons.com


* custom scroll bar styling 
* input autoFocus 
* Component dynamic css styling passing


# Project Main Data Structure
```
Board = [
    {}, ******************
    {}, ******************
]

===============================================

Board = [
    {
        id : '101',
        title : 'Board Title',
        cards : [
            {}, ******************
            {}, ******************
        ]
    },
    {}, ******************
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
            {}, ******************
        ]
    },
    {}, ******************
]
```

```
    ├───public
    │   ├───index.html
    │   └───kanban.ico
    │
    ├───src
    │   ├───components
    │   │   ├───Board.jsx
    │   │   ├───Card.jsx
    │   │   ├───Chip.jsx
    │   │   ├───DropDown.jsx
    │   │   ├───Editable.jsx
    │   │   └───index.js
    │   │
    │   ├───style
    │   │   └───index.css
    │   │
    │   ├───App.js
    │   └───index.js
    │   
    ├───.gitignore
    ├───package.json
    ├───postcss.config.js
    ├───README.md
    ├───tailwind.config.js
    ├───yarn.lock
```