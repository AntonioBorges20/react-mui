  import { Box, Container, Typography } from "@mui/material";
  import Grid from "@mui/material/Grid";
  import Card from "@mui/material/Card";
  import Avatar from "@mui/material/Avatar";

  import HeroImg from "../../assets/jairbadillo.jpg";
  import InsightsIcon from "@mui/icons-material/Insights";
  import { CardContent } from "@mui/material";
  import ChartIcon from "../../icons/ChartIcon";

  function Hero() {
    return (
      <Container>
        <Grid container spacing={4} alignItems="center" mt="5rem">
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "2.5rem", lg: "2.5rem" },
                mb: 2,
              }}
            >
              Empoderando tu Futuro Financiero
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.3rem", md: "1.3rem", lg: "1.3rem" },
                mb: 4,
              }}
            >
              Descubre herramientas, consejos y recursos para tomar el control de
              tus finanzas personales y alcanzar tus metas.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>

            <Box position="absolute">
              <Card
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  width: '180px',
                  height: '105px',
                  marginTop: '40%',
                  marginLeft: '-20%',
                  padding: '10px', 
                  borderRadius: '16px', 
                }}
              >
                <CardContent sx={{ display: "flex", flexDirection: "row", padding: '0px' }}>
                  <Avatar sx={{ m: 0, bgcolor: "#191046", marginRight:'15px'}}>
                    <InsightsIcon />
                  </Avatar>
                  <CardContent sx={{ display: "flex", flexDirection: "column", padding: '0px!important' }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 500, fontSize: "20px", padding: '0px' }}
                    >
                      Analisis
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Reporte de gastos
                    </Typography>
                  </CardContent>
                </CardContent>
                <CardContent sx={{ padding:'0px', display:'flex', justifyContent:'center', paddingBottom:'0px!important' }}>
                  <ChartIcon />
                </CardContent>
              </Card>
            </Box>

            <Box position="absolute">
              <Card
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  width: '180px',
                  height: '50px',
                  marginTop: '10%',
                  marginLeft: '220%',
                  padding: '10px', 
                  borderRadius: '16px', 
                }}
              >
                <CardContent sx={{ display: "flex", flexDirection: "row", padding: '0px' }}>
                  <Avatar sx={{ m: 0, bgcolor: "#191046", marginRight:'15px'}}>
                    <InsightsIcon />
                  </Avatar>
                  <CardContent sx={{ display: "flex", flexDirection: "column", padding: '0px!important' }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 500, fontSize: "16px", padding: '0px' }}
                    >
                      Objetivos
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize:"13px"}}>
                    Ahorrar un 20% más
                    </Typography>
                  </CardContent>
                </CardContent>
              </Card>
            </Box>

            <img
              src={HeroImg}
              alt="Hero"
              style={{
                width: "100%",
                height: "100px",
                maxWidth: "500px",
                display: "block",
                margin: "0 auto",
                borderRadius: "16px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }

  export default Hero;
