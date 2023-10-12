import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SideBar from './SideBar';
const columns= [
  { field: 'id', headerName: 'ID', width: 70 },

  { 
    field: 'flightNumber', 
    headerName: 'Fligh n°',
    description: 'This column has a value getter and is not sortable.',
    sortable: false, 
    width: 160 
},
  {
    field: 'airline',
    headerName: 'Airline',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },{
    field: 'planeModel',
    headerName: 'Plane Model',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'availableSeats',
    headerName: 'Available Seats',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id:1 ,flightNumber: 145, airline:'Emirates', planeModel:'boeing 777-300er', availableSeats:'500' },
  { id:2 ,flightNumber: 265, airline:'American Airlines', planeModel:'boeing 777-300er', availableSeats:'500' },
  { id:3 ,flightNumber: 386, airline:'Delta Air Lines', planeModel:'boeing 777-300er', availableSeats:'500'  },
  { id:4 ,flightNumber: 413, airline:'Ryanair', planeModel:'boeing 777-300er', availableSeats:'500'  },
  { id:5 ,flightNumber: 597, airline:'Qatar Airways', planeModel:'boeing 777-300er', availableSeats:'500'  },
  { id:6 ,flightNumber: 675, airline:'Singapore Airlines', planeModel:'boeing 777-300er', availableSeats:'500' },
  { id:7 ,flightNumber: 734, airline:'Tunisair ', planeModel:'boeing 777-300er', availableSeats:'500'  },
];

export default function Flights() {
  const [clicked, setClicked] = useState(true);
  return (
    <div style={{ display: 'flex' }}>
        <SideBar setClicked={setClicked} clicked={clicked}/>
    <div style={{ height: 400, width: '100%',display: 'flex',
          flexWrap: 'wrap',
          flex: 1,
          marginLeft: clicked ? '250px' : '70px',}}>
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
