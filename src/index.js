import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./Header"
import Footer from './Footer';
import ProejctContent from './Project';

import './project.css'

// document.getElementById("root").append(JSON.stringify(navbar))
//ReactDOM.render(navbar, document.getElementById("root"))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/


function MainContent(){
  return(
    <body className = 'main-page-body'>
      <div className='main'>
        <div className='main-page-word'>
          <div className='main-page-content'>
            <p className = "main-page-content-firstchild">Welcome to Jackson Blog</p>
            <p className = "main-page-content-secondchild">On this blog I share tips and tricks, frameworks, projects, tutorials, etc
  Make sure you subscribe to get the latest updates</p>
          </div>
        <div className = "main-box">
            <form id="main-form"> 
                <input className = "main-enter-box"  placeholder="Talk to author..."></input>
                <button className ="main-enter-button" >Enter</button>
            </form>
          </div>
        </div>
        <div className="main-page-img">
          <img className="main-profile-img"  src={process.env.PUBLIC_URL + '/Vector.svg'}></img>
        </div>
      </div>
      
    </body>
  )
}

function Home() {
  return (
      <div>
        <Header />
        <MainContent/>
        <Footer/>
      </div>
  )
}

function Project(){
  return(
    <div>
      <Header/>
      <ProejctContent/>
      <Footer/>

    </div>
  )
}


//ReactDOM.render( <ReturnFun/> ,document.getElementById("root"))

//ReactDOM.render(<Page />, document.getElementById("root"))
ReactDOM.render(<Home />, document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
