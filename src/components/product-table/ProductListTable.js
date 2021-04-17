import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Spinner, Table } from 'react-bootstrap'
import { Alert, Button } from 'react-bootstrap'
import {fetchProducts,removeProducts} from '../../pages/product/productAction'


function ProductListTable() {

  const dispatch = useDispatch()

  const {isLoading, status, message, productList} = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  const handleOnDelete = id => {
   
    dispatch(removeProducts(id))
  
}

    return (
        <div>
          {isLoading && <Spinner variant="primary" animation="border" />}

{status === "error" && (
  <Alert variant={status === "success" ? "success" : "danger"}>
    {message}
  </Alert>
)}
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Status</th>
      <th>Name</th>
      <th>Price</th>
      <th>Thumbnail</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    
      {
        productList?.map((row, i) => (
          <tr key={row._id}>
          <td>{i}</td>
          <td>{row.status}</td>
          <td>{row.name}</td>
          <td>{row.price}</td>
          <td>img loading</td>
          <td><Button variant="primary"> Edit</Button>{" "}</td>
          <td><Button variant="danger"onClick={() =>handleOnDelete(row._id)}> Delete </Button>{" "}</td>
        </tr>
        ))
      }
     
    
  </tbody>
</Table>
            
        </div>
    )
}

export default ProductListTable
