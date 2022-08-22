import { useContext } from 'react';
import { Outlet } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="/">Fashion Point</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="products">PRODUCTS</Nav.Link>
            {
                currentUser ? (
                    <Nav.Link onClick={signOutUser}>SIGN OUT</Nav.Link>
                ) : (
                    <Nav.Link href="auth">SIGN IN</Nav.Link>
                )
            }
            
            <CartIcon/>
          </Nav>
          { isCartOpen && <CartDropdown/>}
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
