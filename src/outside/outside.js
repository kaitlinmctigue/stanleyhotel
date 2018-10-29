import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';
import './outside.css';

class Outside extends Component {
    render() {
        return (
            <div className="outside fadeIn fadeOut">
                <div className={"outside__text"}>
                    <h1 className={"outside__text__title"}>
                        The Stanley Hotel
                    </h1>
                    <p className={"outside__text__desc"}>
                        The Stanley Hotel is a historic hotel in Estes Park, Colorado.
                        Stephen King famously visited The Stanley and was inspired to write his 1977 novel <em>The Shining. </em>
                        All information on this website is pulled from <a href={"http://theshining.wikia.com/"} className={"link"} target={"_blank"}>theshining.wikia.com</a>
                    </p>
                </div>

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
