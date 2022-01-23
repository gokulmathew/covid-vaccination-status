import React, { useRef } from "react";
import style from './primeDataTable.module.scss';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeicons/primeicons.css";
// import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
//  import Search from '../../assets/icons/TableIcons/search.svg';

interface IDataProps {
  data: any;
  columns: object[];
  onSort: (e: any) => void;
  onFilter: (e: any) => void;
  sortField: string;
  sortorder: number;
  filters: any;
  globalFilter: string;
  changeGlobalFilter: (e: any) => void;
  CSV: boolean;
  setCSV: (e: any) => void;
}

export default function PrimeDataTable({
  data,
  columns,
  onSort,
  onFilter,
  sortorder,
  sortField,
  filters,
  globalFilter,
  changeGlobalFilter,
  CSV,
  setCSV,
}: IDataProps) {
  let dt: any = useRef(null);

  const onExport = () => {
    dt.current.exportCSV();
  };

  if (CSV) {
    dt.current.exportcsv();
    setCSV(false);
  }

  const header = (
    <div className="container-fluid mx-px-0">
      <div className="row mx-ep-justify-between">
        <div className="col-4 pl-0 text-left">
          <Button
            type="button"
            icon="pi pi-external-link"
            iconPos="left"
            label="CSV"
            className="whiteColor"
            onClick={onExport}
          />
        </div>

        <div className="col-4 pr-0">
          <div className="d-flex justify-content-end ">
            {/* <img src={Search} alt="search icon" /> */}

            <InputText
              type="search"
              className = {`${style.searchBox}`}
              onInput={(e: any) =>
                changeGlobalFilter(e.target && e.target.value && e.target.value)
              }
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className={`${style.tableWidth}`}>
      {/* <div> */}
        <DataTable
          value={data}
          // resizableColumns={true}
          // Don't remove the below code. Header wont be used, in future, it may
          // header-(header}
          // header="Responsive" columnResizeMode="fit"
          ref={dt}
          // responsive={true}
          // The below decides the number of rows to be displayed in the table
          rows={10}
          globalFilter={globalFilter}
          sortField={sortField}
          // sortorder={sortorder}
          onSort={onSort}
          onFilter={onFilter}
          filters={filters}
          paginator
          // info : the below line is the template of pagination
          // paginatorTemplate="Current Page Report First Pagelink PrevPaget ink Pagelink
          paginatorTemplate="CurrentPageReport PrevPageLink PageLinks NextPageLink"
          currentPageReportTemplate="Showing {first} - {last} of {totalRecords}"
        >
          {columns.map((value: any) => (
            <Column
              field={value.field}
              header={value.header}
              sortable={value.sortable}
              filter={value.filter}
              filterPlaceholder={value.filterPlaceholder}
              //   body={value.body)
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
}
