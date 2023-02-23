import * as React from "react";
import "./Datatable.css";
import { Link } from "react-router-dom";
import { deleteuser, getuser } from "../../JS/Actions/listuser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Datatable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser());
  }, []);
  const users = useSelector((state) => state.userlistReducer.userList);
  return (
    <div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Name of User</TableCell>
              <TableCell className="tableCell">Last Name</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Action</TableCell>
              {/* <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              ? users.map((el) => (
                  <TableRow key={el.id}>
                    <TableCell className="tableCell">{el._id}</TableCell>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={el.photo} alt="" className="image" />
                        {el.name}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{el.lastname}</TableCell>
                    <TableCell className="tableCell">{el.email}</TableCell>
                    <TableCell className="tableCell">
                      <div className="buttonactionuser">
                        <button
                          className="btnact danger"
                          onClick={() => dispatch(deleteuser({ id: el._id }))}
                        >
                          <ion-icon name="trash-outline"></ion-icon> Delete
                        </button>
                        <button className="btnact success">
                          {" "}
                          <ion-icon name="create-outline"></ion-icon>Edit
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
  );
}

export default Datatable;
