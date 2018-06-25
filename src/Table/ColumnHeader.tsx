import * as React from 'react';
import { Column, Data } from '../Models/Models';

type Props = {
    columns: Column<Data>[];
}

export class ColumnHeader extends React.Component<Props>
{
    constructor(props:Props) {
        super(props);
    }

    public render() {
        
        return <tr className="js-freeze-header">
            { 
                this.props.columns.map((column, index) => {
                    return <td className="ColumnsHeader" key={index}>
                        <table cellPadding="0" cellSpacing="0" className="ColumnsHeaderTable" style={{border: "0px"}}>
                            <tbody>
                                <tr>
                                    <td className="ColumnsHeaderMenu">
                                        {column.name}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>;
                })
            }
        </tr>;
    }
}