import './App.css';
import ice from './ice.jpeg';
import earth from './earth.jpg';
import mountain from './mountain.jpeg';
import fox from './fox.jpeg';
import cloud from './cloud.jpeg';
import logo from './logo.png';
import {format} from "date-fns";
function App() {
    //get current date and time with date-fns
    const {format} = require('date-fns');
//today's date
    const today =format(new Date(),"dd'.'MM'.'yyyy");
    const todayTime = format(new Date(),"HH:mm");
    console.log(today);
    console.log(todayTime);
    return (
        <div>
            <header>
                <div className="header">
                    <img src={logo} alt="sss"/>
                    <div className="header-right">
                            <p>{today}</p>
                            <p style={{margin: "0 0 0 5px"}}>{todayTime}</p>
                    </div>
                </div>
            </header>
            <div className="cards">
                <div className="card">
                    <img src={ice} alt=""/>
                    <div className="centered">
                    <span className="font-link">
                        HEY
                    </span>
                    </div>
                </div>
                <div className="card">
                    <img src={earth} alt=""/>
                    <div className="centered">
                    <span className="font-link">
                        LET'S
                    </span>
                    </div>
                </div>
                <div className="card">
                    <img src={mountain} alt=""/>
                    <div className="centered">
                    <span className="font-link">
                        GIVE
                    </span>
                    </div>
                </div>
                <div className="card">
                    <img src={fox} alt=""/>
                    <div className="centered">
                    <span className="font-link">
                        ALL
                    </span>
                    </div>
                </div>
                <div className="card">
                    <img src={cloud} alt=""/>
                    <div className="centered">
                    <span className="font-link">
                        YOU CAN
                    </span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
