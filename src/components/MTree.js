import React from 'react';
import Tree from 'react-animated-tree'

const MTree = (props) => (
    <div onClick={props.click} style={{cursor: 'pointer'}}>
        <Tree content={props.content} type={props.type} style={{color:props.color}} />
    </div>
);

export default MTree;