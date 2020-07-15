import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import UUID from 'react-uuid';

import './App.css';
import Axios from 'axios';
import AddTodo from './Components/AddTodo';
import About from './Components/pages/about'
import Todos from './Components/Todo';
import Header from './Components/Layouts/Header';
// uuid is used to generate random id
class App extends Component {
    state = {
        todos: [ //{
            //         id: UUID(),
            //         title: 'Gyming',
            //         completed: false
            //     },
            //     {
            //         id: UUID(),
            //         title: 'Webinar at 5 p.m',
            //         completed: false
            //     },
            //     {
            //         id: UUID(),
            //         title: 'Meeting with boss',
            //         completed: false
            //     }
        ]
    }

    // fetch the todos from the api (jsonplaceholder)
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }))
    }

    // cutting the completed task from the todo-list
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.ompleted
                }
                return todo;
            })
        });
    }

    //Deleting Todo-Item from the list

    delTodo = (id) => {
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({
                todos: [...this.state.todos.filter(
                    todo => todo.id !== id
                )]
            }));

    }

    // Add Todo

    addTodo = (title) => {
        // const newTodo = {
        //     id: UUID(),
        //     title,
        //     completed: false
        // }
        Axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false
            })
            .then(res => this.setState({
                todos: [...this.state.todos, res.data]
            }))

    }
    render() {

        return ( 
            <Router> 
        <div className = "App" >
            <div className="login">
                <Header/>
                <Route path = "/"
                   render = {props => ( 
                    <React.Fragment>
                        <AddTodo addTodo = { this.addTodo }/>
                        <Todos todos = { this.state.todos }
                           markComplete = { this.markComplete }
                           delTodo = { this.delTodo }/>
                    </React.Fragment>
                )}/> 

                <Route path = "/about" Component = { About }/>
            </div>
        </div> 
            </Router>
        );
    }
}

export default App;