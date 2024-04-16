import { AdminDashboard } from "../../layouts";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Stack, IconButton, Typography } from "@mui/material";
import { BreadCrumb } from "../../components";
import { useState, useEffect } from "react";
import client from '../../api/client'
import { Edit, Delete } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function TourPackages(){
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const handleEdit = (id) => navigate(`/updatepackage/${id}`)
    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        confirmButtonText:'Delete',
        confirmButtonColor:'red',
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
           client.delete(`/delete/${id}`).then((response)=>{
              if(response.data.success) {
                Swal.fire('Success', response.data.message, 'success')
              }
           })
        }
      })
    }
    const columns = [
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'category', headerName: 'Destination', width: 130 },
       {
          field: 'cntry',
          headerName: 'Country/Region',
          width: 160,
          valueGetter: (value, row) => `${row.country || ''} ${row.region || ''}`,
        },
        { field: 'hotel', headerName: 'Hotel', width: 180 },
        { field: 'nights', headerName: 'Nights', width: 80 },
        { field: 'days', headerName: 'Days', width: 50 },
        {
          field: 'crrncy',
          headerName: 'Price',
          width: 150,
          valueGetter: (value, row) => `${row.currency || ''} ${Number(row.price).toLocaleString() || ''}`,
        },
        { field: 'deadline', headerName: 'Valid Till', width: 130 },
        { field: 'createdAt', headerName: 'Created On', width: 130, renderCell:(params)=>{
           const createdAtDate = new Date(params.value.$date);
          // Format date using toLocaleString or any other formatting method
          return createdAtDate.toLocaleDateString();
        }},
        {field:'Action',width:100,renderCell:(cellValues)=>{
          return(
          <Stack direction="row" spacing={1}>
            <IconButton onClick={()=>handleEdit(cellValues.id)} sx={{color:"green"}}><Edit/></IconButton>
            <IconButton onClick={()=>handleDelete(cellValues.id)} sx={{color:"red"}}><Delete/></IconButton>
           </Stack>
          )
         }}
     
      ];

    async function getPackages(){
      await client.get('/find').then((response)=>{
           setData(response.data)
      })
    }
    useEffect(()=>{
        getPackages()
    },[data]) 
    return <AdminDashboard>
          <BreadCrumb cap1="Tours" cap2="Package List"/>
       <Box sx={{ height: "auto", width: '100%' }}>
      {data && data.length > 0 ? 
      <DataGrid
        rows={data}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      /> : <Typography>No data</Typography>}
    </Box>
    </AdminDashboard>
}