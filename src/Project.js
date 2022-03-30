import Header from "./Header";
import Footer from "./Footer";
import { Button } from 'antd';
import { Card } from 'antd';
import {Row, Col} from 'antd';
function ProjectContent(){
    
  
    return(
        
        <body className="project-page">
            <div className="project-card-content">
                <div className = "project-container-card" >
                    <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
                <div className = "project-container-card" >
                    <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
                <div className = "project-container-card" >
                    <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
            </div>
            
           
            {/* <div className = "card" >
                <div className="card-design">
                    <p>React Project - Animation auto</p>
                    <div className = "card-presonal-info">
                        <img className = "card-personal-img" src = "programmer.png"></img>
                        <p>Jan 10,2020</p>
                    </div>
                    
                </div>
                <img className = "card-img" src = "./logo192.png"></img>
                
            </div>

            <div className = "card">
                <div className="card-design">
                    <p>React Project - Animation auto</p>
                    <div className = "card-presonal-info">
                        <img className = "card-personal-img" src = "programmer.png"></img>
                        <p>Jan 10,2020</p>
                    </div>
                    
                </div>
                <img className = "card-img" src = "./logo192.png"></img>
                
            </div>

            <div className = "card">
                <div className="card-design">
                    <p>React Project - Animation auto</p>
                    <div className = "card-presonal-info">
                        <img className = "card-personal-img" src = "programmer.png"></img>
                        <p>Jan 10,2020</p>
                    </div>
                    
                </div>
                <img className = "card-img" src = "./logo192.png"></img>
                
            </div> */}
            
        
        </body>
       
        )


}
function Project(){
    
    return(
      <div>
        
        <ProjectContent/>
        <Footer/>
  
      </div>
    )
  }
export default Project;