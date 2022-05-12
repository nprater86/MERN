import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import RenderPlanet from './RenderPlanet';
import RenderPeople from './RenderPeople';
import RenderStarship from './RenderStarship';
import RenderVehicle from './RenderVehicle';
import RenderSpecies from './RenderSpecies';


const ComponentName = props => {
    const { selection } = useParams();
    const { id } = useParams();
    const [data, setData] = useState({});
    const [homeworldData, setHomeworldData] = useState({});
    const [speciesData, setSpeciesData] = useState({});
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(async () => {
        setLoaded(false);
        setError(false);
        setData({});
        setHomeworldData({});
        setSpeciesData({});

        let dataResponse = await axios.get(`https://swapi.dev/api/${selection}/${id}`)
            .catch(err=>{
                console.log("Data error!");
                console.log(err);
                setError(true);
            });
        setData(dataResponse.data);
        setLoaded(true);
        
        if(selection === 'people'){
            let homeworldResponse = await axios.get(dataResponse.data.homeworld)
                .catch(err=>{
                    console.log("Planet error!");
                    console.log(err);
                    setError(true);
                });
            setHomeworldData(homeworldResponse.data);
            if(dataResponse.data.species.length > 0) {
                let speciesResponse = await axios.get(dataResponse.data.species)
                    .catch(err=>{
                        console.log("Species error!");
                        console.log(err);
                        setError(true);
                    });
                setSpeciesData(speciesResponse.data);
            }
        }
    },[selection,id]);

    if (error) {
        return (
            <div>
                <img className="mt-5" src="https://y.yarn.co/069f448f-8b5d-4813-82cf-70dd7db9fcdc_text.gif" alt="These aren't the droids you're looking for." />
            </div>
        );
    }

    if (loaded === false){
        return (
            <div>
                <img className="mt-5" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8yYzExMDQ1NC01YjMzLTQ0MTYtYmY5Yi03Mjk5MmM3Y2I1NmYvZDYwZWIxdi03OTIxMjYyNC1lODQyLTRlNTUtOGQ1OC00YWM3NTE0Y2E4ZTQuZ2lmIn1dXX0.Xec9CX8HQuT4UiXvVsDK6chlU9zaegg8baqFaHnzew0" alt="Loading" />
            </div>
        );
    } else if (selection === 'people'){
        return (
            <div>
                <RenderPeople personData={ data } homeworldData={ homeworldData } speciesData={ speciesData } />
            </div>
        );
    } else if (selection === 'planets'){
        return (
            <div>
                <RenderPlanet data={ data } />
            </div>
        );
    } else if (selection === 'species'){
        return (
            <div>
                <RenderSpecies data={ data } />
            </div>
        );
    } else if (selection === 'starships'){
        return (
            <div>
                <RenderStarship data={ data } />
            </div>
        );
    } else if (selection === 'vehicles') {
        return (
            <div>
                <RenderVehicle data={ data } />
            </div>
        );
    }
}

export default ComponentName;