import React from 'react';
import s from './UserForm.module.scss';

export class UserForm extends React.Component {
  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name) return;
    this.props.onSubmit({
      name: this.state.name
    });
    this.setState({
      name: ''
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      name: props.user ? props.user.name : ''
    }
  }

  render() {
    const { action } = this.props;
    return (
      <form className={ s.userForm } onSubmit={ this.handleSubmit } >
        <label className='label'>{ action } user</label>
        <div className={ s.userForm__inputGroup }>
          <input 
            className={ s.userForm__input } 
            type='text' 
            onChange={ this.handleNameChange } 
            value={ this.state.name } 
            placeholder='Name' />
          <input className={ s.userForm__submit } type='submit' value={action} />
        </div>
      </form>
    );
  }
}