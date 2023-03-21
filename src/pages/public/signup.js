import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef, useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { UserContext } from "../../context/userContext";

function SignUp() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const { registerUser } = useContext(UserContext); //calling function registerUser from userContext using useContext

    const [errorEmail, setErrorEmail] = useState();
    const [errorPassword, setErrorPassword] = useState();
    const [errorUsername, setErrorUsername] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();
        const username = usernameRef.current.value; // show error message if username address not entered
        const email = emailRef.current.value; // show error message if email address not entered
        const password = passwordRef.current.value; // show error message if password address not entered
        
        if(email){
            setErrorEmail("");
        }else{
            setErrorEmail("Enter an email address");
        }
        if(password){
            setErrorPassword("");
        }else{
            setErrorPassword("Enter password");
        }
        if(username){
            setErrorUsername("");
        }else{
            setErrorUsername("Enter an username");
        }

        if(email && password && username){
            await registerUser(email, username, password); // Calling registerUser funtion in userContext
        }
    }

  return (
    <div className='container'>
        <div className='col-md-6 m-auto mt-5'>
            <Card>
                <Card.Body>
                    <Card.Title>SignUp</Card.Title>
                    <Form className="signUp-form" onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" ref={usernameRef}/>
                            <Form.Label style={{ color: 'red' }}>{errorUsername}</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                            <Form.Label style={{ color: 'red' }}>{errorEmail}</Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                            <Form.Label style={{ color: 'red' }}>{errorPassword}</Form.Label>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SignUp
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Already having an account <a href='/signin'>SignIn</a></small>
                </Card.Footer>
            </Card>
        </div>
    </div>
  );
}

export default SignUp;