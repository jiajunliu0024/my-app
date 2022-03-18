import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./Header"



// document.getElementById("root").append(JSON.stringify(navbar))
//ReactDOM.render(navbar, document.getElementById("root"))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


function ReturnFun(){
  return(
    <div>
      <header>
        <nav>
          <img src={process.env.PUBLIC_URL + '/logo192.png'} />

        </nav>
      </header>
      <h1> Reason i am ecited yp learner</h1>
      <ul>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
      <footer>
          <small>
          © 2021 J development. All rights reserved.
          </small>
      </footer>
    </div>

  )
}
/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/


function MainContent(){
  return(
    <body className='main'>
      
      <ol className='main-page-content'>
      <li> dfasdsadfsda</li>
      <li>Hi,There</li>
      </ol>
      <img className="profile-img" align = "right" src={process.env.PUBLIC_URL + '/programmer.svg'}></img>

    </body>
    
  )
}

function Page() {
  return (
      <div>
        <Header />
        <MainContent/>
      </div>
  )
}

//ReactDOM.render( <ReturnFun/> ,document.getElementById("root"))

//ReactDOM.render(<Page />, document.getElementById("root"))
ReactDOM.render(<Page />, document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
