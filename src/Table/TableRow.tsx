import * as React from 'react';
import { TableCell } from './TableCell';
import { Column, Data } from '../Models/Models';

type Props = {
    columns: Column<Data>[];
    row: Data;
}

export class TableRow extends React.Component<Props>
{
    constructor(props: Props) {
        super(props);
    }

    public render() { 
        return <tr key={this.props.row["Key"]}>
                {this.props.columns.map((column, index) => {
                    let value = column.accessor(this.props.row);

                    return <TableCell cellValue={value} key={index} />
                })}     
               </tr>;
    }
}