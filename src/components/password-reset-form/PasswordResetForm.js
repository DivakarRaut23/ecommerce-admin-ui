import React, {useState} from 'react'
import {Form,Button, Card} from 'react-bootstrap'
import "./passwordResetForm.style.css"


const PasswordResetForm = () => {

const [email, setEmail] = useState("")

const handleOnChange = (e) => {
    
    const {value} = e.target ;

    setEmail(value)

}

const handleOnSubmit = e => {
    e.preventDefault();
    console.log(email)
}

    return (
        <div className="password-reset">
            <Card className="p-4">

            <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value ={email} onChange={handleOnChange} required/>
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <a href="/"> Sign in Here</a>
            
            </Card>
            
        </div>
    )
}

export default PasswordResetForm
