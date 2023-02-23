import * as React from "react";
import "./Mail.css";
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
import Sidebar from "../Sidebar/Sidebar";
import Navig from "../Navigation/Navig";
import Modal from "react-modal";
import axios from "axios";
let subtitle;
function Mail() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getuser());
  }, []);
  const users = useSelector((state) => state.userlistReducer.userList);
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [message, setMessage] = useState({
    from: "admin",
    name: "",
    to: "",
    message: "",
  });

  const handleSendMessage = () => {
    axios.post("http://localhost:5000/message/add", message);
  };
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
                  <TableCell className="tableCell">Username</TableCell>
                  <TableCell className="tableCell">Email</TableCell>
                  <TableCell className="tableCell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <button
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={closeModal}
                  >
                    x
                  </button>
                  <form>
                    <input
                      placeholder="write your mesage"
                      value={message.message}
                      onChange={(e) =>
                        setMessage({ ...message, message: e.target.value })
                      }
                    />
                    <button className="upload_btn" onClick={handleSendMessage}>
                      send !
                    </button>
                  </form>
                </Modal>

                {users
                  ? users
                      .filter((el) => el.isAdmin == false)
                      .map((el) => (
                        <TableRow>
                          <TableCell className="tableCell">{el.name}</TableCell>
                          <TableCell className="tableCell">
                            {el.email}
                          </TableCell>
                          <TableCell className="tableCell">
                            <div className="buttonactionuser">
                              <button
                                className="btnact success"
                                onClick={() => {
                                  setIsOpen(true);
                                  setMessage({
                                    ...message,
                                    name: el.name,
                                    to: el.email,
                                  });
                                }}
                              >
                                {" "}
                                send a message
                              </button>
                            </div>
                          </TableCell>
                          <TableCell className="tableCell"></TableCell>
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

export default Mail;

