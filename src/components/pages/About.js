import React from 'react'

function About(){
    return(
        <React.Fragment>
            <h1 style={aboutStyle}>About</h1>
            <p>This is an Activity app to track completed/pending activities. Created to learn the basics of react.</p>
        </React.Fragment>
    )
}

const aboutStyle = {
    padding: "5px",
    textAlign: "center"
}

export default About;