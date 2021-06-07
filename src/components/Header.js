import React,{Component} from 'react';
/*import React from 'react';
const Header = (props)=>{
    return(
    <header>
        <h1>{props.titulo}</h1>
    </header>
    )
}

export default Header;

*/



    class Header extends Component {
        constructor(props) {
            super();
        }        
        render(){
            return(
                <h1>{this.props.titulo}</h1>
            )
        }
    }

    export default Header;