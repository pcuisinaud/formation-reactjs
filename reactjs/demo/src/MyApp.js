import React from 'react';

function MyApp() {
    const title = "Simple titre";
    return (
        <div>
            <button onClick={()=>console.log('ok')}>Click</button>
            <div>{title}</div>
        </div>
    );
}

export default MyApp;