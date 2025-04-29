import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Box,
  Typography,
  Slider,
  Divider,
  InputAdornment,
} from '@mui/material';

export default function Filter() {
  const [salary, setSalary] = useState(0);

  const valueLabelFormat = (val) => `${val / 1000} K`;

  return (
    <div
      className="container-fluid"
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 24,
        alignItems: 'center',  // you wrote "between", but "center" is probably what you want
      }}
    >
      <TextField
        sx={{ width: 250 }}
        label="Search By Job Title, Role"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="bi bi-search"></i>
            </InputAdornment>
          ),
        }}
      />

      <Divider orientation="vertical" variant="middle" flexItem />

      <TextField
        select
        label="Preferred Location"
        defaultValue=""
        sx={{ width: 250 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="bi bi-geo-alt-fill"></i>
            </InputAdornment>
          ),
        }}
      >
        <MenuItem value="Coimbatore">Coimbatore</MenuItem>
        <MenuItem value="Bangalore">Bangalore</MenuItem>
        <MenuItem value="Chennai">Chennai</MenuItem>
        <MenuItem value="Kochin">Kochin</MenuItem>
        <MenuItem value="Pune">Pune</MenuItem>
        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
        <MenuItem value="Delhi">Delhi</MenuItem>
      </TextField>

      <Divider orientation="vertical" variant="middle" flexItem />

      <TextField
        select
        label="Job Type"
        defaultValue=""
        sx={{ width: 250 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="bi bi-person-lines-fill"></i>
            </InputAdornment>
          ),
        }}
      >
        <MenuItem value="Full Time">Full Time</MenuItem>
        <MenuItem value="Intern">Internship</MenuItem>
        <MenuItem value="Part Time">Part Time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
        <MenuItem value="Freelance">Freelance</MenuItem>
      </TextField>

      <Divider orientation="vertical" variant="middle" flexItem />

      <Box sx={{ width: 250 }}>
        <Typography id="salary-slider" gutterBottom textAlign="center">
          Salary Per Month : {valueLabelFormat(salary)}
        </Typography>

        <Slider
          aria-labelledby="salary-slider"
          value={salary}
          min={0}
          max={80000}
          step={1000}
          onChange={(_, v) => setSalary(v)}
          valueLabelDisplay="on"
          valueLabelFormat={valueLabelFormat}
          marks={[
            { value: 0, label: '0 K' },
            { value: 80000, label: '80 K' },
          ]}
        />
      </Box>
    </div>
  );
}
