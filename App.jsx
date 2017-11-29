import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import { addTodo, loadData } from './actions/actions';

import TodoList from './components/TodoList.jsx'

class App extends Component {

    componentDidMount() {
        var root = 'https://jsonplaceholder.typicode.com';
        var that = this;
        const request = axios.get(root + '/todos')
        .then(function(response) {
            that.props.loadData(response);
        });
    }
    render() {
        const { dispatch, visibleTodos } = this.props;
        console.log(visibleTodos)    
        return (
            <div>

                <TodoList todos = {visibleTodos}/>

            </div>
        )
    }
}

function select(state) {
    return {
        visibleTodos: state.todos
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            loadData,
            addTodo,
        },
        dispatch
    );
}

export default connect(select, mapDispatchToProps)(App)