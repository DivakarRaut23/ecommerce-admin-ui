import React, {useState, useEffect} from 'react'
import {Form,Button, Card, Alert, Spinner} from 'react-bootstrap'
import "./loginform.style.css"
import {useHistory, useLocation} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import { sendLogin, userAutoLogin } from '../../pages/login/loginAction'

const initialState = {
    email: "rautbhai2g3@gmail.com",
    password: "unitedWay23"
  }


const LoginForm = () => {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const {isLoading , loginResponse, isAuth} = useSelector(state => state.login)


const [login, setLogin] = useState(initialState)

const token = sessionStorage.getItem("accessJWT")

let {from } =  location.state || {from: {pathname: '/'}}



useEffect(() => {
    !isAuth && dispatch(userAutoLogin());
    
    if (isAuth) history.replace(from);
    
}, [isAuth])

const handleOnChange = (e) => {
    
    const {name, value} = e.target ;

    setLogin({
        ...login, 
        [name] : value
    })

}

const handleOnSubmit = e => {
    e.preventDefault();
    
    if(!login.email  || !login.password) {
       return alert("Please fill up all the input fields")
    }

    dispatch(sendLogin(login))
   
    // history.push("/dashboard");
}

    return (
        <div className="login-form">
          

            <Card className="p-1">

            {isLoading && <Spinner variant="primary" animation="border" />}

{loginResponse?.message && (
    <Alert variant={loginResponse?.status === "success" ? "success" : "danger"}>
        {loginResponse.message}
    </Alert>
)}

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
