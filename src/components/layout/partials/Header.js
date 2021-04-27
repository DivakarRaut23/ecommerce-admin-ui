import React from 'react'

import {Navbar} from 'react-bootstrap'


import {logOut} from '../../../pages/login/loginAction'

import {useHistory} from 'react-router-dom'

import {useDispatch} from 'react-redux'
const Header = () => {

  const dispatch = useDispatch()
  const history = useHistory();

  const handleLogOut = () => {

    dispatch(logOut())
    history.push("/")
  }



    return (
      <Navbar bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text><i class="fas fa-bell text-success"></i></Navbar.Text>
        <Navbar.Text onClick={handleLogOut} style={{ cursor: "pointer" }}><i class="fas fa-user text-primary"></i> Log Out</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Header
