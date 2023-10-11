import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SideBar from './SideBar';
import Button from '@mui/material/Button';
const columns= [
    
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },{
    field: 'email',
    headerName: 'E-mail',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'deleteButton',
    headerName: 'Delete', 
    width: 100,
    renderCell: (params) => (
      <Button
      variant="outlined" color="error"
        style={{ marginLeft: '20px' }}
      >
        Delete
      </Button>
    ),
  }
];

const rows = [
  { id: 1, fullName:'John Snow', email:'john@yahoo.fr', phone:'23456733' },
  { id: 2, fullName:'Joe Tribiani', email:'john@yahoo.fr', phone:'23456733' },
  { id: 3, fullName:'Harry Potter', email:'john@yahoo.fr', phone:'23456733'  },
  { id: 4, fullName:'John Doe', email:'john@yahoo.fr', phone:'23456733'  },
  { id: 5, fullName:'Jiji Hadid', email:'john@yahoo.fr', phone:'23456733'  },
  { id: 6, fullName:'Mariah Curry', email:'john@yahoo.fr', phone:'23456733' },
  { id: 7, fullName:'Bango ', email:'john@yahoo.fr', phone:'23456733'  },
  { id: 8, fullName:'Leith Ayadi', email:'john@yahoo.fr', phone:'23456733'  },
  { id: 9, fullName:'Aymen Makhlouf', email:'john@yahoo.fr', phone:'23456733' },
];

export default function Users() {
  return (
    <div style={{ display: 'flex' }}>
        <SideBar />
    <div style={{ height: 400, width: '100%',flex: 1, marginLeft: '250px' }}>
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
    </div>
  );
}
