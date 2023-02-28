import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CountrySelect() {
    const [countryops, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    return (
    <div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countryops}
                label="Country"
                onChange={handleChange}>
                <MenuItem value={'India'}>India</MenuItem>
                <MenuItem value={'Nepal'}>Nepal</MenuItem>
                <MenuItem value={'Bangladesh'}>Bangladesh</MenuItem>
                <MenuItem value={'Sri Lanka'}>Sri Lanka</MenuItem>
            </Select>
        </FormControl>
    </div>
  )
}

export default CountrySelect