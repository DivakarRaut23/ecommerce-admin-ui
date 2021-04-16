import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'

function AddCategoryForm() {
    return (
        <div>
            <Form>
  <Form.Row>
    <Col xs={6}>
      <Form.Control
      name="category" placeholder="Product" />
    </Col>
    <Col>
      <Form.Control placeholder="State" />
    </Col>
    <Col>
      <Button >Add</Button>
    </Col>
  </Form.Row>
</Form>
        </div>
    )
}

export default AddCategoryForm
