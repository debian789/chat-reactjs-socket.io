import React from 'react';
import ItemListChat from './ItemListChat';

export default class ListChat extends React.Component{
   render(){
	   // Se itera sobre el this.props.conten el cual contiene los datos de los mensajes y nombres
	   // que fueron enviandos como parametros en el componente ItemListChat
      return <div className="panelListChat">
  	 {
	    this.props.conten.map((dato) => {
		return <ItemListChat user={dato.user} mensaje={dato.mensaje} key={dato.key} estiloItem={dato.estilo}/>
	    })
	 }
	</div>
    }
}

//Dato por defecto del conten con esta inicializacion no produce errror cuando se intere por 
//primera ves con la funcion map 
ListChat.defaultProps = {conten:[]}
