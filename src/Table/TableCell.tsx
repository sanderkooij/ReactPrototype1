import * as React from 'react';

export class TableCell extends React.Component<any, any>
{
    constructor(props: any){
        super(props);
    }
    
    public render() {
        return <td className="CC TableColumn cell">
                    <span className="RI"><a className="RIH">{ this.props.cellValue }</a></span>
               </td>;
    }
}