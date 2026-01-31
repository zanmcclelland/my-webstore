import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Welcome to your new
      </Typography>
      <Typography variant="h5" component="div">
        Home
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
    </CardContent>
  </React.Fragment>
);

//helo

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}