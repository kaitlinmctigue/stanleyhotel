import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import '../styles/index.css';
import './inside.css';
import bar from "../images/rooms/bar.jpg";
import lobby from "../images/rooms/lobby.jpg";
import lounge from "../images/rooms/lounge.jpg";
import maze from "../images/rooms/maze.jpg";
import room from "../images/rooms/room.jpg";


class Inside extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            selectedItem: 0,
            selectedTitle: "",
            selectedDesc: "",
            selectedImg: ""
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.rooms = [
            {
                "id": 0,
                "title": "The Colorado Lounge",
                "class": "lounge",
                "img": lounge,
                "desc": "The Colorado Lounge is a large room inside of the Overlook Hotel. The Colorado Lounge is located off a section of The Lobby, and is based on the similarly themed lounge in the Ahwahnee Hotel."
            },
            {
                "id": 1,
                "title": "The Gold Room",
                "class": "bar",
                "img": bar,
                "desc": "The Gold Room, or The Gold Ballroom is a large ballroom contained within the Overlook Hotel. The Red Bathroom is attached to the Gold Room. In the book, it was named The Colorado Lounge. The original name was used for the 1980 film's sitting room, which is a room where guests can relax and read or chat. The Gold Room is presumed to be the most haunted room in the hotel, besides Room 217/237."
            },
            {
                "id": 2,
                "title": "Room 237",
                "class": "suite",
                "img": room,
                "desc": 'Room 237, not to be confused with the documentary of the same name, was a room in the Overlook Hotel in The Shining. In the book it was called 217.One time Danny Torrance visited this room after a ball strangely rolled to him from its open doors. Later, he claimed that a "crazy woman" tried to strangle him. Jack Torrance then entered 237, in search of what his son claimed to have confronted. He instead encountered a young naked woman in the bathroom, having a bath who came out and kissed him.'
            },
            {
                "id": 3,
                "title": "The Lobby",
                "class": "reception",
                "img": lobby,
                "desc": "The Lobby is the grand front entrance in the Overlook Hotel. It possesses the reception area and leads to both The Gold Room and The Colorado Lounge. The lobby is based on the similarly themed lobby of the Ahwahnee Hotel."
            },
            {
                "id": 4,
                "title": "The Hedge Maze",
                "class": "maze",
                "img": maze,
                "desc": 'The hedge maze refers to the labyrinth of hedges found at the Overlook Hotel in the 1980 film version of The Shining. The 1977 novel and the 1997 miniseries versions of The Shining use moving topiary animals in place of the maze. In 2015, The Stanley Hotel, the original hotel which Stephen King used as a basis when he first wrote The Shining, installed its own hedge maze in order to pay homage to its Shining roots. Before this it had neither a maze, nor the signature topiary animals author Stephen King once wrote about.'
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
        this.setState({selectedDesc: this.rooms[id].desc});
        this.setState({selectedImg: this.rooms[id].img});
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
                    <div className={"inside__text"}>
                        This following map is The Stanley Hotel reimagined through the eyes of King when he visited the hotel for the first time, and which rooms may have inspired key places and events from the book.
                    </div>
                    {this.rooms.map(room => (
                        <div key={room.id}>
                            <button id={room.id}
                                    onClick={() => this.handleShow(room.id)}
                                    className={"button button--room " + room.class}>
                                {room.title}
                            </button>
                        </div>
                    ))}
                    <Modal show={this.state.show}
                           onHide={this.handleClose}
                           bsSize="large"
                           animation={false}>
                        <div className={"room-modal"}>
                            <div className={"room-modal__img"}>
                                <img src={this.state.selectedImg}></img>
                            </div>
                            <div className={"room-modal__title"}>
                                {this.state.selectedTitle}
                            </div>
                            <div className={"room-modal__desc"}>
                                {this.state.selectedDesc}
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Inside;
