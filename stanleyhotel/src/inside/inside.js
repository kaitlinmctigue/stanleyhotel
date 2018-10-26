import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import './inside.css';

const rooms = [
    {
        "id": 0,
        "title": "The Colorado Lounge",
        "class": "lounge"
    },
    {
        "id": 1,
        "title": "The Bar",
        "class": "bar"
    },
    {
        "id": 2,
        "title": "The Caretaker’s Suite",
        "class": "suite"
    },
    {
        "id": 3,
        "title": "Hotel Reception",
        "class": "reception"
    },
    {
        "id": 4,
        "title": "The Hedge Maze",
        "class": "maze"
    }
];

function openModal(props) {
    console.log(props);
}

function Room(props) {
    var open = false;
    return(
        <div key={props.id}>
            <button id={props.id}
                    onClick={openModal(props)}
                    className={"button button--room " + props.class}>
                {props.title}
            </button>
        </div>
    );
}

class Inside extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <button className="button" id="back">
                        exit
                    </button>
                </Link>
                <div className="inside fadeIn fadeOut" id="reception">
                    {rooms.map(room => (
                        <Room title={room.title} key={room.id} id={room.id} class={room.class}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Inside;
