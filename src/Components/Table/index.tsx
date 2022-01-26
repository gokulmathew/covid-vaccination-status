import React from "react";
import style from "./table.module.scss";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";

interface IDataProps {
  data: any;
  columns: object[];
}

function Table({ data, columns }: IDataProps) {
  // Function to return Edit button
  const editButton = () => {
    return <Button type="button" icon="pi pi-fw pi-pencil"></Button>;
  };
  return (
    <div>
      <div className={`${style.tableWidth}`}>
        <DataTable
          value={data}
          rows={10}
          paginator
          paginatorTemplate="CurrentPageReport PrevPageLink PageLinks NextPageLink"
          currentPageReportTemplate="Showing {first} - {last} of {totalRecords}"
        >
          {columns.map((value: any) => (
            <Column field={value.field} header={value.header} key={value.key} />
          ))}
          <Column header="Edit" body={editButton} />
        </DataTable>
      </div>
    </div>
  );
}

const MemoizedTable = React.memo(Table);
export default MemoizedTable;
