import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import './word.css';


function WordApi(){
   //intializing strings using useState
  const [word, setWord] = useState();
  const [definition ,setDefinition] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [definitionString, setDefinitionString] = useState();
     
     //calling api to  get the mening or definition of a given word
      const fetchData = async () => {
        const headers = {
          'X-RapidAPI-Key': '0e4150e13amsh6211e0fb63b9ee6p19087fjsne2f9e5820b3d',
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        };
        const url = 'https://wordsapiv1.p.rapidapi.com/words/'+word+'/typeOf';
        const response = await axios.get(url, { headers });
        let defArray = response.data.typeOf;
        //checking whether word has definition if yes we will add the array contents to a string for displaying. If no definition is found we shows the error message so
        if(defArray.length == 0){
          setDefinition("No definition found");
          setDefinitionString("");
        }
        else{
          let defSet="";
          {defArray.map(name => ( 
            defSet =defSet+name+", "
            
          ))}  
         
          setDefinitionString("Definition");
          // //removing the last comma and space appended
           setDefinition(defSet.substring(0,defSet.length-2));
      }
        
      
       
       
      };
  

   

//validating whether field is empty if yes we will give an error message else calls fetchdata to access word api
  const handleSearch = (event) => {
    event.preventDefault();
    if(word){
      setErrorMessage("");
      setDefinitionString("Definition");
    fetchData();
    }else{
      setErrorMessage("* Enter word for definition");
      setDefinition("");
      setDefinitionString("");
    }
  };
//using form and card we display the definition of the word received using word api
  return (
    <div className='container'>
    <div className='col-md-6 m-auto mt-5'>
    <Card>
    <Card.Body>
        <Card.Title>WordAPI</Card.Title>
        <Form className="word-form" onSubmit={handleSearch}>
            <Form.Group className="mb-3">
                <Form.Label>Word</Form.Label>
                <Form.Control type="text" placeholder="Enter word" onChange={(event) => setWord(event.target.value.trim())} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'red' }}>{errorMessage}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="primary" type="submit">
                  Search
              </Button>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>{definitionString}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label style={{ maxwidth: '20rem' }}  muitiline = {true}>{definition}</Form.Label>
            </Form.Group>
           
        </Form>
    </Card.Body>
   
 </Card>
 </div>
 </div>
  );
}

export default WordApi;
