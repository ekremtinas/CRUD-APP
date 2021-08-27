import React from 'react';
import {Link} from 'react-router-dom';
import styles from './heading.module.css'
import { BiPlus } from 'react-icons/bi';

import {
    NavbarBrand,
} from 'reactstrap';

const Heading = () => {
    return(
        <>
        <header className={styles.header}>
            {/* <div>
                <NavbarBrand href="/">
                    My Team
                </NavbarBrand> 
                
            </div> */}
            <nav>
                <li>   
                    <Link className={styles.add_user} to="/add">
                        <BiPlus style={{
                            marginRight: '5px', 
                            fontSize: '25px',
                            marginBottom: '4px'
                        }}/>
                        Add User
                    </Link>
                </li>
            </nav>
        </header>
        
        </>
    )
}

export default Heading;