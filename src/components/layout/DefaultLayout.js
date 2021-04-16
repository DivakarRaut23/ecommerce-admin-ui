import React from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'


import './defaultlayout.style.css'
import SideBarNav from '../sidebar/SideBarNav'


const DefaultLayout = ({children}) => {
    return (
             <div className="default-layout">
                
                <div className="left-bar">
                    <div className="admin-log p-2 mb-5">Admin Panel</div>
                    <SideBarNav />
                </div>
                              
                <div className="main">
                <Header/>
                {children}
                <Footer/>
                </div>
            </div>
               
      
    )
}

export default DefaultLayout
