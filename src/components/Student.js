import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container , Paper , Button } from '@mui/material';
import { useState } from 'react';

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[Students,setStudent]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const Student={name,address}
        console.log(Student)
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Student)
        }).then(()=>{
            console.log("New Student added")
        })
    }


React.useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudent(result);
    }
)},[])
  return (

    <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"green"}}><u>Add Student</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color='secondary' onClick={handleClick}>Submit</Button>
    </Box>
      
      <h1>Students</h1>
      <Paper elevation={3} style={paperStyle}>

        {Students.map(Student=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}}>
                
                Id:{Student.id}<br/>
                Name:{Student.name}<br/>
                Address:{Student.address}

            </Paper>
        ))}

      </Paper>
    </Paper>
    </Container>
  );
}
