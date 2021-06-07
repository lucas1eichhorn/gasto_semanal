import React, { Component } from 'react';

import '../css/App.css';
import Header from './Header';
import FormularioGasto from './Formulario';
import Listado from './Listado';

import { validarPresupuesto } from '../helper';
import ControlPresupuesto from './ControlPresupuesto';


class App extends Component {

  constructor(props) {
    super(props);
    //se puede resumir solo con esta parte
    this.state = {
      gastos: {},
      presupuesto: "",
      restante: ""
    };

  }

  //funcion agregar gasto al state -->esta funcion se pasa al componente y el componente la usara para mandar los datos hacia arriba
  agregarGasto = gasto_param => {
    //tomar copia del state actual
    const gastos_cpy = { ...this.state.gastos };
    console.log("se agregado el gasto", gastos_cpy);

    //agregar gasto al objeto state copia
    gastos_cpy[`gasto_${Date.now()}`] = gasto_param;
    console.log(gastos_cpy);

console.log(gasto_param);
//restar del presupuesto
this.restarPresupuesto(gasto_param.cantidadGasto);

    //actualizar state
    this.setState({ gastos: gastos_cpy });



  }

  //restar del presupuesto cuando un gasto se creao
  restarPresupuesto= cantidad=>{
    //leer el gasto
    console.log("restar cantidad:"+cantidad);
    let restar = Number(cantidad);

    //tomar una copia del state actual
    let restante=this.state.restante;
    //restamos
    let nuevo_restante=String(restante-restar);

    //actualizamos state
    this.setState({restante:nuevo_restante});
  }
  componentDidMount() {
    this.obtenerPresupuesto();
  }
  obtenerPresupuesto() {
    let presupuesto = prompt("cual es el presupuesto?");
    console.log(presupuesto);
    let resultado=validarPresupuesto(presupuesto);
    if(!resultado){
      console.log("presupuesto no valido");
      this.obtenerPresupuesto();
    }else{
      //actualizamos el state
      this.setState({presupuesto:presupuesto,restante:presupuesto});
    }

  }
  render() {

    return (
      <div className="App container">
        <Header titulo="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto agregarGasto={this.agregarGasto} />
            </div>
            <div className="one-half column">
              <Listado listado_gastos={this.state.gastos} />
              <ControlPresupuesto presupuesto={this.state.presupuesto} restante={this.state.restante}/>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
