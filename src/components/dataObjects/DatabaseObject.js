import React from 'react';
import Tree from 'react-animated-tree'
import TableObject from './TableObject'
import ViewObject from './ViewObject'

const DatabaseObject = (props) => (
    <Tree content={props.content} type="DB">
        <Tree content="" type="TABLES" style={{color:'#3498DB'}}>
            {
                props.tables.map((table,index) => {
                    return (
                            <TableObject key={index} content={table.name} columns={table.columns} />
                    )
                })
            }
        </Tree>
        <Tree content="" type="VIEWS" style={{color:'#F7DC6F'}}>
            {
                props.views.map((view,index) => {
                    return (
                            <ViewObject key={index} content={view.name} columns={view.columns} />
                    )
                })
            }
        </Tree>
    </Tree>
);

export default DatabaseObject;