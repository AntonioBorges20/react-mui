import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#dfdfe1",
    },
    secondary: {
      main: "#f5f6fb",
    },
    text: {
        primary: "#000000",
        secondary: '#ffffff'
    }
  },
});

function Test() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mt: 10,
          py: 3,
          bgcolor: "primary.main",
          color: "black",
        }}
      >
        <Container maxWidth="lg" sx={{ background: "red", width: "50px"}}>
          <h1>Si</h1>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default  Test;
