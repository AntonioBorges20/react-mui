import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import HeroImg from "../../assets/image_hero.webp";

function Theme() {
  const buttonLabels = [
    "Ahorro e Inversion",
    "Criptomonedas",
    "Estafa y Fraude",
    "Familias",
    "Finanzas",
    "Hipotecas",
  ];
  return (
    <Container sx={{ marginTop:"5rem" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} lg={6}>
          <img
            src={HeroImg}
            alt="Hero"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "500px",
              display: "block",
              margin: "0 auto",
              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "0.5rem", md: "0.8rem", lg: "1rem", color: "#F75C4E", fontWeight: 700 },
              mb: 4,
            }}
          >
            Temas
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
              mb: 2,
            }}
          >
            Infórmate sobre los temas que más te interesan{" "}
          </Typography>
          <Grid container spacing={2}>
            {buttonLabels.map((label, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ textTransform: "none", borderRadius: "16px", bgcolor:"#579dff"}}
                >
                  {label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Theme;
