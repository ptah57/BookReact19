import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';

import App from './App.js';
import TodoList from './TodoList.js';
import TodoAdd from './TodoAdd.js';

import todos from './todos';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
                        <Route
                            index={true} element={<TodoList list={todos} /> } >
                        </Route>        
                        <Route
                            path='add' element={<TodoAdd />}> 
                        </Route>
        </Route> 
        )
);
export default router;
