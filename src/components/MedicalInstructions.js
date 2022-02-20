import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const MedicalInstructions = () => {
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
          <TextField
            fullWidth
            multiline
            rows={10}
            InputProps={{
                readOnly: true,
              }}
            defaultValue="Tις επόμενες ημέρες και εφ' όσον έχει σταθεροποιηθεί ο ασθενής, αντιμετωπίζονται τυχόν επιπλοκές (πχ επιληπτικές κρίσεις, πνευμονία κλπ) και ξεκινάει η κινητοποίηση του ασθενούς με φυσικοθεραπευτή καθώς και η εκμάθηση της κατάποσης ή και της εκφοράς του λόγου αν υπάρχει αντίστοιχη διαταραχή"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MedicalInstructions;
