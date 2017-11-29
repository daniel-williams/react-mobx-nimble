import * as React from 'react';
import * as classNames from 'classnames';

import { EmptyState, Todo } from '../../../models';
import { TodoItemEditor } from '../todo-item/todo-item-editor.component';
import * as styles from './todos-header.component.scss';


interface TodosHeaderProps {
  showToggle: boolean;
  toggleAll: () => void;
  addTodo: (data: Partial<Todo>) => void;
}

export class TodosHeader extends React.Component<TodosHeaderProps, EmptyState> {
  constructor(props: TodosHeaderProps) {
    super(props);
  }

  render() {
    return (
    <div className={styles.controlsWrap}>
      {this.renderSetAllCompleted()}
      {this.renderNewItem()}
    </div>
    );
  }

  renderSetAllCompleted() {
    const { showToggle, toggleAll } = this.props;
    const classes = classNames(styles.icon, 'fa', 'fa-check');
    const icon = showToggle
      ? <i
        className={classes}
        onClick={toggleAll}></i>
      : null;

    return (
      <div className={styles.controls}>
        {icon}
      </div>
    );
  }

  renderNewItem() {
    const { addTodo } = this.props;

    return (
      <div className={styles.newItemWrap}>
        <TodoItemEditor
          placeholder={`What's todo?`}
          newTodo={true}
          onSave={(text: string) => addTodo({text})} />
      </div>
    );
  }
}
