import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import Home from "./Home";
import Recommend from "./Recommend";
import Check from "./Check";
import Input from './components/Input';
import Button from './components/Button';
import Title from './Title';
import Logo from '../../image/logo.png';

function Home () {
    return (
        <Router> 
            <div style={{margin:20}}> 
                <HelloHeader/>   
                <div>   
                 <hr />
                    <Route path="/" exact={true} component={Homebutton} />
                    <Route path="/Check" component={Check} />
                    <Route path="/Recommend" component={Recommend} />
                </div>
                
            </div> 
        </Router>
    )
} 

const Homebutton = () => {
    return(
        <div className="Homebutton">
            <div className="head" style={{display: 'flex', flexDirection:'row'}}>
                <div>
                    <img src={Logo} classname="logo" alt="logo" width='15%'/>
                    <HelloHeader/>
                </div>
            </div>

            <div className="body">
               <h1><b>Welcome</b><br></br></h1>
                <Link to="/Check">
                    <Button>졸업요건 확인하기</Button><br/><br/>
                </Link>
                <Link to="/Recommend">
                    <Button>시간표 추천받기</Button>
                </Link>
            </div>

            <div className="footer">
            </div>
        </div>
    )
}

const HelloHeader = () => {
    return(
        <div> 
            <h1 style={styleHeader}>HUFS SCHEDULER</h1>
        </div>
    ) 
}


/*const HelloFooter = () => ( 
        <div style={styleHeader}> 
            시간표 추천 시스템
        </div> 
    )*/

     

    
const styleHeader = { 
    backgroundColor:'navy', 
    color:'#ffffff', 
    padding:8 
}

export default Home;

