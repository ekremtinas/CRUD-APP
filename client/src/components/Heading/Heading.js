import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

const Heading = () => {
    return(
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/">
                    My Team
                </NavbarBrand>
            </Container>

            <Nav>
                <NavItem>   
                    <Link className="btn btn-primary" to="/add">Add User</Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Heading;