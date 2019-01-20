import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import Tree from 'react-animated-tree'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
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
        <div className="container">
          <div className="row data-explorer-heading">
            <div className="col-md-3">
              Data Explorer
            </div>
            <div className="col-md-9">
              Metadata
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Tree content="root" type="ROOT" open style={treeStyles}>
                <Tree content="Database_1" type="DB">
                  <Tree content="" type="TABLES" style={{color:'#3498DB'}}>
                    <Tree content="Table_1" type="TABLE" style={{color:'#3498DB'}}>
                      <Tree content="Column_1" type="COL" />                    
                      <Tree content="Column_2" type="COL" />                    
                      <Tree content="Column_3" type="COL" />                    
                    </Tree>
                    <Tree content="Table_2" type="TABLE" style={{color:'#3498DB'}}>
                      <Tree content="Column_1" type="COL" />                    
                      <Tree content="Column_2" type="COL" />                    
                    </Tree>
                  </Tree>
                  <Tree content="" type="VIEWS" style={{color:'#F7DC6F'}}>
                    <Tree content="View_1" type="VIEW">
                      <Tree content="Column_1" type="COL" />
                      <Tree content="Column_2" type="COL" />
                      <Tree content="Column_3" type="COL" />
                      <Tree content="Column_4" type="COL" />
                    </Tree>
                      <Tree content="View_2" type="VIEW" style={{color:'#F7DC6F'}}>
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
              </Tree>
            </div>
            <div className="col-md-9">
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Technical data 1" />
                  <ListItemText primary="example data 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Technical data 2" />
                  <ListItemText primary="example data 2" />
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
