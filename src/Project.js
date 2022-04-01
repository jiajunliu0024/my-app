
import Footer from "./Footer";
import { Card } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';

class FilterCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count : 0}
        this.handleAddingDivs = this.handleAddingDivs.bind(this)
    }


    handleAddingDivs(e) {
        console.log(e.target.value);
        this.setState({count:parseInt(e.target.value)});     
    }
    
    renderDivs(){
        let count = this.state.count, uiItems = [];
        while(count--)
           uiItems.push(
            <Card className = "project-card"  title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            )
        return uiItems;
    }

    render() {
        return (
            <div>
                <h1>These are added divs </h1>
                <button className="btn-anchor-style add-row-link" value={"2"}  type="button" onClick={e => this.handleAddingDivs(e, "value")} >{'2'}</button>
                {this.renderDivs()}
            </div>
        )
    }
}

function ProjectContent(){



    
  
    return(
        
        <body className="project-page">
            <FilterCard/ >
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