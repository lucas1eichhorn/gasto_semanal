import React, { Component } from 'react';
import PropTypes from 'prop-types';
class FormularioGasto extends Component {

    //refs para leer datos de formularios
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    crearGasto = (e)=>{
        //prevenir submit default
        e.preventDefault();
        //crear el objeto con los datos de los refs
        const gasto = { nombreGasto: this.nombreGasto.current.value, 
            cantidadGasto:this.cantidadGasto.current.value }
        console.log(gasto);
        //agregar y enviarlo por porps
        //esta es la funcion definida en el componente padre, pasada por los props -> mando los datos hacia arriba a traves de ella
            this.props.agregarGasto(gasto);
        //resetar form
        e.currentTarget.reset();

    }
    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" type="text" ref={this.nombreGasto} placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" type="text" ref={this.cantidadGasto} placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}
FormularioGasto.propTypes={
    agregarGasto:PropTypes.func.isRequired
}
export default FormularioGasto;