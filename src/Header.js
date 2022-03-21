
import React  from "react"


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
        
        <nav className='nav'>
       
        <ul className='blogger-name'>
                <li className="author">Jackson </li>
                <li className="blog">.Blog</li>
        </ul>
        
        
         
        <ul className='nav-items'>
           <li>
            <button onMouseOver={MouseOver} onMouseOut={MouseOut}>Home</button>
           </li>
           <li>
            <button onClick={() => console.log('work work')}>Project</button>
           </li>
           <li>
            <button onClick={() => console.log('work work')}>Contact</button>
           </li>
           <li >
            <button onClick={() => console.log('work work')}>Email Me</button>
           </li>
        </ul>
         
        </nav>        
      </div>
      
    )
    
}