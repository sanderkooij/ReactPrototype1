export class Column<T> {
    name: string;
    accessor: (t: T) => any;
}

export class Data {
    Key: string;
    Name: string;
    Description: string;
    CreatedBy: string;
    CreatedOn: string;
}

export interface TableState {
    Data: Data[];
}

export class DataTable implements TableState {
    Columns: Column<Data>[];
    Data: Data[];
}

export interface ApplicationState {
    table: TableState;
}