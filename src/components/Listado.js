import React, { Component } from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';
class Listado extends Component {
    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {console.log("Listado gastos")}

                {Object.keys(this.props.listado_gastos).map(key => (

                   <Gasto gasto={this.props.listado_gastos[key]} key={key}/>
                ))}

            </div>
        )
    }
}
Listado.propTypes={
    listado_gastos:PropTypes.object.isRequired
}
export default Listado;