import { Data } from "../Models/Models";

export class TableApi 
{
    static GetTable() : Promise<Data[]>
    {
        const request = new Request("/data.json", {
            method: "GET"
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}