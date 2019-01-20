import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import Tree from 'react-animated-tree'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DatabaseObject from './components/dataObjects/DatabaseObject'
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

  state = {
    metadata: [
      { "key":"name", "value":"root" },
      { "key":"metadata1", "value":"this is some metadata" },
      { "key":"metadata2", "value":"this is more metadata" }
    ]
  }
  
  render() {
    let data = JSON.parse('{"databases":[{"name":"Database 1","metadata":[{"key":"name","value":"Database 1"},{"key":"date","value":"20/01/2018"},{"key":"metadata1","value":"abc"},{"key":"metadata2","value":"def"}],"tables":[{"name":"Table 1","metadata":[{"key":"name","value":"Table 1"},{"key":"date","value":"23/01/2018"},{"key":"metadata1","value":"3ew"},{"key":"metadata2","value":"gds"}],"columns":[{"type":"column","name":"Column 1","metadata":[{"key":"name","value":"Column 1"},{"key":"date","value":"20/12/2018"},{"key":"metadata1","value":"31ew"},{"key":"metadata2","value":"sgdcx"}]},{"type":"column","name":"Column 2","metadata":[{"key":"name","value":"Column 2"},{"key":"date","value":"02/12/2018"},{"key":"metadata1","value":"sgfafsw"},{"key":"metadata2","value":"sghfd"}]},{"type":"column","name":"Column 3","metadata":[{"key":"name","value":"Column 3"},{"key":"date","value":"23/08/2018"},{"key":"metadata1","value":"vsv"},{"key":"metadata2","value":"xqee"}]},{"type":"column","name":"Column 4","metadata":[{"key":"name","value":"Column 4"},{"key":"date","value":"20/07/2018"},{"key":"metadata1","value":"4eryrehd"},{"key":"metadata2","value":"dfd"}]}]},{"name":"Table 2","metadata":[{"key":"name","value":"Table 2"},{"key":"date","value":"29/11/2018"},{"key":"metadata1","value":"scvxcbvcx"},{"key":"metadata2","value":"3tgd"}],"columns":[{"type":"column","name":"Column 1","metadata":[{"key":"name","value":"Column 1"},{"key":"date","value":"15/08/2018"},{"key":"metadata1","value":"dgs"},{"key":"metadata2","value":"44t"}]},{"type":"column","name":"Column 2","metadata":[{"key":"name","value":"Column 2"},{"key":"date","value":"22/12/2018"},{"key":"metadata1","value":"77gs"},{"key":"metadata2","value":"99t"}]}]},{"name":"Table 3","metadata":[{"key":"name","value":"Table 3"},{"key":"date","value":"02/12/2018"},{"key":"metadata1","value":"4t4g"},{"key":"metadata2","value":"jgnb"}],"columns":[{"type":"column","name":"Column 1","metadata":[{"key":"name","value":"Column 1"},{"key":"date","value":"22/12/2018"},{"key":"metadata1","value":"77gs"},{"key":"metadata2","value":"99t"}]},{"type":"column","name":"Column 2","metadata":[{"key":"name","value":"Column 2"},{"key":"date","value":"27/09/2018"},{"key":"metadata1","value":"45dg"},{"key":"metadata2","value":"9dg9t"}]},{"type":"column","name":"Column 3","metadata":[{"key":"name","value":"Column 3"},{"key":"date","value":"15/02/2018"},{"key":"metadata1","value":"gsdg4"},{"key":"metadata2","value":"tttygv"}]}]}],"views":[{"name":"View 1","metadata":[{"key":"name","value":"View 1"},{"key":"date","value":"11/11/2018"},{"key":"metadata1","value":"sgag4"},{"key":"metadata2","value":"jwg4tagnb"}],"columns":[{"type":"column","name":"Column 1","metadata":[{"key":"name","value":"Column 1"},{"key":"date","value":"19/10/2018"},{"key":"metadata1","value":"gsadfasw"},{"key":"metadata2","value":"h55hd"}]},{"type":"column","name":"Column 2","metadata":[{"key":"name","value":"Column 2"},{"key":"date","value":"19/12/2018"},{"key":"metadata1","value":"578ijgbn"},{"key":"metadata2","value":"rt4fddgbn"}]}]},{"name":"View 2","metadata":[{"key":"name","value":"View 2"},{"key":"date","value":"08/07/2018"},{"key":"metadata1","value":"dgrw9gu"},{"key":"metadata2","value":"f9gu48"}],"columns":[{"type":"column","name":"Column 1","metadata":[{"key":"name","value":"Column 1"},{"key":"date","value":"11/04/2018"},{"key":"metadata1","value":"39t8vdn"},{"key":"metadata2","value":"8g744hf"}]},{"type":"column","name":"Column 2","metadata":[{"key":"name","value":"Column 2"},{"key":"date","value":"19/02/2018"},{"key":"metadata1","value":"sdfg87nv"},{"key":"metadata2","value":"32739gf-d"}]},{"type":"column","name":"Column 3","metadata":[{"key":"name","value":"Column 3"},{"key":"date","value":"11/06/2018"},{"key":"metadata1","value":"dsfas8g7dn"},{"key":"metadata2","value":"dfjd"}]}]}]},{"name":"Database 2","tables":[{"name":"Table 1","columns":[{"type":"column","name":"Column 1"},{"type":"column","name":"Column 2"},{"type":"column","name":"Column 3"}]},{"name":"Table 2","columns":[{"type":"column","name":"Column 1"},{"type":"column","name":"Column 2"},{"type":"column","name":"Column 3"}]}],"views":[{"name":"View 1","columns":[{"type":"column","name":"Column 1"},{"type":"column","name":"Column 2"},{"type":"column","name":"Column 3"},{"type":"column","name":"Column 4"}]}]}]}');
  
    console.log(data)
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
                {
                  data.databases.map((database, index) => {
                    return <DatabaseObject 
                      key={index} 
                      content={database.name} 
                      tables={database.tables} 
                      views={database.views} 
                    />
                  })
                }
                {/* <Tree content="Database_1" type="DB">
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
                </Tree> */}
              </Tree>
            </div>
            <div className="col-md-9">
              <List component="nav">
                {
                  this.state.metadata.map((md, index) => {
                    return ( 
                      <ListItem key={index} button>
                        <ListItemText primary={md.key} />
                        <ListItemText primary={md.value} />
                      </ListItem>
                    )
                  })
                }
                {/* <ListItem button>
                  <ListItemText primary="Technical data 1" />
                  <ListItemText primary="example data 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Technical data 2" />
                  <ListItemText primary="example data 2" />
                </ListItem> */}
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
