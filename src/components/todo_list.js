import React from 'react';

export default React.createClass({
    render() {
        var tasks = ['Buy Milk', 'Clean Room', 'Pay Phone Bill', 'Learn ReactJS'];
        return (
            <ul>
            { tasks.map((item, index)=>{ return (<li key={index}>{item}</li>) })}
            </ul>
        )
    }

})
