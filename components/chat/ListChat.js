import React from 'react';
import ItemListChat from './ItemListChat';

export default class ListChat extends React.Component{

	render(){
		
		return <div className="panelListChat">
				{
					this.props.conten.map((dato) => {
						return <ItemListChat user={dato.user} mensaje={dato.mensaje} key={dato.key} estiloItem={dato.estilo}/>
					})
				}
			</div>
		}
}


ListChat.defaultProps = {conten:[]}