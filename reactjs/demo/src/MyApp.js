import React from 'react';

function MyApp() {
    const title = "Simple titre";

    let list = <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
    </ul>

    return (
        <div>
            <button onClick={()=>console.log('ok')}>Click</button>
            <div>{title}</div>
            {list}
        </div>
    );
}

export default MyApp;