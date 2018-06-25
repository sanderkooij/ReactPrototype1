import * as React from 'react';
import { TableRow } from './TableRow';
import { TableHeader } from './TableHeader';
import { ColumnHeader } from './ColumnHeader';
import { TableFooter } from './Footer';
import './System.css';
import './RelaticsSystem.css';
import './Relatics.css';
import './Relatics5.css';
import { Column, Data } from '../Models/Models';

type Props = {
    columns: Column<Data>[];
    data: Data[];
}

export class Table extends React.Component<Props>
{
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return <table cellSpacing={0} cellPadding={0} style={{ width:"100%"}} key={1}>
                <tbody>
                    <TableHeader />
                    <ColumnHeader columns={this.props.columns} />
                    { this.props.data.map((row, index) => {
                        return <TableRow key={index} columns={this.props.columns} row={row}  />
                    })}
                    <TableFooter />
                    </tbody>
               </table>;
    }
}