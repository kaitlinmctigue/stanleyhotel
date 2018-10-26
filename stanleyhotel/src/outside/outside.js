import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../styles/index.css';
import './outside.css';

class Outside extends Component {
    render() {
        return (
            <div className="outside fadeOut">
                <Link to="/inside">
                    <button className="button" id="enter">
                        enter
                    </button>
                </Link>
            </div>
        );
    }
}

export default Outside;
