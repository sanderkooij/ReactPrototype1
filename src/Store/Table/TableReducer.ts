import { Reducer } from 'redux';
import { TableState, Data } from '../../Models/Models';
import { TableApi } from '../../Api/TableApi';

interface FetchTableSuccessAction { type: 'FETCH_TABLE_SUCCESS', table: Data[] }

type KnownAction = FetchTableSuccessAction;

export function fetchTable() {
    return (dispatch: any) => {
        return TableApi.GetTable().then((table: Data[]) => {
            dispatch(actionCreators.fetchTable(table));
        }).catch(error => {
            throw(error);
        });
    }
}

export const actionCreators = {
    fetchTable: (table: Data[]) => <FetchTableSuccessAction>{ type: 'FETCH_TABLE_SUCCESS', table: table }
};

const InitialState = {
    Data: new Array<Data>(),
};  

const table: Reducer<TableState> = (state: TableState = InitialState, action: KnownAction) => {
    switch (action.type) {
        case 'FETCH_TABLE_SUCCESS':
            var datas = new Array<Data>();

            for(var i=0;i < 20; i++) {
                datas.push(...action.table);
            }

            return { Data: datas };
        default:
            return state;
    }
};

export default table;