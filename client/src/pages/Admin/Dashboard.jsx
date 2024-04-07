import { useEffect, useState } from "react";
import { AdminDashboard } from "../../layouts";
import client from '../../api/client'
import { Statistic, BreadCrumb } from "../../components";
import {Box, Grid, Typography, Container} from '@mui/material'
import { Group, Folder, AccountTree } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
export default function Dashboard(){
    const [users, setUsers] = useState([])
    const [data, setData] = useState(0)
    const [referral, setReferral] = useState(0)
    const columns = [
        { field: 'username', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
    ]
    async function getPackages(){
        await client.get('/find').then((response)=>{
             setData(response.data.length)
        })
      }
    async function getReferrals(){
        await client.get('/find/referrals').then((response)=>{
             setReferral(response.data.length)
        })
      }
    useEffect(()=>{
    client.get('/users').then((response)=>{
       setUsers(response.data)
    })
    getPackages()
    getReferrals()
    },[])
    return <AdminDashboard>
     <BreadCrumb cap1="Report" cap2="Analysis"/>
     <Grid container direction="row" maxWidth gap={4} justifyContent="center">
     <Statistic icon={<Group/>} caption="Users" number={users.length}/>
     <Statistic icon={<Folder/>} caption="Packages" number={data}/>
     <Statistic icon={<AccountTree />} caption="Referrals" number={referral}/>
     </Grid>
     <Box marginTop={2} sx={{ height: "auto", width: '100%' }}>
        <Typography fontSize="small">Admin Users</Typography>
     <DataGrid
        rows={users}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}/>
    </Box>
    </AdminDashboard>
}