import * as React from "react";
import "./Message.css";
import { Link } from "react-router-dom";
import { getuser } from "../../JS/Actions/listuser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navig from "../Navigation/Navig";
import Sidebar from "../Sidebar/Sidebar";
import { deletemessage, getmessage } from "../../JS/Actions/message";

function Message() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmessage());
  }, []);
  const message = useSelector((state) => state.messageReducer.messageList);
  return (
    <div>
      <div className="list">
        <Sidebar />
        <div className="listContaineruser">
          <Navig />
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Name </TableCell>
                  <TableCell className="tableCell">Email</TableCell>
                  <TableCell className="tableCell">Message</TableCell>
                  <TableCell className="tableCell">Action</TableCell>
                  {/* <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {message
                  ? message.map((el) => (
                      <TableRow>
                        <TableCell className="tableCell">
                          <div className="cellWrapper">{el.name}</div>
                        </TableCell>
                        <TableCell className="tableCell">{el.email}</TableCell>
                        <TableCell className="tableCell">
                          {el.message}
                        </TableCell>
                        <TableCell className="tableCell">
                          <div className="buttonactionuser">
                            <button
                              className="btnact danger"
                              onClick={() =>
                                dispatch(deletemessage({ id: el._id }))
                              }
                            >
                              <ion-icon name="trash-outline"></ion-icon> Delete
                            </button>
                          </div>
                        </TableCell>
                        {/* <TableCell className="tableCell"></TableCell> */}
                        <TableCell className="tableCell">
                          {/* <span className={`status ${row.status}`}>
                        {row.status}
                      </span> */}
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Message;

