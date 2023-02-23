import React, { useEffect, useState } from "react";
import "./StudentMessages.css";
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
const isAuth = localStorage.getItem("token");

function StudentMessages() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      innerWidth: "550px",
      outerWidth: "550px",
    },
  };
  const [message, setMessage] = useState({
    from: "",
    name: "",
    to: "admin",
    message: "",
  });
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
      dispatch(getmessage());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  const messages = useSelector((state) => state.messageReducer.messageList);

  const navigate = useNavigate();
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    axios.post("http://localhost:5000/message/add", message).then(() => {
      toast.success("mesage sent succefully!").then(() => {
        setTimeout(() => {
          setIsOpen(false);
          setMessage({ from: "", name: "", to: "admin", message: "" });
        }, 1500);
      });
    });
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="continue">
        <div className="bloclong">
          <div className="leftbloc">
            <div class="photo-left">
              <img
                src={
                  users
                    ? users.photo
                    : "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=20&m=846183008&s=170667a&w=0&h=WIxZSP7aJ9jSvW3xqzDsWSI5g666kVBBgCNkABzYs68="
                }
                className="imageprofile"
              />
            </div>
            <h4 class="name"> {users ? users.name : ""}</h4>
            <p class="info">{users ? users.email : ""}</p>

            <button
              className="logout_btn"
              type="button"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("isAdmin");
                navigate("/");
              }}
            >
              LOG OUT
            </button>
          </div>
          <div className="rightbloc">
            <div className="navprofile">
              <ul>
                <Link to="/profile/aboutme">
                  {" "}
                  <li>About me</li>
                </Link>
                <Link to="/profile/cours">
                  {" "}
                  <li>Courses</li>
                </Link>
                <Link to="/profile/edit">
                  {" "}
                  <li>Edit Profil</li>
                </Link>
                <Link to="/my_messages">
                  {" "}
                  <li>My Messages</li>
                </Link>
                <Link to="/">
                  {" "}
                  <li>Home Page</li>
                </Link>
              </ul>
            </div>
            <div className="blocinfo">
              <h1>Student messages</h1>
              <h2>{messages ? messages.length : 0}</h2>
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
                        <button
                          className="upload_btn"
                          onClick={handleSendMessage}
                        >
                          send !
                        </button>
                      </form>
                    </Modal>
                    {messages
                      ? messages
                          .filter((el) => el.to == users.email)
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
                                  <button
                                    className="btnact success"
                                    onClick={() => {
                                      setIsOpen(true);
                                      setMessage({
                                        ...message,
                                        name: users.name,
                                        from: users.email,
                                        to: "admin",
                                      });
                                    }}
                                  >
                                    <ion-icon name="send-outline"></ion-icon>{" "}
                                    Replay
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
  );
}

export default StudentMessages;

//StudentMessages

