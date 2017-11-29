import * as React from 'react';
import * as classNames from 'classnames';

import { EmptyState, Todo } from '../../../models';
import * as styles from './todo-item-presenter.component.scss';


interface TodoItemPresenterProps {
  completed: boolean;
  onEdit: () => void;
  text: string;
}

export class TodoItemPresenter extends React.Component<TodoItemPresenterProps, EmptyState> {
  render () {
    const { completed, onEdit, text } = this.props;
    const classes = classNames(styles.itemText, {
      [styles.completed]: completed
    });

    return (
      <div className={classes} onClick={onEdit}>{text}</div>
    );
  }
}