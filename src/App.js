import {useState} from 'react';
import initialTodos from './todos.js';

import TodoList from './TodoList.js';

import TodoAdd from './TodoAdd.js';

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const add = deed => {
    setTodos([...todos, deed]);
  }
     
  const del = key => {
    const newTodos = todos.filter(current => current.key !== key);
    setTodos(newTodos);
  }
  const setDone = key => {
    const newTodos = [...todos];
    const deed = newTodos.find(current => current.key === key);
    if (deed)
      deed.done = true;
    setTodos(newTodos);
  };
 
    return (
        <div className="container">
            <nav className="navbar is-light">
                <div className="navbar-brand">
                    <span className="navbar-item is-uppercase">
                         Todos
                    </span>
                </div> 
            </nav>
           <main className="content px-6 py-6">
              <TodoList list={todos} setDone={setDone} del={del}/>
              <TodoAdd add={add} />
           </main>
        </div>                
    );
}
