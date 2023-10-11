import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns= [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, fullName:'John Snow' },
  { id: 2, fullName:'Joe Tribiani' },
  { id: 3, fullName:'Harry Potter'  },
  { id: 4, fullName:'John Doe'  },
  { id: 5, fullName:'Jiji Hadid'  },
  { id: 6, fullName:'Mariah Curry' },
  { id: 7, fullName:'Bango '  },
  { id: 8, fullName:'Leith Ayadi'  },
  { id: 9, fullName:'Aymen Makhlouf' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
