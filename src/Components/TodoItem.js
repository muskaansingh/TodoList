import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        return {
            textAlign: 'left',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            backgroundColor: '#f1f1f1',
            marginLeft: '40px',
            marginRight: '40px',
            borderRadius: '5px',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
        <div className="input">   
            <div style = {
                this.getStyle()}>
            <input type = "checkbox"
                   onChange = { this.props.markComplete.bind(this, id)}/> 

            { title } 
            
            <button onClick = { this.props.delTodo.bind(this, id) }
            style = { btnStyle }> X </button> 
            </div>
        </div>
        )
    }
}

// PropTypes

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '4px 8px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
}

export default TodoItem;