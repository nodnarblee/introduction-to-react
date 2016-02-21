import React from 'react';

export default React.createClass({
    render() {
        return (
            <ul>
            { this.props.tasks.map((item, index)=>{ return (<li key={index}>{item}</li>) })}
            </ul>
        )
    }

})
