import React , {useEffect, useState} from 'react'; 
import './PropertyBox.css'

import { DataStore } from '@aws-amplify/datastore';
import { Todo, Properties } from '../models';



function PropertyBox (props) {
    const [address, setAddress] = useState('123 Default Ave'); // will have to fetch this data
    const [description, setDescription] = useState('This is a wonderful home'); 
    const [show, setShow] = useState(true);
    const [propertyId, setPropertyId] = useState(''); 
    
    
    async function createItem() {
        try {
            // const ret = await DataStore.save(
            //     new Todo ({
            //         "rented": true,
            //         "rent": 1020,
            //         "price": props.cost, 
            //         "address": props.address, 
            //         "description": "Lorem ipsum dolor sit amet"
            //     })
            // );

            // add username (maybe name + email) and then add propertyid
            const store = await DataStore.save(
                new Properties ({
                    "username": props.username, 
                    "rented": true,
                    "rent": props.rentAmount, 
                    "price": props.cost, 
                    "address": props.address, 
                    "description": 'alex'
                })
            );
            setPropertyId(store.id); 
            
        } catch (error) {
            console.log(error); 
        }
        
    }

    async function queryProperties() {
        console.log('debugging queryProperties')
        const models = await DataStore.query(Todo);
        console.log(models);
        const models2 = await DataStore.query(Properties, c => c.username('eq', props.username)); 
        console.log(models2); 
    }

    useEffect(() => {
        createItem();
        queryProperties(); 
    }, []);


    if (!show) {
        return (<></>); 
    } else {
        return (
            <div className='propboxborder' id='boxborder'>
                <div className='card'>
                    <div className='contentHeader'>
                        <p>{props.address}</p>
                        <p>{props.cost}</p>
                        <p>{props.description}</p>
                        <p>{propertyId}</p>
                    </div>
                    <div className='deleteContainer'>
                        <button className="btn btn-light btn-sm" id='propertyDeleteButton' onClick={() => setShow(false)} >Delete</button> 
                    </div>
    
                </div>
            </div>
        ); 
    }


}




export default PropertyBox