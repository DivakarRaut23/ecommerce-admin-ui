import React from 'react'

import  './sideBarNav.style.css'

function SideBarNav() {
    return (
        <div className="sidebar-nav">
            <ul>
                <li>Dashboard</li>
                <li><a href="/category">Category</a></li>
                <li><a href="/products">Products</a></li>
                <li>Orders</li>
                <li>Users</li>
                <li>Account</li>
            </ul>
            
        </div>
    )
}

export default SideBarNav
