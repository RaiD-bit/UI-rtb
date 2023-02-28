import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function StateSelect() {
    const [stateops, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };

    return (
    <div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stateops}
                label="State"
                onChange={handleChange}>
                <MenuItem value={'Delhi'}>Delhi</MenuItem>
                <MenuItem value={'Kolkata'}>Kolkata</MenuItem>
                <MenuItem value={'Chennai'}>Chennai</MenuItem>
                <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
            </Select>
        </FormControl>
    </div>
  )
}

export default StateSelect