import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TitleSelect() {
  const [title, setTitle] = React.useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Box >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Title</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={title}
          label="Title"
          onChange={handleChange}
        >
          <MenuItem value={'Ms'}>Ms</MenuItem>
          <MenuItem value={'Mrs'}>Mrs</MenuItem>
          <MenuItem value={'Mr'}>Mr</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}