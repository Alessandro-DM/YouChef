import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Fade, Menu, MenuItem } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

const DropDownMenu = ({ handleClick, isLoggedIn, isAdmin, classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const user = useSelector((state) => state.auth);

  const clickHandler = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={clickHandler}>
        <MenuIcon />
      </IconButton>
      <Menu id="fade-menu" MenuListProps={{ "aria-labelledby": "fade-button" }} anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
      <div>
          <MenuItem>
            <Link to="/home" onClick={handleClose}>
              Home
            </Link>
          </MenuItem>
        </div>
        <div>
          <MenuItem>
            <Link to="/chefs" onClick={handleClose}>
              Chefs
            </Link>
          </MenuItem>
        </div>
        {isAdmin ? (
          <div>
            <MenuItem>
              <Link to="/admin" onClick={handleClose}>
                Admin Tools
              </Link>
            </MenuItem>
          </div>
        ) : null}
        {isLoggedIn ? (
          <div>
            <MenuItem>
              <Link to={`/user-info`} onClick={handleClose}>
                My Account
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                onClick={() => {
                  handleClick();
                  handleClose();
                }}
                to="/chefs"
              >
                Log Out
              </Link>
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem>
              <Link to="/login" onClick={handleClose}>
                Log In
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup" onClick={handleClose}>
                Sign Up
              </Link>
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default DropDownMenu;