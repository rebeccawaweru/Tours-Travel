import { AdminDashboard } from "../../layouts";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Paper, Stack, Typography, Icon, IconButton } from "@mui/material";
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
        { field: 'location', headerName: 'Location', width: 130 },
        { field: 'category', headerName: 'Destination', width: 130 },
        { field: 'price', headerName: 'Price', width: 90, renderCell:(params)=>{
          return Number(params.value).toLocaleString()
        }},
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
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        // },
      ];

    async function getPackages(){
      await client.get('/find').then((response)=>{
           setData(response.data)
      })
    }
    useEffect(()=>{
        getPackages()
    },[]) 
    return <AdminDashboard>
       <Box sx={{ height: "auto", width: '100%' }}>
        <BreadCrumb cap1="Tours" cap2="Package List"/>
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
      />
    </Box>
    </AdminDashboard>
}