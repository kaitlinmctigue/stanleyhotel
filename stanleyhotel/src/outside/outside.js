import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';
import './outside.css';

class Outside extends Component {
    render() {
        return (
            <div className="outside fadeIn fadeOut">
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
