import React, { useState } from 'react';

function Test(props) {
    return (
        <div>
            <h1>Test</h1>
            <p>{props.content}</p>
        </div>
    )
}

function MyApp() {
    //const title = "Simple titre";
    const [title, setTitle] = useState("Test");

    let list = <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
    </ul>

    return (
        <div>
            <button onClick={() => setTitle("Coucou")}>Click</button>
            <div>{title}</div>
            {list}
            <Test
                title="Titre principal"
                content="Contenu de mon composant" />
        </div>
    );
}

export default MyApp;