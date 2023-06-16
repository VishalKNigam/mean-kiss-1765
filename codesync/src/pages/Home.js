import React from "react";

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/code-sync.png" alt="code-sync-logo" />
        <h4>Paste Invitation Room-ID</h4>
        <div>
          <input type="text" className="inputBox" placeholder="Room ID" />
          <input type="text" className="inputBox" placeholder="User Name" />
          <button className="btn joinBtn">JOIN</button>
          <span className="createInfo">
            If you don't have an invite then Create &nbsp;
            <a href="#" className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with ❤ by <a href="https://github.com/VishalKNigam">VishalKNigam</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
