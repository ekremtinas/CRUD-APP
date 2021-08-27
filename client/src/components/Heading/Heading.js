import React from 'react';
import {Link} from 'react-router-dom';
import styles from './heading.module.css'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

const Heading = () => {
    return(
        <>
        <header className={styles.header}>
            <div>
                <NavbarBrand href="/">
                    My Team
                </NavbarBrand>
                
            </div>

            <nav>
                <li>   
                    <Link className="btn btn-primary" to="/add">Add User</Link>
                </li>
            </nav>
        </header>
        
        </>
    )
}

export default Heading;