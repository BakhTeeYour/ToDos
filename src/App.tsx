import React, {useState} from 'react';
import {MainLayout} from "./components/MainLayout";
import mainStyle from './App.module.scss'
import {TodoForm} from "./components/ToDoForm/todoForm";
import {CreateTaskForm} from "./components/CreateTaskForm";
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "./store/reducer/interfaces";
import {addTodos} from "./store/action/todos";

function App() {
    const {error, todos, loading} = useSelector((state: IRootReducer) => state.ToDosReducer);

    const [open, setOpen] = useState(false);
    const [boardName, setBoardName] = useState('My Board');
    const [addList, setAddList] = useState(false);

    const [todoName, setTodoName] = useState('');
    const [currentElId, setCurrElId] = useState(0);

    const dispatch = useDispatch();
    const handleClick = (id: number) => {
        setCurrElId(id)
        setOpen(true)
    };
    const handleAddTodo = () => {
        dispatch(addTodos([...todos, {id: Date.now(), name: todoName, todos: []}]))
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
