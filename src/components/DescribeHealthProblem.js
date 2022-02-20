import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function DescribeHealthProblem() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Περιγράψτε το πρόβλημα σας
      </Typography>
      <Typography variant="p" gutterBottom>
        Περιγράψτε το πρόβλημά σας με όση περισσότερη λεπτομέρεια μπορείτε
      </Typography>
      <Grid container spacing={5} sx={{ mt: 3, mb: 3 }} justifyContent="center">
        <Grid item xs={12} sm={8}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Κατηγορία</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Ορθοπαιδικό</MenuItem>
              <MenuItem value={20}>Παθολογικό</MenuItem>
              <MenuItem value={30}>Καρδιακό</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Σοβαρότητα</InputLabel>
            <Select>
              <MenuItem value={10}>Χαμηλή</MenuItem>
              <MenuItem value={20}>Μέτρια</MenuItem>
              <MenuItem value={30}>Σοβαρή</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Περιγραφή"
            multiline
            rows={4}
            placeholder="Αναγνώριση-κατηγοριοποίηση με τεχνητή νοημοσύνη"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
