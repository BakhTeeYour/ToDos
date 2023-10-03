import React, {useState} from 'react';
import {MainLayout} from "./components/MainLayout";
import mainStyle from './App.module.scss'
import {TodoForm} from "./components/ToDoForm/todoForm";
import {CreateTaskForm} from "./components/CreateTaskForm";

const todo = [
    {
        id: 1,
        name: 'Queue',
        todos: []
    },
    {
        id: 2,
        name: 'Development',
        todos: []
    },
    {
        id: 3,
        name: 'Done',
        todos: []
    }
]

function App() {
    const [open, setOpen] = useState(false);
    const [boardName, setBoardName] = useState('My Board');
    const [addList, setAddList] = useState(false);
    const [todos, setTodos] = useState(todo)
    const [todoName, setTodoName] = useState('');
    const [currentElId, setCurrElId] = useState(0);
    const handleClick = (id: number) => {
        setCurrElId(id)
        setOpen(true)
    };
    const handleAddTodo = () => {
        setTodos([...todos, {id: Date.now(), name: todoName, todos: []}]);
        setTodoName('');
        setAddList(false);
    };

    const handleCancelAddTdDo = () => {
        setTodoName('');
        setAddList(false);
    }

    return (
        <MainLayout title='Главная страница'>
            <main className={mainStyle.main_wrapper}>
                <div className={mainStyle.main_board_block}>
                    <input className={mainStyle.main_board_block_input} type="text"
                           onChange={({target: {value}}) => setBoardName(value)} value={boardName}/>
                </div>
                <div className={mainStyle.main_tasks_block}>
                    {todos.map(e => (
                        <div className={mainStyle.main_task_block}>
                            <p>{e.name}</p>
                            {e.todos.length > 0 ? <TodoForm/> :
                                <div>
                                    {open && currentElId === e.id ?
                                        <div>
                                            some action
                                        </div> :
                                        <p onClick={() => handleClick(e.id)} className={mainStyle.main_task_block_add}>+
                                            Add a card</p>}
                                </div>}
                        </div>
                    ))}
                    <div>
                        <div className={mainStyle.main_task_add_block}>
                            {!addList ? <p onClick={() => setAddList(true)}>+ Add another list</p> :
                                <div>
                                    <input type="text" placeholder="Enter list name" value={todoName}
                                           onChange={(e) => setTodoName(e.target.value)}/>
                                    <div className={mainStyle.main_task_add_btn}>
                                        <button onClick={handleAddTodo}>Add</button>
                                        <button onClick={handleCancelAddTdDo}>Х</button>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default App;
