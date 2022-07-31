import React from 'react';

export class AddAction extends React.Component {
    state = {
      error: undefined
    };
      handleAddOption = (e) => {
          e.preventDefault();
          let value = e.target.elements.input.value.trim();
          const error = this.props.handleAddOption(value);
          e.target.elements.input.value = '';
          
        this.setState(() => ({ error }))
      };
    render() {
      return (
        <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
          <form 
          className='add-option'
          onSubmit={this.handleAddOption}>
            <input className='add-option__input' type="text" name="input"></input>
            <button className='button'>Add Action</button>
          </form>
        </div>
      );
    };
  }