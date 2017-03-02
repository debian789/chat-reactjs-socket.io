import React  from "react";
import {Link} from "react-router";

export default class Ingreso extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameUser: "",
            messajeError: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        if (event.target.value) {
            this.setState({nameUser: event.target.value})
            this.setState({messajeError: ''})
        } else {
            this.setState({nameUser: ''})
        }
    }

    handleClick (event) {
        if (!this.state.nameUser) {
            event.preventDefault();
             this.setState({messajeError: <span className="validacionName" > falta ingresar un nombre</span>})

        }
    }


    render() {


        return <div className="inicioSession">
            <input type="text" placeholder="Name" onChange={this.handleChange}/>

            <Link to={{pathname: '/chat/' + this.state.nameUser, query: {showAge: true}}}  onClick= {this.handleClick} >
                <button> Ingresar</button>
            </Link>
            {
                this.state.messajeError
            }

        </div>
    }
}

