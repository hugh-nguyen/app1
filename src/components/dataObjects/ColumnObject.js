import React from 'react';
// import Tree from 'react-animated-tree'
import Tree from '../Tree'

const ColumnObject = (props) => (
    <Tree content={props.content} type="COL" style={{color:'#A0A0A0'}} />
);

export default ColumnObject;