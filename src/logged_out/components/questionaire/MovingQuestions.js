import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { MenuItem } from '@material-ui/core';

export default function MovingQuestionsForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom >
        Moving Questions
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField 
          required
          select
          id="rentingOrBuying" 
          label="Renting Or Buying?" 
          fullWidth  
          >
              <MenuItem value="Renting">Renting</MenuItem>
              <MenuItem value="Buying">Buying</MenuItem>
           </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="movingCompany"
            select
            label="Have a Moving company?"
            fullWidth
          >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
        </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="pplInHouse" label="# of people in Household?" fullWidth  />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            select
            id="apartmentOrHome"
            label="Apartment or Home?"
            fullWidth
          >
              <MenuItem value="Home">Home</MenuItem>
              <MenuItem value="Apartment">Apartment</MenuItem>
          </TextField>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}