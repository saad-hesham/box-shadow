import { Component } from "react";

class BorderCountries extends Component{

    render(){
        
        return(
            
           <div>Border countries : <span>{this.props.border}</span></div>
        
        )
    }
}
export default BorderCountries