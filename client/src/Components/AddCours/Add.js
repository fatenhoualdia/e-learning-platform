import React, { useState, useEffect } from "react";
import "./Add.css";
import { useDispatch } from "react-redux";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { addcours } from "../../JS/Actions/Cours";
function Add() {
  const dispatch = useDispatch();
  const [namecours, setnamecours] = useState("");
  const [file, setfile] = useState("");
  const [modules, setmodules] = useState([
    {
      name: "",
      file: "",
    },
  ]);
  const [NewCours, setNewCours] = useState({
    nameCours: "",
    domaine: "",
    photo: "",
    cycle: "",
    enseignant: "",
    isFree: "",
    certifier: "",
    price: "",
    description: "",
    modules: modules,
    reviews: [],
    nbrPartic: "",
  });
  const [Payed, setPayed] = useState(false);

  const [image, setImage] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "dno1kmnjv");
    data.append("cloud_name", "dno1kmnjv");
    fetch("https://api.cloudinary.com/v1_1/dno1kmnjv/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNewCours({ ...NewCours, photo: data.url });
        console.log(data.url);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    uploadImage();
  }, [image]);
  return (
    <div className="formulaireadd">
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Add Courses</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form>
                <div className="left"></div>
                <div className="formInput">
                  <label htmlFor="file">
                    Image:{" "}
                    {NewCours.photo && NewCours.photo.length > 1 ? (
                      <img
                        src={NewCours.photo}
                        width="200"
                        height={"200"}
                        style={{ marginBottom: "5px" }}
                      />
                    ) : (
                      <DriveFolderUploadIcon className="icon" />
                    )}
                  </label>
                  <input
                    className="inputname"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="nom du cours"
                    placeholder="nom"
                    required
                    onChange={(e) =>
                      setNewCours({ ...NewCours, nameCours: e.target.value })
                    }
                  />
                </div>
                <div class="input_field select_option">
                  <select
                    onChange={(e) =>
                      setNewCours({ ...NewCours, domaine: e.target.value })
                    }
                  >
                    <option>Domaine</option>
                    <option value={"Informatique"}>Informatique</option>
                    <option value={"Math"}>Math</option>
                    <option value={"Sience"}>Sience</option>
                    <option value={"Commerce"}>Commerce</option>
                  </select>
                  <div class="select_arrow"></div>
                </div>

                {modules.map((el, key) => (
                  <div className="input_field">
                    <input
                      type="text"
                      name={key}
                      placeholder={`name cours`}
                      onChange={(e) => setnamecours(e.target.value)}
                    />
                    <input
                      type="text"
                      name={key}
                      placeholder="file cours"
                      onChange={(e) => setfile(e.target.value)}
                    />
                  </div>
                ))}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setmodules([...modules, { name: namecours, file: file }]);
                  }}
                >
                  add new module
                </button>
                <div class="input_field">
                  <input
                    type="text"
                    name="enseignant"
                    placeholder="enseignant"
                    onChange={(e) =>
                      setNewCours({ ...NewCours, enseignant: e.target.value })
                    }
                  />
                </div>
                <div class="input_field">
                  <input
                    type="text"
                    name="cycle"
                    placeholder="cycle"
                    onChange={(e) =>
                      setNewCours({ ...NewCours, cycle: e.target.value })
                    }
                  />
                </div>
                <div class="input_field radio_option">
                  <input
                    type="radio"
                    name="radiogroup1"
                    id="rd1"
                    value={"Free"}
                    onChange={(e) =>
                      setNewCours({ ...NewCours, isFree: e.target.value })
                    }
                  />
                  <label for="rd1">Free</label>
                  <input
                    type="radio"
                    name="radiogroup1"
                    id="rd2"
                    value={"Payed"}
                    onChange={(e) =>
                      setNewCours({ ...NewCours, isFree: e.target.value })
                    }
                    onClick={(e) => setPayed(!Payed)}
                  />
                  <label for="rd2">Payed</label>
                </div>
                {Payed ? (
                  <div class="input_field">
                    <input
                      type="text"
                      name="Price"
                      placeholder="price"
                      onChange={(e) =>
                        setNewCours({ ...NewCours, price: e.target.value })
                      }
                    />
                  </div>
                ) : null}
                <div class="input_field">
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={(e) =>
                      setNewCours({ ...NewCours, description: e.target.value })
                    }
                  />
                </div>
                <div class="input_field">
                  <input
                    type="number"
                    name="number of participants"
                    placeholder="number of participants"
                    onChange={(e) =>
                      setNewCours({ ...NewCours, nbrPartic: e.target.value })
                    }
                  />
                </div>
                <input
                  class="button"
                  type="submit"
                  value="Add"
                  onClick={() =>
                    dispatch(addcours({ ...NewCours, modules: modules }))
                  }
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
