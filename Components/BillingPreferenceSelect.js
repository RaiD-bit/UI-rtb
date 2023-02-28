import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BillingPreference() {
    const [BillingPreferenceops, setBillingPreference] = React.useState('');

    const handleChange = (event) => {
        setBillingPreference(event.target.value);
    };

    return (
    <div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">BillingPreference</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={BillingPreferenceops}
                label="BillingPreference"
                onChange={handleChange}>
                <MenuItem value={'pdf'}>pdf</MenuItem>
                <MenuItem value={'physical bill'}>physical bill</MenuItem>
            </Select>
        </FormControl>
    </div>
  )
}

export default BillingPreference