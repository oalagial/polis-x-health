import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { ListItemIcon } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

const MedicalExaminationResults = () => {
  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Αποτελέσματα εξετάσεων
      </Typography>
      <Grid container spacing={5} sx={{ mt: 3, mb: 3 }} justifyContent="center">
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Γενική αίματος" secondary="Αποτελέσματα" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Τ.Κ.Ε." secondary="Αποτελέσματα" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="Χολερυθρίνη ολική και άμεση"
                secondary="Αποτελέσματα"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="LDH" secondary="Αποτελέσματα" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="Χοληστερίνη, HDL, LDL"
                secondary="Αποτελέσματα"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="Τριγλυκερίδια και ολικά λιπίδια"
                secondary="Αποτελέσματα"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="Σάκχαρο αίματος"
                secondary="Αποτελέσματα"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="Κάλιο και Νάτριο"
                secondary="Αποτελέσματα"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="Oυρία και Κρεατινίνη"
                secondary="Αποτελέσματα"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Oυρικό οξύ" secondary="Αποτελέσματα" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default MedicalExaminationResults;
