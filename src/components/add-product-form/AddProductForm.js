import React, {useState} from 'react'
import {Button, Form } from 'react-bootstrap'

const initialState = {
    name: "",
    qty:0,
    isAvailable : "off",
    price: 0,
    salePrice : 0,
    saleEndDate: null,
    description: "",
    images: [],
    categories: []


}

const AddProductForm = () => {

    const [newProduct, setNewProduct] = useState(initialState)

    const handleOnChange = e => {
        const {name, value} = e.target

        setNewProduct({
            ...newProduct,
            [name] : value,
        })
    }

   const handleOnSubmit = e => {
       e.preventDefault()
   }

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control name="name" type="text" value={newProduct.name} onChange={handleOnChange} placeholder="Enter product name" required />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group >
    <Form.Label>Is Available</Form.Label>
    <Form.Check name="isAvailable" value={newProduct.isAvailable} onChange={handleOnChange} id="isAvailable" type="switch" label="Available" >
    </Form.Check>
  </Form.Group>

  <Form.Group >
    <Form.Label>Price</Form.Label>
    <Form.Control name="price" type="number" value={newProduct.price} onChange={handleOnChange} placeholder="23" required />
  </Form.Group>

  <Form.Group >
    <Form.Label>Sale Price</Form.Label>
    <Form.Control name="salePrice" type="number"  value={newProduct.salePrice} onChange={handleOnChange} placeholder="19" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Sale Price End Date</Form.Label>
    <Form.Control name="saleEndDate" type="date" value={newProduct.saleEndDate} onChange={handleOnChange} />
  </Form.Group>

  <Form.Group>
  <Form.Label> Quantity </Form.Label>
     <Form.Check name="qty" type="number" placeholder="7" value={newProduct.qty} onChange={handleOnChange} required/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" type="text" value={newProduct.description} onChange={handleOnChange} as="textarea" row={3} placeholder="Write full description" required/>
  </Form.Group>

  {/* <Form.Group>
    <Form.Label>Images </Form.Label>
    <Form.File name="images" value={newProduct.images} onChange={handleOnChange} id="exampleFormControlFile1" label="Example file input" />
  </Form.Group> */}

  {/* <Form.Group >
    <Form.Label>Select Categories </Form.Label>
    <Form.Control name="categories" defaultValue={newProduct.categories} onChange={handleOnChange} as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group> */}
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        
        </div>
    )
}

export default AddProductForm 
