import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

export default function MedicalExaminationInstructions() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Οδηγίες Εξετάσεων
      </Typography>
      <List disablePadding>
        <ListItem key="1" sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Δομή Υγείας" />
          <Typography variant="body2">
            Νοσοκομείο Παπαγεωργίου – Θεσσαλονίκης
          </Typography>
        </ListItem>
        <ListItem key="2" sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Ημ/νία & Ώρα" />
          <Typography variant="body2">23/02/2022 & 13:00</Typography>
        </ListItem>
        <ListItem key="3" sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Τύπος ραντεβού" />
          <Typography variant="body2">Αιματολογικές εξετάσεις</Typography>
        </ListItem>
        <ListItem key="4" sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Ονοματεπώνυμο Ιατρού:" />
          <Typography variant="body2">Ονοματεπώνυμο Ιατρού</Typography>
        </ListItem>
        <ListItem key="5" sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Τύπος ραντεβού" />
          <Typography variant="body2">Αιματολογικές εξετάσεις</Typography>
        </ListItem>
      </List>

      <Grid container spacing={5} sx={{ mt: 3, mb: 3 }} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[
              "Γενική αίματος",
              "Τ.Κ.Ε.",
              "Χολερυθρίνη ολική και άμεση",
              "LDH",
              "Χοληστερίνη, HDL, LDL",
            ].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[
              "Τριγλυκερίδια και ολικά λιπίδια",
              "Σάκχαρο αίματος",
              "Κάλιο και Νάτριο",
              "Oυρία και Κρεατινίνη",
              "Oυρικό οξύ",
            ].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

    </React.Fragment>
  );
}
