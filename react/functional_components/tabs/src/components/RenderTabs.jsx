import React, { useState } from 'react';

const RenderTabs = props => {
    const [header, setHeader] = useState(props.tabs[0].name);
    const [content, setContent] = useState(props.tabs[0].content);

    function onClickHander(e,tab) {
        setHeader(tab.name);
        setContent(tab.content);
        document.querySelectorAll(".btn").forEach(btn => btn.classList = "btn btn-light");
        e.target.className = "btn btn-dark";
    }

    return (
        <div>
            <div className="btn-group" role="group">
                { props.tabs.map( (tab,i) =>
                    <button key={i} type="button" className="btn btn-light" onClick={ e => onClickHander(e,tab) }> {tab.name} </button>
                )}
            </div>
            <h1 className="mt-2">{ header } Content:</h1>
            <p>{ content }</p>
        </div>
    );
}

export default RenderTabs;