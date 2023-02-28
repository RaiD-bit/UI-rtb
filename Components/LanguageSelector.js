import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Language() {
    const [Languageops, setLanguage] = React.useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
    <div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Languageops}
                label="Language"
                onChange={handleChange}>
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Hindi'}>Hindi</MenuItem>
                <MenuItem value={'Marathi'}>Marathi</MenuItem>
            </Select>
        </FormControl>
    </div>
  )
}

export default Language