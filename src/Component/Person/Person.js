import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import './Person.css';

const Person = (props) => {
    const {name,phone,company ,email,img} = props.person;
    const handleAddPerson = props.handleAddPerson;
    
    const handleDeletePerson = props.handleDeletePerson;
    return (
        <div className="person-container">
           <img src={img} alt=""/>
            <h1>Name: {name}</h1>
            <h3>Mobile Number:{phone}</h3>
            <h5>{company.name}</h5>
            <p>Email Address: {email}</p>
            <button onClick={() => handleAddPerson(props.person)}> <FontAwesomeIcon icon={faPlus}/></button>
            
        </div>
    );
};

export default Person;