import * as React from 'react';

export class TableFooter extends React.Component
{
    public render() {
        return <tr>
                    <td className="PagingRowTableCell" colSpan={5}>
                        <div className="PagingItem">Previous</div>
                        <div className="PagingItemSelected">1</div>
                        <div className="PagingItem">2</div>
                        <div className="PagingItem">3</div>
                        <div className="PagingSummary">Displaying items <b>7</b> to <b>8</b> of <b>8</b></div>
                    </td>
               </tr>;
    }
}