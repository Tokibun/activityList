import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ActivityItem extends Component{
    getStyle = () =>{
        return{
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            backgroundColor: this.props.activities.completed ? '#ccffd9' : '#ccffff'
        }

    }

    render(){
        const { id, title } = this.props.activities;
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delAct.bind(this, id)} style={btnStyle}>Delete</button>
                </p>
            </div>
        );
    }
}

//PropTypes
ActivityItem.propTypes = {
    activities: PropTypes.object.isRequired
}


const btnStyle ={
    background: '#ffcccc',
    color: '#cc00cc',
    border: 'none',
    padding: '5px 5px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
}

export default ActivityItem;