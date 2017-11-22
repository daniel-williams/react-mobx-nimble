import { action, computed , observable, reaction } from 'mobx';

import { Todo, TodoFilter } from '../models';


export class TodoStore {
  @observable todos: Todo[] = [];
  @observable filter: TodoFilter = TodoFilter.All;

  @computed
  get active() {
    return this.todos.filter(x => !x.completed);
  }

  @computed
  get completed() {
    return this.todos.filter(x => x.completed);
  }

  @computed
  get filtered(): Todo[] {
    let filteredTodos: Todo[] = [];

    switch(this.filter) {
      case TodoFilter.Active:
        filteredTodos = this.active;
        break;
      case TodoFilter.Completed:
        filteredTodos = this.completed;
        break;
      default:
        filteredTodos = this.todos;
        break;
    }

    return filteredTodos;
  }

  @action
  add = (todo: Partial<Todo>): void => {
    this.todos.push(new Todo(todo.text, todo.completed));
  }

  @action
  edit = (id: number, data: Partial<Todo>): void => {
    this.todos = this.todos.map(x => x.id !== id
      ? x
      : {
        ...x,
        text: data.text.toString(),
        completed: !!data.completed,
      });
  }

  @action
  delete = (id: number): void => {
    this.todos = this.todos.filter(x => x.id !== id);
  }

  @action
  completeAll = (): void => {
    this.todos = this.todos.map(x => ({
      ...x,
      completed: true
    }));
  }

  @action
  deleteCompleted = (): void => {
    this.todos = this.todos.filter(x => !x.completed);
  }

  @action
  setTodoFilter = (filter: TodoFilter): void => {
    this.filter = filter;
  }
}
