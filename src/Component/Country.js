import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

class Country extends Component{

    render(){
        return(
            <div className="col-md-4 col-lg-2 country-block" onClick={()=> localStorage.setItem("name",this.props.name)}>
                            <Link to="/details">

<img src={this.props.img} />
</Link>
<h4>{this.props.name}</h4>
<ul>
<li>Population:{this.props.pop}</li>
<li>Region:{this.props.reg}</li>
<li>capital:{this.props.cap}</li>
</ul>
            </div>
        
        )
    }
}
export default Country