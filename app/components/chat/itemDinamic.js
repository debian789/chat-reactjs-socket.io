import React from 'react';
import {default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay} from 'react-html5video';
export default class ItemDinamic extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            stateMensaje: ''
        }
    }

    componentWillMount() {
        console.log(this.props.mensaje)

        if (this.props.mensaje) {

            var element = <p></p>
            if (this.props.mensaje.split('.').indexOf("jpg") != -1) {
                element = <img src={this.props.mensaje}/>
            } else if (this.props.mensaje.split('.').indexOf("mp4") != -1) {
                element = <Video controls autoPlay>
                    <source src={this.props.mensaje} type="video/mp4"/>

                </Video>
            } else if (this.props.mensaje.split('.').indexOf("gif") != -1) {
                element = <img className="imgMessage" src={this.props.mensaje}/>
            } else {
                element = <p>{this.props.mensaje}</p>
            }
            this.setState({stateMensaje: element})
        }
    }


    render() {
        return <div className={this.props.estiloItem}>
            {this.state.stateMensaje}
        </div>
    }
}


ItemDinamic.defaultProps = {estiloItem: "itemDinamic"}