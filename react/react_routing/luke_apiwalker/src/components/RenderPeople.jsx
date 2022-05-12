import React from 'react';
import { useHistory } from 'react-router-dom';

const RenderPeople = props => {
    const history = useHistory();

    function handleLink(e, data){
        e.preventDefault();
        let url = data.url;
        let urlID = url.slice(22, url.length-1);
        history.push(`/${urlID}`)
    }

    return (
        <div>
            <h1 className="mt-5">{ props.personData.name }</h1>
            {
                props.homeworldData.name ?
                <h3 className="mt-5">Homeworld: <a href="#" onClick={ (e)  => handleLink(e, props.homeworldData) } style={{fontWeight: 'normal'}}>{ props.homeworldData.name }</a></h3> :
                <h3 className="mt-5">Homeworld: <span style={{fontWeight: 'normal'}}>Loading</span></h3>
            }
            <h3 className="mt-3">Birth Year: <span style={{fontWeight: 'normal'}}>{ props.personData.birth_year }</span></h3>
            {
                props.speciesData.name ?
                <h3 className="mt-3">Species: <a href="#" onClick={ (e)  => handleLink(e, props.speciesData) } style={{fontWeight: 'normal'}}>{ props.speciesData.name }</a></h3> :
                <h3 className="mt-3">Species: <span style={{fontWeight: 'normal'}}>Loading</span></h3>
            }
            <h3 className="mt-3">Height: <span style={{fontWeight: 'normal'}}>{ props.personData.height }</span></h3>
            <h3 className="mt-3">Mass: <span style={{fontWeight: 'normal'}}>{ props.personData.mass }</span></h3>
            <h3 className="mt-3">Hair Color: <span style={{fontWeight: 'normal'}}>{ props.personData.hair_color }</span></h3>
            <h3 className="mt-3">Skin Color: <span style={{fontWeight: 'normal'}}>{ props.personData.skin_color }</span></h3>
            <h3 className="mt-3">Eye Color: <span style={{fontWeight: 'normal'}}>{ props.personData.eye_color }</span></h3>
        </div>
    );
}

export default RenderPeople;