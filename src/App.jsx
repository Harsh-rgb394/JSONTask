import { useState } from 'react'
import Stepper from './components/Stepper'
// import './App.css'
import { Container, CssBaseline, ThemeProvider, createTheme, Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});
function App() {

  return (
    <>
      {/* <div className="App">
        <h1>Loan Application Form</h1>
        <Stepper />
      </div> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom sx={{ marginTop: 4 }}>
            Loan Application Form
          </Typography>
          <Stepper />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
