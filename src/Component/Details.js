import { Component } from "react";
import Upper from "./Upper";
import { Routes, Route, Link } from "react-router-dom";
import Detailed from "../Detailed";
import axios from "axios"
async function getUsers() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      return response;
    } catch (error) {
    
    }
  }

class Details extends Component{

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
          const country = filltered.map(function(i){
         let obj = Object.entries(i.languages)[0]
            return (<Detailed 
            flag={i.flags.png}
            name = {i.name.common}
            native = {i.name.official}
            pop = {i.population}
            reg = {i.region}
            sub = {i.subregion}
            cap = {i.capital}
            cur = {Object.entries(i.currencies)[0][0]}
            lang = {Object.entries(i.languages)[0][1]}

             
            />)

          })
        return(
            <div>
                <Upper/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <Link to="/"><button id="back">back</button></Link>
                        </div>
                   {country}
                  
                </div>
                </div>

            </div>
        
        )
    }
}
export default Details