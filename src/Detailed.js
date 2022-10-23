import { Component } from "react";
import BorderCountries from "./Component/BorderCountries";
import axios from "axios"
async function getUsers() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      return response;
    } catch (error) {
    
    }
  }

class Detailed extends Component{
    state={
        countries:[],
       
        
    }
  

    componentDidMount =()=>{
        getUsers().then(response => {
          this.setState({
            countries: response.data
          });
        });
       
     
    
      }

    render(){
        const filltered = this.state.countries.filter(function(i){


            return i.name.common==localStorage.getItem("name")
          })
      
       
          
        return(
            <div className="detailed row" style={{display:"flex",justifyContent:"space-between"}}>
            <div className="col-md-6">
                <img src={this.props.flag} alt="flag"/>
            </div>
            <div className="col-md-4">
                <h1>{this.props.name}</h1>
                <ul style={{listStyleType:"none",lineHeight:"3em",margin:"0",padding:"0"}}>
                <li>Native Name : {this.props.native}</li>
                <li>Population : {this.props.pop}</li>
                <li>Region : {this.props.reg}</li>
                <li>Sub Region : {this.props.sub}</li>
                <li>Capital : {this.props.cap}</li>
                <li>currncies : {this.props.cur}</li>
                <li>Language : {this.props.lang}</li>
              
                
                </ul>
          </div>
           
        </div>
        )
    }
}
export default Detailed