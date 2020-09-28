import React from "react";


function EmployeeTable(props) {
    return(
        <table className="table table-striped">
            <thead>
                <tr className="tr-header">
                    {props.colums.map(column =>(
                        <th onClick={() => props.handleSort(column.colName)} scope="col" key={column.colName}>{column.colName} <a className="fa fa-fw fa-sort"></a></th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.filteredEmployees.map(employee =>(
                    <tr className="tr-stuff" key={employee.email}>
                        <td>{employee.name.first + "" + employee.name.last}</td>
                        <td>{employee.id}</td>
                    </tr>    
                ))}
            </tbody>
        </table>

    );
}

export default EmployeeTable



