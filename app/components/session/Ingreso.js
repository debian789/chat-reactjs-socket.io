import React  from "react";
import {Link} from "react-router";

export default class Ingreso extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameUser: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({nameUser: event.target.value})
    }

    render() {
        return <div className="inicioSession">
            <input type="text" placeholder="Name" onChange={this.handleChange}/>

            <Link to={{pathname: '/chat/' + this.state.nameUser, query: {showAge: true}}}>
                <button> Ingresar</button>
            </Link>

        </div>
    }
}

