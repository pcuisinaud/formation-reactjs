import React from 'react';

function Test(props) {
    return (
        <div>
            <h1>Test</h1>
            <p>{props.content}</p>
        </div>
    )
}

function MyApp() {
    const title = "Simple titre";

    let list = <ul>
                <li>Element 1</li>
                <li>Element 2</li>
                <li>Element 3</li>
            </ul>

    return (
            <div>
                <button onClick={() => console.log('ok')}>Click</button>
                <div>{title}</div>
                {list}
                <Test content="Contenu de mon composant" />
            </div>
    );
}

export default MyApp;