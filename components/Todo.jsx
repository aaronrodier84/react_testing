import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import { complete_data, delete_data } from '../actions/actions';

class Todo extends Component {

	complete(data) {
		var root = 'https://jsonplaceholder.typicode.com';
        var that = this;
        const request = fetch(root + '/todos' + '/' + data.id, {
        	method: 'PATCH',
        	body: JSON.stringify({
        		completed: 'true'
        	}),
        	headers: {
        		"Content-type": "application/json; charset=UTF-8"
        	}
        })
        .then(function(response) {
        	console.log("Success Response", response);
            that.props.complete_data(response);
        })
        .catch(function(error) {
        	console.log("Fetch Error : -S", error)
        });
	}

	delete(data) {
		var root = 'https://jsonplaceholder.typicode.com';
        const request = fetch(root + '/todos' + '/' + data.id, {
        	method: 'DELETE',
        });
	}

    render() {
        return (
            <div>
            	<div className="col-md-6 col-sm-6">
            	    {this.props.title}
            	</div>
            	<div className="col-md-3 col-sm-3">
                	<a onClick={() => this.complete(this.props)}>Complete</a>
            	</div>
            	<div className="col-md-3 col-sm-3">
                	<a onClick={() => this.delete(this.props)}>Delete</a>
            	</div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            complete_data,
            delete_data,
        },
        dispatch
    );
}

export default connect(mapDispatchToProps)(Todo)