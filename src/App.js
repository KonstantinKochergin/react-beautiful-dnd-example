import './App.css';
import StaticList from './components/StaticList'
import DndList from './components/DndList'
import { useEffect, useState } from 'react';

const staticListItems = [
  {
    id: 0,
    text: 'Именительный падеж'
  },
  {
    id: 1,
    text: 'Родительный падеж'
  },
  {
    id: 2,
    text: 'Дательный падеж'
  },
  {
    id: 3,
    text: 'Винительный падеж'
  },
  {
    id: 4,
    text: 'Творительный падеж'
  },
  {
    id: 5,
    text: 'Предложный падеж'
  }
]
/*
const dndListItems = [
  {
    id: 0,
    text: 'Кто? Что?'
  },
  {
    id: 1,
    text: 'Кого? Чего?'
  },
  {
    id: 2,
    text: 'Кому? Чему?'
  },
  {
    id: 3,
    text: 'Кого? Что?'
  },
  {
    id: 4,
    text: 'Кем? Чем?'
  },
  {
    id: 5,
    text: '(о) ком? (о) чем?'
  }
]*/

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return [...a];
}

function App() {

  const [dndListItems, setDndListItems] = useState([
    {
      id: 0,
      text: 'Кто? Что?'
    },
    {
      id: 1,
      text: 'Кого? Чего?'
    },
    {
      id: 2,
      text: 'Кому? Чему?'
    },
    {
      id: 3,
      text: 'Кого? Что?'
    },
    {
      id: 4,
      text: 'Кем? Чем?'
    },
    {
      id: 5,
      text: '(о) ком? (о) чем?'
    }
  ])

  useEffect(() => {
    let ar = shuffle(dndListItems)
    setDndListItems(ar)
  }, [])

  return (
    <div className="app">
      <div className="lists-container">
        <StaticList items={staticListItems}/>
        <DndList items={dndListItems}/>
      </div>
    </div>
  );
}

export default App;
