import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons";
class upper extends Component{
    render(){
        function handleSubmit(e) {
            e.preventDefault();
           document.body.classList.toggle("dark")
          }
        return(
            <div className="upper-bar">
            <div className="container">
                <div className="row">

                    <div className="col-sm-8 col-md-9 col-lg-10 Header">
                        <h2>Where in the world?</h2>
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-2 Dark-mode-button" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faMoon}/> Dark Mode 
                    </div>
                </div>
               
            </div>
            </div>
        )
    }
}
export default upper