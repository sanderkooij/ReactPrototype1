import * as React from 'react';

export class TableHeader extends React.Component
{
    public render() {
        return <tr className="js-freeze-header">
                    <td className="BuildingBlockHeader" colSpan={5}>Building block 1</td>
               </tr>;
    }
}