import React, {Component} from 'react';
import Activitites from './components/Activitites';
import Header from './components/layout/header';
import AddActivity from "./components/AddActivity";
import './App.css';
import {v4 as uuidv4} from 'uuid';

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
            <div className="App">
                <div className="container">
                    <Header />
                    <AddActivity addActivity={this.addActivity}/>
                    {/*Bringing Activity component and also bringing in activity state has prop*/}
                    <Activitites activities={this.state.activities} markComplete={this.markComplete} delAct={this.delAct}/>
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
        )
            ;
    }
}

export default App;
