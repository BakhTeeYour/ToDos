import {MainLayout} from "../MainLayout";
import s from "./todos.module.scss";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../store/reducer/interfaces";
import {addTodos, getTodos} from "../../store/action/todos";
import {Modal} from "../../ui-components/Modal";
import {If} from "../../ui-components/If";
import {customLocalStorage} from "../../utils/localStorage";
import {AddCardForm} from "../AddCardForm";
import {Input} from "../../ui-components/Input";
import {Button} from "../../ui-components/Button";

const moveTodo = (arr: any, newInd: number, oldInd: number) => {
    const minInd = Math.max(0, Math.min(newInd, oldInd));
    const maxInd = Math.min(arr.length - 1, Math.max(newInd, oldInd));
    const maxEl = arr.splice(maxInd, 1, arr[minInd]);
    arr.splice(minInd, 1, ...maxEl);
    return arr;
};

export const ToDos = () => {
    const {currProject} = useSelector((state: IRootReducer) => state.ToDosReducer);

    const [open, setOpen] = useState(false);
    const [addList, setAddList] = useState(false);

    const [todoName, setTodoName] = useState('');
    const [currentElId, setCurrElId] = useState(0);

    const [oldInd, setOldInd] = useState(0);
    const [newInd, setNewInd] = useState(0);

    const dispatch = useDispatch();
    const handleClick = (id: number) => {
        setCurrElId(id)
        setOpen(true)
    };
    const handleAddTodo = () => {
        dispatch(addTodos({
            ...currProject,
            todos: [...currProject.todos, {id: "id" + Math.random().toString(16).slice(2), name: todoName, todos: []}]
        }))
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
                    <h1>{currProject.projectName}</h1>
                </div>
                <div className={s.todos_tasks_block}>
                    {currProject.todos?.map((el: any, ind: number) => (
                        <>
                        <div className={s.todos_task_block} key={el.id}
                             draggable
                             onDragStart={() => setOldInd(ind)}
                             onDragOver={(e) => {
                                 e.preventDefault()
                                 setNewInd(ind)
                             }}
                             onDrop={() => {
                                 customLocalStorage.set('todo', {
                                     ...currProject,
                                     todos: moveTodo(currProject.todos, newInd, oldInd)
                                 })
                                 dispatch(getTodos())
                             }}>
                            <p>{el.name}</p>
                            {/*Todos block*/}
                            <div>
                                <p onClick={() => handleClick(el.id)}
                                   className={s.todos_task_block_add}>+ Add a card</p>
                            </div>
                        </div>
                            <If condition={open && currentElId === el.id}>
                                <Modal onBackdropClick={() => {}}>
                                    <AddCardForm setOpenForm={setOpen}/>
                                </Modal>
                            </If>
                        </>
                    ))}
                    <div>
                        <div className={s.todos_task_add_block}>
                            {!addList ? <p onClick={() => setAddList(true)}>+ Add a list</p> :
                                <div>
                                    <Input type="text" placeholder="Enter list name" value={todoName} onChange={(e) => setTodoName(e.target.value)}/>
                                    <div className={s.todos_task_add_btn}>
                                        <Button onClick={handleAddTodo} size="base" variant="primary_outlined">Add</Button>
                                        <Button onClick={handleCancelAddTdDo} size="base" variant="primary_outlined">Х</Button>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}