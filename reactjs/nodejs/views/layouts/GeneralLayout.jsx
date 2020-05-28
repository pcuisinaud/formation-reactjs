const React = require('react');

function GeneralLayout(props) {
    return (
        <html>
            <head>
                <title>JSX Title</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    );
}

module.exports = GeneralLayout;