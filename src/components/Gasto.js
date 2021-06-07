import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {

    render() {

        //destructuring de objetos
        const {cantidadGasto,nombreGasto}=this.props.gasto;
        console.log("cantidad"+cantidadGasto);
        return (
            <ul>
                <li><p>{nombreGasto}:<span className="gasto">$ {cantidadGasto}</span></p></li>
            </ul>
        )
    }
}
Gasto.propTypes={
    gasto:PropTypes.object.isRequired
}
export default Gasto;