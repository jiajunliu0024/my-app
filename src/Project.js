
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

class ProjectContent extends React.Component{
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
        return(
        
        <body className="project-page">
            
                <div>
                    <button className="btn-anchor-style add-row-link" value={"9"}  type="button" onClick={e => this.handleAddingDivs(e, "value")} >{'2'}</button>
                </div>
                <div className = "project-container-card" >
                    {this.renderDivs()}
                </div>
            
        
        </body>
       
        )
    }
}


function Project(){
    
    return(
      
        
        <ProjectContent/>
       
    )
  }
export default Project;