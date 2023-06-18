import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomID, setRoomID] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomID(id);
    toast.success("New Room created successful!!");
  };
  const joinRoom = ()=>{
    if(!roomID || !username){
      toast.error("Please Enter the Required Fields!!")
      return
    }
    navigate(`/editor/${roomID}`,{
      state:{
        username
      }
    })
  }
  const handleInputEnter = (e)=>{
    if(e.code === "Enter"){
      joinRoom();
    }
  }
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          src="/code-sync.png"
          className="homePageLogo"
          alt="code-sync-logo"
        />
        <h4 className="mainLabel">Paste Room ID Here</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room ID"
            onChange={(e) => setRoomID(e.target.value)}
            value={roomID}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="User Name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            JOIN
          </button>
          <span className="createInfo">
            Create a New Collaborative Space &nbsp;
            <a href="#" onClick={createNewRoom} className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Crafted with 💖 by{" "}
          <a href="https://github.com/VishalKNigam">VishalKNigam</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
