import React from 'react';
import MTree from '../MTree'
import ColumnObject from './ColumnObject'

const expand = () => {
    console.log('expand whatsup table');
}

const TableObject = (props) => (
    <MTree content={props.content} type="TABLE" click={expand}>
        {
            props.columns.map((column,index) => {
                return (
                    <ColumnObject key={index} content={column.name} />
                )
            })
        }
    </MTree>
);

export default TableObject;