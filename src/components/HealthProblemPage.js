import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PaymentForm from "./SelectSymptoms";
import Review from "./MedicalExaminationInstructions";
import DescribeHealthProblem from "./DescribeHealthProblem";
import MedicalExaminationResults from "./MedicalExaminationResults";
import MedicalInstructions from "./MedicalInstructions";
import { Rating } from "@mui/material";

const steps = [
  "Περιγραφή Προβλήματος",
  "Συμπτώματα",
  "Οδηγίες Εξετάσεων",
  "Αποτελέσματα Εξετάσεων",
  "Οδηγίες Θεραπείας",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DescribeHealthProblem />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    case 3:
      return <MedicalExaminationResults />;
    case 4:
      return <MedicalInstructions />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [rating, setRating] = React.useState(2);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Πρόβλημα Υγείας
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom sx={{ mt: 5, mb: 5 }}>
                  Σε ευχαριστούμε
                </Typography>
                <Typography variant="subtitle1">
                  Αξιολόγησε την Θεραπεία σου σε αυτό το link.
                </Typography>
                <Box>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    sx={{ mt: 3, mb: 3 }}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                </Box>
                <Button variant="contained" sx={{ mt: 5}}>ΛΕΠΤΟΜΕΡΗΣ ΑΞΙΟΛΟΓΗΣΗ</Button>
                <Typography variant="subtitle1" sx={{ mt: 1, mb: 18 }}>
                  Εδώ μπορείτε να μας πείτε πιο συγκεκριμένα την γνώμη σας για
                  όλα τα στάδια της θεραπείας σας.
                </Typography>

                <Button href="/" variant="contained">ΑΡΧΙΚΗ ΣΕΛΙΔΑ</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "ΤΕΛΟΣ" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
