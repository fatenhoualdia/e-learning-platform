import React, { useEffect, useState } from "react";
import "./AdminMessages.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../JS/Actions/User";
import { getmessage, deletemessage } from "../../JS/Actions/message";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "react-modal";
import axios from "axios";
import Navig from "../../Fixedhash/Navigation/Navig";
import Sidebar from "../../Fixedhash/Sidebar/Sidebar";
const isAuth = localStorage.getItem("token");

function AdminMessages() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(current());
      dispatch(getmessage());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  const messages = useSelector((state) => state.messageReducer.messageList);

  const navigate = useNavigate();

  return (
    <div>
       <div className="list">
        <Sidebar />
        <div className="listContaineruser">
          <Navig />
        <div className="bloclong">
          <div className="rightbloc">
            <div className="blocinfo">
              <h1>Admin messages</h1>
              <h2>
                {messages
                  ? messages.filter((el) => el.from != "admin").length
                  : 0}
              </h2>
              <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableCell">Message ID</TableCell>
                      <TableCell className="tableCell">Message Text</TableCell>
                      <TableCell className="tableCell"> From</TableCell>

                      <TableCell className="tableCell">Action</TableCell>
                      {/* <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {messages
                      ? messages
                          .filter((el) => el.to == "admin")
                          .map((el) => (
                            <TableRow key={el.id}>
                              <TableCell className="tableCell">
                                {el._id.slice(0, 5)}
                              </TableCell>
                              <TableCell className="tableCell">
                                {el.message}
                              </TableCell>
                              <TableCell className="tableCell">
                                {el.from}
                              </TableCell>
                              <TableCell className="tableCell">
                                <div className="buttonactionuser">
                                  <button
                                    className="btnact danger"
                                    onClick={() =>
                                      dispatch(deletemessage({ id: el._id }))
                                    }
                                  >
                                    <ion-icon name="trash-outline"></ion-icon>{" "}
                                    Delete
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
      </div>
      <ToastContainer />
    </div>
    </div>
  );
}

export default AdminMessages;

//AdminMessages
