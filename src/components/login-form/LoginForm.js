import React, {useState} from 'react'
import {Form,Button, Card} from 'react-bootstrap'
import "./loginform.style.css"

const initialState = {
    email: "twinscreation@gmail.com",
    password: "password123"
    
}


const LoginForm = () => {

const [login, setLogin] = useState(initialState)

const handleOnChange = (e) => {
    
    const {name, value} = e.target ;

    setLogin({
        ...login, 
        [name] : value
    })

}

const handleOnSubmit = e => {
    e.preventDefault();
    console.log(login)
}

    return (
        <div className="login-form">
            <Card className="p-4">

            <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value ={login.email} onChange={handleOnChange} required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" value={login.password} type="password" placeholder="Password" onChange={handleOnChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <a href="/reset-password"> Forget Password ?</a>
            
            </Card>
            
        </div>
    )
}

export default LoginForm
