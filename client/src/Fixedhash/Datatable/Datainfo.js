import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./Datatable.css";
import { Link } from "react-router-dom";
import { getuser } from "../../JS/Actions/listuser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Datatable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser());
  }, []);
  const users = useSelector((state) => state.userlistReducer.userList);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {users
        ? users.map((el) => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={el.photo} />
              </ListItemAvatar>
              <ListItemText
                primary={el.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {el.lastname}
                    </Typography>
                    {el.email}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))
        : null}
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default Datatable;