import React, {Component} from 'react';
import ActivityItem from "./ActivityItem";
import PropTypes from 'prop-types';

class Activitites extends Component{
    render(){
        return(
            this.props.activities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity}
                              markComplete={this.props.markComplete}
                              delAct={this.props.delAct}/>
            ))
        );
    }
}

//PropTypes
Activitites.propTypes = {
    activities: PropTypes.array.isRequired
}

export default Activitites;