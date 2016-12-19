import React from 'react';

export default class ItemDinamic extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            stateMensaje : ''
        }
    }

    componentWillMount() {
        console.log(this.props.mensaje)
        var elemento = <p>aaaaaa</p>
        if( this.props.mensaje.split('.').indexOf("jpg") != -1 ) {
            elemento = <img src={this.props.mensaje}/>
        } else if ( this.props.mensaje.split('.').indexOf("gif") != -1) {
            elemento = <img src={this.props.mensaje}/>
        } else {
            elemento = <p>{this.props.mensaje}</p>
        }
        this.setState({stateMensaje:elemento})
    }

	render(){
		return 	<div className={this.props.estiloItem} >
				{this.state.stateMensaje}
			</div>
	}
}



ItemDinamic.defaultProps = {estiloItem:"itemDinamic"}