import { createBrowserHistory } from 'history';

import { RouterStore } from './RouterStore';
import { TodoStore } from './TodoStore';

import { Todo } from '../models';


const history = createBrowserHistory();
const router = new RouterStore(history);
const todos = new TodoStore();

todos.addTodo(new Todo('coffee'));

// MobX rootStore
export const rootStore = {
  router,
  todos
};

export const stores = {
  router: 'router',
  todos: 'todos',
}
