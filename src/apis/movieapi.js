import React, { useState} from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import movieStyle from'./movieStyle.css'



function MovieApi(){
  //intializing strings and arrays using useState

  const [searchstring, setSearchString] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [movieArray, setMovieArray] = useState([]);
  const [movieDetails, setMovieDetails] = useState();

 

     
     //function for fetching data from Movie API
      const fetchData = async () => {
       
        const headers = {
          'X-RapidAPI-Key': '0e4150e13amsh6211e0fb63b9ee6p19087fjsne2f9e5820b3d',
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        };
        const url = 'https://movie-database-alternative.p.rapidapi.com/?s='+searchstring+'&r=json&page=1';
        const response = await axios.get(url, { headers });
       
        //checking whether we are getting Response and if it is true we are assigning data to movie array to get displayed or if we are getting response as false we are displayig error message
        if(response.data.Response === 'True'){
            setMovieDetails("Movie Details");
            setMovieArray(response.data.Search);
        }
        else{
            setErrorMessage(response.data.Error);
            setMovieArray([]);
            setMovieDetails("");
        }
      
       
      };


   


  const handleSearch = (event) => {
    event.preventDefault();
    //checking whether search string has been inputed. if yes we will call api using fetchdata function or else we will show an error message
    if(searchstring){
        setErrorMessage("");
        fetchData();
    }
    else{
        setErrorMessage("* Please enter movie");
        setMovieDetails("");
        setMovieArray([]);
    }
   
  };
//here we are using form and card to display UI and using map function we are listing the movies in movie array which we got by calling Movie API
  return (
    <div className='container'>
    <div className='col-md-6 m-auto movieApi'>
    <Card>
    <Card.Body>
        <Card.Title>MovieAPI</Card.Title>
        <Form className="word-form" onSubmit={handleSearch}>
        <Form.Group className="mb-3">
                <Form.Label>Search</Form.Label>
                <Form.Control type="text"  placeholder="Enter movie name" onChange={(event) => setSearchString(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label style={{ color: 'red' }}>{errorMessage}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
                <Button className={movieStyle.buttonStyle} variant="primary" type="submit">
                    Search
                </Button>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>{movieDetails}</Form.Label>
            </Form.Group>
            <Form.Group>
          {movieArray.map(item => (
            <Form.Group>
             <section className={movieStyle.movieGrid}>
             <img src={item.Poster} alt="image" width = "100" height ="100"/>
             <p>{item.Title}{"  : "}{item.Year}</p>
             </section>
             </Form.Group>
          ))}
            </Form.Group>
        </Form>
    </Card.Body>
   
 </Card>
 </div>
 </div>
  );
}

export default MovieApi;
