import { observable, computed, action } from 'mobx';

// 模拟异步方法
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class Todo {
    id: number = Math.random();

    @observable
    text: string = '';

    @observable
    completed: boolean = false;

    @action
    toggleTodo = () => {
        this.completed = !this.completed;
    };
}

class Todos {
    @observable
    data: Todo[] = [];

    @observable
    filterText: string = '';

    @computed
    get filteredTodos() {
        return this.data.filter((todo) => {
            if(this.filterText === 'completed') {
                return todo.completed;
            }
            return true
        });
    };

    @action
    async addTodo(text: string) {
        await delay(2000);
        const todo = new Todo();
        todo.text = text;
        this.data.push(todo);
    }

    @action
    setFilterText(text: string) {
        this.filterText = text;
    }

    toggleTodo(id: number) {
        const idx = this.data.findIndex((todo) => todo.id === id);
        this.data[idx].toggleTodo();
    }
}

const TodosInstance = new Todos();

export { Todo, Todos, TodosInstance };
