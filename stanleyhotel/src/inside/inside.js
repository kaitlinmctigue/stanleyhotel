import React, { Component } from 'react';
import '../styles/index.css';
import './inside.css';

const rooms = [
    {
        "id": 0,
        "title": "Hotel Reception",
        "class": "reception"
    },
    {
        "id": 1,
        "title": "Hedge Maze",
        "class": "maze"
    }
];

function Room(props) {
    console.log(props);
    return(
        <div key={props.id}>
            <button id={props.id} className={"button button--room " + props.class}>
                {props.title}
            </button>
        </div>
    );
}

class Inside extends Component {
    render() {
        return (
            <div className="inside fadeIn" id="reception">
                {rooms.map(room => (
                    <Room title={room.title} key={room.id} id={room.id} class={room.class}/>
                ))}
            </div>
        );
    }
}

export default Inside;
