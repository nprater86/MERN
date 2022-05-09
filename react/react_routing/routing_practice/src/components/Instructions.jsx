import React from 'react';

const ComponentName = props => {
    return (
        <div>
            <ol>
                <li className="mb-2">localhost:3000/home: Display the home page, with a generic "Welcome" heading</li>
                <li className="mb-2">localhost:3000/4: Display the number "4", or any other number that was sent through</li>
                <li className="mb-2">localhost:3000/hello: Display the word "hello" or any other word that was sent through</li>
                <li className="mb-2">localhost:3000/hello/blue/red: Display the word "hello" in blue text with a red background. Works with any other valid word and colors.</li>
            </ol>
        </div>
    );
}

export default ComponentName;