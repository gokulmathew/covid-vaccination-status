import style from "./table.module.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";

interface IDataProps {
  data: any;
  columns: object[];
}

export default function Table({ data, columns }: IDataProps) {
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
            <Column field={value.field} header={value.header} />
          ))}
        </DataTable>
      </div>
    </div>
  );
}