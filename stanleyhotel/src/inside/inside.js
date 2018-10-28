import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import '../styles/index.css';
import './inside.css';

class Inside extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            selectedItem: 0,
            selectedTitle: ""
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.rooms = [
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
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow(id) {
        console.log(id);
        this.setState({selectedID: id});
        this.setState({show: true});
        this.setState({selectedTitle: this.rooms[id].title});
    }

    render() {
        return (
            <div>
                <Link to="/">
                    <button className="button" id="back">
                        exit
                    </button>
                </Link>
                <div className="inside fadeIn fadeOut" id="reception">
                    {this.rooms.map(room => (
                        <div key={room.id}>
                            <button id={room.id}
                                    onClick={() => this.handleShow(room.id)}
                                    className={"button button--room " + room.class}>
                                {room.title}
                            </button>
                        </div>
                    ))}
                    <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                        <div className={"room-modal"}>
                            {/*{this.rooms[this.state.selectedItem].title}*/}
                            {this.state.selectedTitle}
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Inside;
