import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const SectionsCard = ({ title, img, content }) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", border:'1px solid #000' }} variant="outlined">
      <Grid container justifyContent="space-between">
        <Grid size={{xs: 12, md: 6}} sx={{ textAlign: "left" }}>
          <item>
            <CardContent>
              <Typography component="div" variant="h5" pb={1}>
                {title}
              </Typography>
              <Typography component="div" variant="body1">
                {content}
              </Typography>
            </CardContent>
          </item>
        </Grid>
        <Grid size={{xs: 12, md: 6}} sx={{ textAlign: "left" }}>
          <item>
            <CardMedia
              component="img"
              sx={{ width: '100%' }}
              image={img}
              alt="headshot image"
            />
          </item>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SectionsCard;
