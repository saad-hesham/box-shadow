import { Component } from "react";
import Country from "./Country";
import axios from 'axios';
import Upper from "./Upper"

async function getUsers() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      return response;
    } catch (error) {
    
    }
  }
class Countries extends Component{
    state={
        countries:[],
        filttred:"",
        
    }
  
 oninputstate = event =>{
    
    this.setState({filttred:event.target.value})
 }
  
    componentDidMount =()=>{
        getUsers().then(response => {
          this.setState({
            countries: response.data
          });
        });
       
     
    
      }
  


    render(){

  let filter = this.state.filttred.charAt(0).toUpperCase() + this.state.filttred.slice(1);
  
 

      const filltered = this.state.countries.filter(function(i){


        return i.name.common.startsWith(filter)
        
      })

  
        const country = filltered.map(function(i){
        
            return <Country 
            img={i.flags.png}
            name={i.name.common}
            pop = {i.population}
            reg = {i.region}
            cap = {i.capital}
           
            />
        
         })
         


        
        return(
            <div className="countries">
              <Upper/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 search-bar" >
                            <input className="col-sm-8 search-input" type="Text" placeholder="Search for a country"  onChange={this.oninputstate} id="input"
                          
                          />
                        </div>
                    </div>
                    <div className="row parent-row">
                      {country}
                     
           
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Countries