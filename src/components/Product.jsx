import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Product() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <Typography
              className={ClassNames.action}
              variant="h5"
              color="textSecondary"
            >
              &nbsp;
              {accounting.formatMoney(1699, "$")}
            </Typography>
          }
          title="Control Xbox Series X/S - Pulse Red"
          subheader="En stock"
        />
        <CardMedia
          component="img"
          height="238"
          image="https://http2.mlstatic.com/D_NQ_NP_911301-MCO45279424398_032021-F.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Cotrol de juegos
            {/*  */}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to cart">
            <AddShoppingCart fontSize="large" />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Descripción:</Typography>
            <Typography paragraph>
              Perfecciona tu juego. Experimente el diseño modernizado del
              control inalámbrico Xbox Pulse Red, que con su superficie
              texturizada y geometría refinada brinda más comodidad y control
              sin esfuerzo durante los juegos y tiene una duración de la batería
              de hasta 40 horas.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
}
