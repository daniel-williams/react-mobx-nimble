import * as React from 'react';
import * as classNames from 'classnames';

import { EmptyState, Todo } from '../../../models';
import { TodoItem, TodoItemActions } from '../todo-item';
import * as styles from './todo-list.component.scss';


interface TodoListProps extends TodoItemActions {
  todos: Todo[];
  toggleCompleted: (completed?: boolean) => void;
}

export class TodoList extends React.Component<TodoListProps, EmptyState> {
  render () {
    const { todos, ...rest } = this.props;

    return (
      <section className={styles.todoList}>
        <ul className={styles.todoList}>
          {todos.map(todo =>
            <TodoItem
              key={todo.id}
              todo={todo}
              {...rest} />
          )}
        </ul>
      </section>
    );
  }
}
