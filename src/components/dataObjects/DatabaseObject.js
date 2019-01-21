import React from 'react';
// import Tree from 'react-animated-tree'
import Tree from '../Tree'
import TableObject from './TableObject'
import ViewObject from './ViewObject'

const DatabaseObject = (props) => (
    <Tree content={props.content} type="DB" metadata={props.metadata} click={props.click}>
        <Tree content="" type="TABLES" style={{color:'#3498DB'}} metadata="tbsmeta" click={props.click}>
            {
                props.tables.map((table,index) => {
                    return (
                            <TableObject key={index} content={table.name} columns={table.columns} metadata="tbmeta" click={props.click} />
                    )
                })
            }
        </Tree>
        <Tree content="" type="VIEWS" style={{color:'#F7DC6F'}} metadata="vwsmeta" click={props.click}>
            {
                props.views.map((view,index) => {
                    return (
                            <ViewObject key={index} content={view.name} columns={view.columns} metadata="vwmeta" click={props.click} />
                    )
                })
            }
        </Tree>
    </Tree>
);

export default DatabaseObject;