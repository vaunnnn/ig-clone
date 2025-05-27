import './NavItem.css'
import React from 'react';

const NavItem = ({ icon: IconComponent, name }) => { 
    return (
        <div className="nav-item"> 
            {IconComponent && <IconComponent />}
            <p>{name}</p>
        </div>
    );
};

export default NavItem