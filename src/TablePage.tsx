import * as React from 'react';
import { Table } from './Table/Table';
import { Column, Data, TableState, DataTable, ApplicationState } from './Models/Models';
import { connect } from 'react-redux';
import { fetchTable } from './Store/Table/TableReducer';

type TablePageProps = {
    fetchTable?: () => DataTable;
}

type Props = TablePageProps & TableState;

var columns: Array<Column<Data>> = [
    {
        name: "ID",
        accessor: (data) => data.Key
    },
    {
        name: "Name",
        accessor: (data) => data.Name
    },  
    {
        name: "Description",
        accessor: (data) => data.Description
    },  
    {
        name: "Created by",
        accessor: (data) => data.CreatedBy
    },  
    {
        name: "Gemaakt door",
        accessor: (data) => data.CreatedOn
    },  
];

class TablePage extends React.Component<Props, {}>
{
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() 
    {
        if(this.props.fetchTable) 
        {
            this.props.fetchTable();
        }
    }

    public render() {
        const { Data } = this.props;

        if (Data)
        {
            var tables = [];
            
            for(var i=0;i < 10; i++)
            {
                tables.push(<Table columns={columns} data={Data} key={i} />);
            }

            return tables; 
        }
        else
        {
            return <div>Loading...</div>
        }
    }
}

var mapStateToProps = (state: ApplicationState) => state.table;

var mapDispatchToProps = (dispatch: any) => {
    return {
        fetchTable: () => dispatch(fetchTable())
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(TablePage);