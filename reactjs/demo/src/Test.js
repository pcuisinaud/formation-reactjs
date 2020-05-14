import React from 'react';

function Test(props) {
    return (
        <div>
            {/* <h1>Test</h1> */}
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {props.children}
        </div>
    )
}

export default Test;