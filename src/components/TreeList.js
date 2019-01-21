import React from 'react';
import Tree from 'react-animated-tree'
import DatabaseObject from './dataObjects/DatabaseObject'

const treeStyles = {
    position: 'absolute',
    top: 40,
    left: 40,
    color: 'white',
    fill: 'white',
    width: '100%'
}
  
const TreeList = (props) => (
    <Tree content="root" type="ROOT" open style={treeStyles} metadata="rootmeta" click={props.click}>
    {
        props.data.databases.map((database, index) => {
            return <DatabaseObject key={index} content={database.name} 
                tables={database.tables} views={database.views} metadata="dbmeta" click={props.click}
            />
        })
    }
    </Tree>
);

export default TreeList;