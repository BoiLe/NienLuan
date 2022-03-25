import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import useStyles from "./Styles";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { Button } from "@mui/material";

export default function Product({ product }) {
  const classes = useStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <Card className={classes.card} maxwidth="200" >
      <CardMedia component="img" image={product.img} alt="Paella dish" />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={product.name}
          body={"Giá: "+ product.price}
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  >
          <AddShoppingCartIcon />
          <Typography component="span" color="textSecondary">
            Mua
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
