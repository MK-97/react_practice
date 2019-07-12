import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.Component{

  getStyle = () =>{
    return{
      background:'lightblue',
      padding:'10px',
      textDecoration: this.props.todo.completed ? 'line-through': 'none'

    }

  }



  render(){

    const { id, title } = this.props.todo;

    return(
      <div style = {this.getStyle()}>
      <input type = "checkbox" onChange = {this.props.markComplete.bind(this, id)} /> {' '}
        <p>{title}</p>
        <input type = "button" value = "Delete dis" onClick = {this.props.deleteItem.bind(this,id)} />
      </div>
    );
  }

}
TodoItem.propTypes ={
  todo: PropTypes.object.isRequired
}
export default TodoItem
