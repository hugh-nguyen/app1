import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import Tree from 'react-animated-tree'
import './styles.css'


const treeStyles = {
  position: 'absolute',
  top: 40,
  left: 40,
  color: 'white',
  fill: 'white',
  width: '100%'
}

const typeStyles = {
  fontSize: '2em',
  verticalAlign: 'middle'
}

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">React-Bootstrap</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Link Right
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link Right
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              Data explorer
              <Tree content="root" type="ROOT" open style={treeStyles}>
                <Tree content="Database_1" type="DB">
                  <Tree content="" type="TABLES">
                    <Tree content="Table_1" type="TABLE">
                      <Tree content="Column_1" type="COL" />                    
                      <Tree content="Column_2" type="COL" />                    
                      <Tree content="Column_3" type="COL" />                    
                    </Tree>
                    <Tree content="Table_2" type="TABLE">
                      <Tree content="Column_1" type="COL" />                    
                      <Tree content="Column_2" type="COL" />                    
                    </Tree>
                  </Tree>
                  <Tree content="" type="VIEWS">
                    <Tree content="View_1" type="VIEW">
                      <Tree content="Column_1" type="COL" />
                      <Tree content="Column_2" type="COL" />
                      <Tree content="Column_3" type="COL" />
                      <Tree content="Column_4" type="COL" />
                    </Tree>
                      <Tree content="View_2" type="VIEW">
                      <Tree content="Column_1" type="COL" />
                      <Tree content="Column_2" type="COL" />
                    </Tree>
                  </Tree>
                </Tree>
                <Tree content="Database_2" type="DB">
                  <Tree content="Tables" type="TABLES">
                  </Tree>
                  <Tree content="Views" type="VIEWS">
                  </Tree>
                </Tree>
                <Tree content="Database_3" type="DB">
                  <Tree content="Tables" type="TABLES">
                  </Tree>
                  <Tree content="Views" type="VIEWS">
                  </Tree>
                </Tree>
                <Tree content="subtree with children" canHide>
                  <Tree content="hello" />
                  <Tree content="sub-subtree with children">
                    <Tree content="child 1" style={{ color: '#63b1de' }} />
                    <Tree content="child 2" style={{ color: '#63b1de' }} />
                    <Tree content="child 3" style={{ color: '#63b1de' }} />
                  </Tree>
                  <Tree content="hello" />
                </Tree>
                <Tree content="hello" canHide />
                <Tree content="hello" canHide />
              </Tree>
            </div>
            <div class="col-md-9">
              Meta data tables
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
