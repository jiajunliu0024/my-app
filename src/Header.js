
import React  from "react"

import { Link } from 'react-router-dom';
import "./index.css";
export default function Header(){
    function handleOnclick(e) {
      e.preventDefault();

      
      
    }
    function MouseOver(event) {
      event.target.style.background = "#6246EA" ;
      
    }
    function MouseOut(event){
      event.target.style.background="";
    }


    return(
      <div>
        
        <div className='nav'>
       
          <ul className='blogger-name'>
                  <li className="author">Jackson </li>
                  <li className="blog">.Blog</li>
          </ul>
          <div className = "nav-items">
            <li>
              <Link to='/home' className = "nav-item" >
                  Home
              </Link>
            </li>
            
            <li>
              <Link to='/project' className = "nav-item" >
                  Project
              </Link>
            </li>
            <li>
              <Link to='/contact' className = "nav-item" >
                  Contact Me
              </Link>
            </li>
          </div>
        
         
        
          
           
       
         
        </div>        
      </div>
      
    )
    
}
