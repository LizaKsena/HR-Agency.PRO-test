/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

// eslint-disable-next-line no-unused-vars
export default function BasicDateRangePicker({ onChange }) {
  const [value, setValue] = React.useState([]);

  onChange(value);
  console.log(value);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in' }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 1 }} />
          </>
        )}
      />
    </LocalizationProvider>
  );
}
