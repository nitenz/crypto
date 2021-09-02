import React from 'react';
import './menu-list.styles.scss';

import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class MenuList extends React.Component {
  render() {
          return (
            <div className="menu-list">
                <Navbar bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand>Nitenz Crypto Page</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link onClick={this.props.handleClick} href="#news">Crypto News</Nav.Link>
                    <Nav.Link onClick={this.props.handleClick} href="#chart">Crypto chart</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
          );
  }
}


export default MenuList;