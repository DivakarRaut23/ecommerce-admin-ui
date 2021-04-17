import React from 'react'
import { Card } from 'react-bootstrap'
import AddProductForm from '../../components/add-product-form/AddProductForm'
import DefaultLayout from '../../components/layout/DefaultLayout'

const AddProduct = () => {
    return (

        <DefaultLayout>
        <div>
            <h1>Add New Product</h1>
            <hr/>
            <div className="add-new-product-form">
                <Card className="p-4">
                <AddProductForm/>
                </Card>
            </div>
            
        </div>
        </DefaultLayout>
    )
}

export default AddProduct
