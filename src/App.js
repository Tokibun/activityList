import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Activities from './components/Activitites';
import Header from './components/layout/header';
import AddActivity from "./components/AddActivity";
import {v4 as uuidv4} from 'uuid';
import About from './components/pages/About';

import './App.css';
class App extends Component {
    state = {
        activities: [
            {
                id: uuidv4(),
                title: "Start a sketch or painting",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Learn or practice an instrument",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Try a new game",
                completed: false
            }
        ]
    }
    //Toggle Complete
    markComplete = (id) =>{
        this.setState({activities: this.state.activities.map(act => {
            if(act.id === id){
                act.completed = !act.completed
            }
            return act;
            }) });
    }

    //Delete Activity
    delAct = (id) =>{
        this.setState({activities: [...this.state.activities.filter(act => act.id!== id)]});
    }

    //Add Activity
    addActivity = (title) => {
        const newActivity = {
            id: uuidv4(),
            title,
            completed: false
        }
        this.setState({activities: [...this.state.activities, newActivity]})
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddActivity addActivity={this.addActivity}/>
                                {/*Bringing Activity component and also bringing in activity state has prop*/}
                                <Activities activities={this.state.activities} markComplete={this.markComplete} delAct={this.delAct}/>
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About}/>
                    </div>
                {/*<header className="App-header">*/}
                {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
                {/*    <p>*/}
                {/*        Edit <code>src/App.js</code> and save to reload.*/}
                {/*    </p>*/}
                {/*    <a*/}
                {/*        className="App-link"*/}
                {/*        href="https://reactjs.org"*/}
                {/*        target="_blank"*/}
                {/*        rel="noopener noreferrer"*/}
                {/*    >*/}
                {/*        Learn React*/}
                {/*    </a>*/}
                {/*</header>*/}
                </div>
            </Router>
        )
            ;
    }
}

export default App;
