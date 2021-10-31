import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import './Header.css';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar className="bgcolor" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand>CourierHero</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>

                        {(user?.displayName || user?.email) &&
                            <Nav.Link className="link" as={Link} to="/allOrders">Manage all Orders</Nav.Link>}

                        {(user?.displayName || user?.email) &&
                            <Nav.Link className="link" as={Link} to="/myOrders">My Orders</Nav.Link>}

                        {(user?.displayName || user?.email) ?
                        <button onClick={logOut} className="bttn me-2">LogOut</button> :
                            <Nav.Link className="link" as={Link} to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  

 
            </>
    );
};

export default Header;