import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";

export default function SelectSymptoms() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Επέλεξε τα συμπτώματα σου
      </Typography>
      <Typography variant="p" gutterBottom>
        Επέλεξε με προσοχή ποια συμπτώματα από τα παρακάτω έχεις
      </Typography>
      <Grid container spacing={8} sx={{ mt: 0, mb: 3 }} justifyContent="center">
        <Grid item xs={8}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Πονάει το κεφάλι μου
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Ναι" />
              <FormControlLabel value="no" control={<Radio />} label="Όχι" />
              <FormControlLabel
                value="Maybe"
                control={<Radio />}
                label="Ίσως"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Ζαλίζομαι
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Ναι" />
              <FormControlLabel value="no" control={<Radio />} label="Όχι" />
              <FormControlLabel
                value="Maybe"
                control={<Radio />}
                label="Ίσως"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Βλέπω θολά
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Ναι" />
              <FormControlLabel value="no" control={<Radio />} label="Όχι" />
              <FormControlLabel
                value="Maybe"
                control={<Radio />}
                label="Ίσως"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Νιώθω κούραση
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Ναι" />
              <FormControlLabel value="no" control={<Radio />} label="Όχι" />
              <FormControlLabel
                value="Maybe"
                control={<Radio />}
                label="Ίσως"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
