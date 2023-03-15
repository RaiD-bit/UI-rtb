import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ManageCustomersForm from './ManageCustomersForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HomeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} m={2} pt={3}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="MANAGE CUSTOMERS" {...a11yProps(0)} />
          <Tab label="ADD PRODUCTS" {...a11yProps(1)} />
          <Tab label="SPEND VIEW" {...a11yProps(2)} />
          <Tab label="ESTIMATED BILL" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ManageCustomersForm></ManageCustomersForm>
      </TabPanel>
      <TabPanel value={value} index={1}>
      ADD PRODUCTS
      </TabPanel>
      <TabPanel value={value} index={2}>
      SPEND VIEW
      </TabPanel>
      <TabPanel value={value} index={3}>
      ESTIMATED BILL
      </TabPanel>
    </Box>
  );
}