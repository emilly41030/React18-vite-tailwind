import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getResourceList } from "@/api/list";

function App() {
  const [communityList, setCommunityList] = useState([]);
  const [studyCommunityList, setStudyCommunityList] = useState([]);

  const handleGetResourceList = () => {
    getResourceList().then((res) => {
      const { list, studyList } = res.data;
      setCommunityList(list);
      setStudyCommunityList(studyList);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Vite + React使用Mockjs案例！！！</p>
      </header>
      <button className="btn" type="button" onClick={handleGetResourceList}>
        获取Mock资源列表
      </button>
      {communityList.length ? <h2 className="list-title">资源列表</h2> : ""}
      <div className="list-wrap">
        {communityList.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="item-logo">
                <img
                  className="logo"
                  src={item.logo}
                  width="100%"
                  alt={item.title}
                />
              </div>
              <div className="item-content">
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>
            </div>
          );
        })}
        {studyCommunityList.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="item-logo">
                <img
                  src={item.logo}
                  className="logo"
                  width="100%"
                  alt={item.title}
                />
              </div>
              <div className="item-content">
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
