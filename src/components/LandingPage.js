import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import ReactPlayer from "react-player";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Outlet />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Οι ανάγκες σας στο επίκεντρο
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Επιλέξτε τι θέλετε να κάνετε και αφήστε την Polis-X να σας καθοδηγήσει
          βήμα-βήμα
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={5}
          alignItems="flex-end"
          sx={{ justifyContent: "space-around" }}
        >
          <Grid item key="Έχω πρόβλημα Υγείας" xs={12} sm={6} md={4}>
            <Card>
              <CardHeader
                title="Έχω πρόβλημα Υγείας"
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Typography variant="subtitle1" align="center">
                  Εάν αντιμετωπίζετε οποιοδήποτε πρόβλημα που αφορά την σωματική
                  σας υγεία και πιθανές παθήσεις σας
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="/health-problem" fullWidth variant="contained">
                  Πατηστε εδω
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item key="Χρειάζομαι υποστήριξη" xs={12} sm={6} md={4}>
            <Card>
              <CardHeader
                title="Χρειάζομαι υποστήριξη"
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Typography variant="subtitle1" align="center">
                  Εάν αντιμετωπίζετε οποιοδήποτε πρόβλημα υγείας που απαιτεί την
                  υποστήριξή σας από τον Δήμο Χ.
                </Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained">
                  Πατηστε εδω
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* ))} */}
        </Grid>
      </Container>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Απλό παράδειγμα χρήσης
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          Δείτε πως μπορείτε να χρησιμοποιήσετε την Polis-X για να λύσετε τα
          προβλήματα που αντιμετωπίζετε και να καλύψετε τις ανάγκες σας με την
          βοήθεια του Δήμου σας.
        </Typography>
        <ReactPlayer
          style={{ marginTop: 50 }}
          url="https://www.youtube.com/watch?v=06VIbquVzok"
        />
      </Container>
    </React.Fragment>
  );
}

export default LandingPage;
