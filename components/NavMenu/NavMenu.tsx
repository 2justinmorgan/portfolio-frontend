import React from "react";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./NavMenu.module.css";

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

type NavMenuPropsT = PropTypes.InferProps<typeof propTypes>;

const NavMenu: React.FunctionComponent<NavMenuPropsT> = (props) => {
  const { isOpen, toggleOpen } = props;
  const views = ["About", "Fullstack", "Graphs", "Search", "Database", "Links"];

  return (
    <Drawer open={isOpen} onClose={() => toggleOpen(false)}>
      <div data-testid="navmenu-testid">
        <h3 className={styles.title}>
          Site Navigation
          <span className={styles.closebtn} data-testid="closechevron-testid">
            <IconButton onClick={() => toggleOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </span>
        </h3>
        <Divider />
        <Box sx={{ width: "210px" }} role="presentation">
          <List>
            {views.map((text, index) => (
              <Link href={"/" + text.toLowerCase()} key={index}>
                <ListItem
                  button
                  key={text}
                  onClick={() => setTimeout(() => toggleOpen(false), 200)}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </div>
    </Drawer>
  );
};

NavMenu.propTypes = propTypes;

export default NavMenu;
