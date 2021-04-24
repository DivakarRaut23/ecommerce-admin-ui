import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'

function ModalBox({children, show, toggleModal}) {

   
  

    return (
        <>
        
  
        <Modal  show={show} onHide={toggleModal} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          
        </Modal>
      </>
    )
}

export default ModalBox


