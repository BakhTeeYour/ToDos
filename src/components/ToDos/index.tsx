import {MainLayout} from "../MainLayout";
import s from "./todos.module.scss";
import {TodoForm} from "../ToDoForm/todoForm";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../store/reducer/interfaces";
import {addTodos, getTodos} from "../../store/action/todos";

export const ToDos = () => {
    const {
        error,
        currProject: {projectName, todos},
        loading
    } = useSelector((state: IRootReducer) => state.ToDosReducer);
    const [open, setOpen] = useState(false);
    const [addList, setAddList] = useState(false);
    const [todoName, setTodoName] = useState('');
    const [currentElId, setCurrElId] = useState(0);
    console.log(projectName)
    const dispatch = useDispatch();
    const handleClick = (id: number) => {
        setCurrElId(id)
        setOpen(true)
    };
    const handleAddTodo = () => {
        dispatch(addTodos({id: Date.now(), name: todoName, todos: []}))
        setTodoName('');
        setAddList(false);
    };

    const handleCancelAddTdDo = () => {
        setTodoName('');
        setAddList(false);
    }

    useEffect(() => {
        dispatch(getTodos());
    }, []);

    return (
        <MainLayout title='ToDos'>
            <main className={s.todos_wrapper}>
                <div className={s.todos_board_block}>
                    <h1>{projectName}</h1>
                </div>
                <div className={s.todos_tasks_block}>
                    {todos?.map((e: any) => (
                        <div className={s.todos_task_block} key={e.id}>
                            <p>{e.name}</p>
                            {e.todos.length > 0 ? <TodoForm/> :
                                <div>
                                    {open && currentElId === e.id ?
                                        <div>
                                            some action
                                        </div> :
                                        <p onClick={() => handleClick(e.id)} className={s.todos_task_block_add}>+
                                            Add a card</p>}
                                </div>}
                        </div>
                    ))}
                    <div>
                        <div className={s.todos_task_add_block}>
                            {!addList ? <p onClick={() => setAddList(true)}>+ Add another list</p> :
                                <div>
                                    <input type="text" placeholder="Enter list name" value={todoName}
                                           onChange={(e) => setTodoName(e.target.value)}/>
                                    <div className={s.todos_task_add_btn}>
                                        <button onClick={handleAddTodo}>Add</button>
                                        <button onClick={handleCancelAddTdDo}>Х</button>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}