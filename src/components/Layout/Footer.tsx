import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../assets/logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const pages = ["Inicio", "Herramientas", "Cursos", "Blogs"];

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

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          mt: 10,
          py: 3,
          bgcolor: "primary.main",
          color: "black",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: "5px"}}>
              <img src={logo} alt="logo" style={{ width: "50px"}} />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={{ xs: 2, md: 0 }}
            >
              {pages.map((page) => (
                <Typography
                  key={page}
                  variant="body1"
                  sx={{ mx: 1, textTransform: "none" }}
                >
                  {page}
                </Typography>
              ))}
            </Box>
          </Box>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Tu Empresa. Todos los derechos
            reservados.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
