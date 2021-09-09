import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../redux/actions/todo'
import { setFilterText } from '../redux/actions/visibilityFilter';

const filterInfos = [
    { label: 'all', value: '' },
    { label: 'completed', value: 'completed' }
];

export const TodoApp = () => {
    const [text, setText] = useState('');

    const todos = useSelector((store) => store.todos);
    const filterText = useSelector((store) => store.filter);
    const dispatch = useDispatch();

    const onChangeInputText = (e) => {
        const t = e.currentTarget.value;
        setText(t);
    };

    const onClickAdd = () => {
        // 新增一个 TODO
        dispatch(addTodo(text)); // { type: ADD_TODO payload}
        setText('');
    };

    const filteredTodos = todos.filter((todo) => {
        if (filterText === 'completed') {
            return todo.completed;
        }
        return true;
    });

    return (
        <div>
            <div>
                <input value={text} onChange={onChangeInputText} />
                <button onClick={onClickAdd}>add</button>
            </div>
            <ul>
                {
                    filteredTodos.map((todo, index) => {
                        const { id, text, completed } = todo;
                        return (
                            <li key={id}>
                                <input
                                    type="checkbox"
                                    value={completed}
                                    onChange={() => {
                                        dispatch(toggleTodo(id, !completed));
                                    }}
                                ></input>
                                {text}
                                <button onClick={() => dispatch(removeTodo(id))}>delete</button>
                            </li>
                        );
                    })
                }
            </ul>
            <div>
                {
                    filterInfos.map((info) => {
                        const { label, value } = info;
                        return (
                            <button key={value} onClick={() => dispatch(setFilterText(value))}>
                                {label}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    )
}
