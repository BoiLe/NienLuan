import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import StarBorder from "@mui/icons-material/StarBorder";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import useStyles from "./Styles";
import theme from "../../Theme";
import { Search, SearchIconWrapper, StyledInputBase } from "../Search";

export default function Header(props) {
  const [open, setOpen] = React.useState(true);
  const [searchItem, setsearchItem] = React.useState("");
  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (e) => {
    setsearchItem(e.target.value)
    props.searchIte(searchItem);
    
  };
  console.log(searchItem);

  const classes = useStyles(theme);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.box}>
          <Typography
            className={classes.name}
            variant="h4"
            component={Link}
            to="/"
            color="inherit"
            mr={3}
          >
            Medician Shopback
          </Typography>
          <List
            aria-label="open drawer"
            size="large"
            color="primary"
            justifyContent="center"
          >
            <Box
              className={classes.boxicon}
              alignItems="center"
              onClick={handleClick}
            >
              <IconButton
                size="large"
                edge="start"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Collapse
              className={classes.Collapse}
              in={!open}
              easing="1"
              unmountOnExit
              collapsedSize="100px"
            >
              <List component="span" disablePadding className={classes.list}>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder />
                    <ListItemText primary="Starred" />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder />
                    <ListItemText primary="Starred" />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder />
                    <ListItemText primary="Starred" />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <Search className={classes.search}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
          </Search>
            
          <Box sx={{ flexGrow: 1 }} />
          <Box className={classes.boxicon} alignItems="center">
            <IconButton
              component={Link}
              to="/#"
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              justifyContent="center"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton
              component={Link}
              to="/login"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
