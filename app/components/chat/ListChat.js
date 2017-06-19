import React from 'react'
import ItemListChat from './ItemListChat'

export default class ListChat extends React.Component {

  onClickClear (evento) {
    this.props.onClearMessage.call(null, 'message')
  }

  render () {

    return <div className="panelListChat">
      <div className="btnHeader">
        <div className="btnPanic" onClick={this.onClickClear.bind(this)}>Limpiar</div>
        <a href="#" className="salir">Salir</a>
      </div>
      {
        this.props.conten.map((dato) => {
          return <ItemListChat user={dato.user} mensaje={dato.mensaje} key={dato.key}
                               estiloItem={dato.estilo}/>
        })
      }
    </div>
  }
}

ListChat.defaultProps = {conten: []}