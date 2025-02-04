import { redirect } from 'react-router-dom';

import todos from './todos.js';
// весь этот код с 4 по 24 строки относится ко второй главе
//import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
//
//
//import firebaseApp from './firebase.js';  // этот код относится ко второй главе
//
//const auth = getAuth(firebaseApp);   // этот код относится ко второй главе
//
//export async function register({ request}) {   // этот код относится ко второй главе
//    const fd = await request.formData();
//    try {
//        const oUC = await createUserWithEmailAndPassword(
//            auth,
//            fd.get('email'), fd.get('password')
//        );
//        return redirect('/');
//    }
//    catch(err) {
//        return err.code;
//    }
//}                                           //  этот код относится ко второй главе

export function getTodos() {
    return todos;
}

export async function addTodo({ request }) {
    const fd = await request.formData();
    const date = new Date();
    const newTodo = {
        title: fd.get('title'),
        desc: fd.get('desc'),
        image: fd.get('image'),
        done: false,
        createdAt: date.toLocaleString(),
        key: date.getTime()
    };
     todos.push(newTodo);
     return redirect('/');
}

export function getTodo({params}) {
    const key = +params.key;
    const todo = todos.find(current => current.key === key);
    if (!todo)
        throw new Error();
    return todo;
}

export function actTodo({ params, request }) {
    const key = +params.key;
    const todo = todos.findIndex(current => current.key === key);
    if (request.method === 'PATCH')
        todos[todo].done = true;
    else 
        todos.splice(todo, 1);
    return redirect('/');
}
