import React, { useEffect } from "react";
import Sidebar from "../../Fixedhash/Sidebar/Sidebar";
import Navig from "../../Fixedhash/Navigation/Navig";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../JS/Actions/User";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const isAuth = localStorage.getItem("token");

function Acceuil() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  const usersList = useSelector((state) => state.userlistReducer.userList);
  const cours = useSelector((state) => state.coursReducer.coursList);

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navig />
          <div className="chart">
            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCell">users number</TableCell>
                    <TableCell className="tableCell">Courses number</TableCell>
                    <TableCell className="tableCell">Admins</TableCell>
                    <TableCell className="tableCell">Students</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="tableCell">
                      {usersList.length}
                    </TableCell>
                    <TableCell className="tableCell">{cours.length}</TableCell>
                    <TableCell className="tableCell">
                      {usersList.filter((el) => el.isAdmin == true).length}
                    </TableCell>
                    <TableCell className="tableCell">
                      {usersList.filter((el) => el.isAdmin == false).length}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acceuil;


