import React, { useState } from 'react';
import { Todos } from '../mobx/todo';
import { observer } from 'mobx-react';

const filterInfos = [
    {
        label: 'all',
        value: '',
    },
    {
        label: 'completed',
        value: 'completed',
    }
];

interface TodoAppProps {
    todos: Todos;
}

export const TodoApp: React.FC<TodoAppProps> = observer((props) => {
    const { todos } = props;
    const [text, setText] = useState('');

    const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
      };

    const addTodo = () => {
        todos.addTodo(text);
        setText('');
    };

    return (
        <div>
            <h1>Mobx-demo: TodoApp</h1>
            <div>
                <div>
                    <input value={text} onChange={onChangeInput} />
                    <button onClick={addTodo}>add</button>
                </div>
                <ul>
                    {
                        todos.filteredTodos.map((todo) => {
                            const { id, text, completed } = todo;
                            return (
                                <li key={id}>
                                    <input
                                        type="checkbox"
                                        checked={completed}
                                        onChange={() => {
                                            todos.toggleTodo(id);
                                        }}
                                    />
                                    {text}
                                    <button onClick={() => {
                                        // removeTodo
                                        const idx = todos.data.findIndex((todo) => todo.id === id);
                                        todos.data.splice(idx, 1);
                                    }}>delete</button>
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
                                <button key={value} onClick={() => {
                                    todos.setFilterText(value);
                                }}>
                                    {label}
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
});
