import React from 'react';
import MTree from '../MTree'

const ColumnObject = (props) => (
    <MTree content={props.content} type="COL" color="#A0A0A0" click={() => console.log('whatsupcolumn')} />
);

export default ColumnObject;