import React from 'react';
import { UserForm } from '../UserForm/UserForm.jsx';
import s from './User.module.scss';

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  render() {
    const { user, onDelete, onPatch } = this.props;
    return (
      <div className={ s.user }>
        <div className={ s.user__info }>
          <div className={ s.user__id }>
            { user.id }
          </div>
          <div className={ s.user__name }>
            { user.name }
          </div>
          <div className={ s.user__actions }>
            <button className={ s.user__action } onClick={ () => onDelete(user.id) }>Delete</button>
            <button className={ s.user__action } onClick={ () => this.setState({ isEditing: !this.state.isEditing })}>Edit</button>
          </div>
        </div>
        
        { 
          this.state.isEditing &&
          <UserForm user={ user } action='Edit' onSubmit={ (data) => onPatch(user.id, data) } />
        }
      </div>
    );
  }
}