import React from 'react';
// import Tree from 'react-animated-tree'
import Tree from '../Tree'
import ColumnObject from './ColumnObject'


const ViewObject = (props) => (
    <Tree content={props.content} type="VIEW">
         {
            props.columns.map((column,index) => {
                return (
                    <ColumnObject key={index} content={column.name} />
                )
            })
        }
    </Tree>
);

export default ViewObject;