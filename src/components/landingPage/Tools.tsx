import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CardContent, Avatar,} from "@mui/material";
import { Card } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import SavingsIcon from '@mui/icons-material/Savings';
import DescriptionIcon from '@mui/icons-material/Description';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

function Tools() {
  return (
    <Container sx={{ marginTop:"5rem" }}>
      <Typography variant="h2" sx={{ fontWeight: 600, fontSize: "16px", textAlign:"center", color:"#F75C4E"}}>
        Herramientas
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, fontSize: "36px", textAlign:"center" }}>
        Utiliza nuestras herramientas para aprender a manejar tus finanzas.
      </Typography>
      
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        {[
          {
            icon: SavingsIcon,
            title: "Mis Ahorros",
            description: "Conoce cuánto dinero podrás acumular en un determinado plazo.",
            bgColor: "#1f7cff"
          },
          {
            icon: DescriptionIcon,
            title: "Mis objetivos",
            description: "Conoce cuánto dinero deberás ahorrar para conseguir tus objetivos de capital.",
            bgColor: "#f75c4e"
          },
          {
            icon: PaidIcon,
            title: "Mi estado ahorro-inversión",
            description: "Evalúa tu comportamiento respecto al ahorro y la inversión.",
            bgColor: "#8ed8b5"
          },
          {
            icon: MoneyOffIcon,
            title: "Mis Deudas",
            description: "Calcula tu límite de endeudamiento con esta herramienta.",
            bgColor: "#f7954e"
          },
          {
            icon: RequestQuoteIcon,
            title: "Mi presupuesto",
            description: "Crea presupuestos que te permita llevar un control sobre tu dinero.",
            bgColor: "#ff1fb3"
          },
          {
            icon: CurrencyExchangeIcon,
            title: "Mis caprichos",
            description: "Conoce cuánto se puede ahorrar si eliminamos o reducimos gastos.",
            bgColor: "#5c4ef7"
          },
        ].map((tool, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", bgcolor:"#ececec", borderRadius:"15px"}}>
              <Avatar sx={{ m: 2, backgroundColor:tool.bgColor }}>
                <tool.icon />
              </Avatar>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 500, fontSize: "20px" }}>{tool.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {tool.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Tools;
