import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <Paper elevation={3} component="footer" sx={{ p: 2, mt: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Copyright />
      </Box>
    </Paper>
  );
}
