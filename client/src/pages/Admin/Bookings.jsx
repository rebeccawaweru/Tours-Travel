import { AdminDashboard } from "../../layouts";
import { DataGrid } from '@mui/x-data-grid';
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Swal from 'sweetalert2'
import { BreadCrumb, LinkBtn } from "../../components";
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import client from '../../api/client'
import { Edit, Delete } from "@mui/icons-material";
export default function Bookings(){
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const handleEdit = (id) => navigate(`/updatereferal/${id}`)
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
         client.delete(`/delete/referral/${id}`).then((response)=>{
            if(response.data.success) {
              Swal.fire('Success', response.data.message, 'success')
            }
         })
      }
    })
  }
  const columns = [
    { field: 'client', headerName: 'Client', width: 150 },
    { field: 'phone', headerName: 'phone', width: 150 },
      { field: 'title', headerName: 'Title', width: 150 },
      { field: 'location', headerName: 'Location', width: 130 },
      { field: 'charge', headerName: 'Charge per click', width: 150, renderCell:(params)=>{
        return Number(params.value).toLocaleString()
      }},
      { field: 'clicks', headerName: 'Clicks', width: 90, renderCell:(params)=>{
        return Number(params.value).toLocaleString()
      }},
      {
        field: 'total',
        headerName: 'Total',
        width: 90,
        renderCell: (params) => {
          const click = Number(params.row.clicks);
          const charge = Number(params.row.charge);
          const total = click * charge;
          return total.toLocaleString();
        }
      },
      { field: 'createdAt', headerName: 'Created On', width: 130, renderCell:(params)=>{
         const createdAtDate = new Date(params.value.$date);
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

  async function getReferrals(){
    await client.get('/find/referrals').then((response)=>{
         setData(response.data)
    })
  }
  useEffect(()=>{
      getReferrals()
  },[data]) 
    return <AdminDashboard>
         <Box sx={{ height: "auto", width: '100%' }}>
         <BreadCrumb cap1="Referrals" cap2="List" link={<LinkBtn to="/addreferal" title="+ Add"/>}/>
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
      /> : <Typography>Loading...</Typography>}
    </Box>
    </AdminDashboard>
}