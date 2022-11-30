import "./App.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import UseRefPlayer from "./hooks/UseRefPlayer";
import { Header } from "./Components/Header";
import Search from "./Components/search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
  const [state, setState] = useState([]);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetch = async () => {
    const response = await axios.get(
      "https://matchday.ai/referee/champ/fixture/dummy-matches?page=1"
      //"https://matchday.ai/referee/champ/fixture/dummy-matches?page=${page}&_limit=10"
    );
    //setData(pre =>[...pre, ...data])
    setData(response.data);
    setState(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  // useEffect(() =>{
  //   const handleScroll = (e) => {
  //     const scrollHeight = e.target.documentElement.scrollHeight
  //     const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
  //     if(currentHeight+1 >= scrollHeight){
  //       setOffset(offset + 10)
  //     }
  //   }
  //   window.addEventListener("scroll",handleScroll)
  //   return ()=>window.removeEventListener("scroll", handleScroll)
  // },[offset])

  const First = () => {
    return (
      <>
        <h1 style={{color:"#020C52"}}>International Matches</h1>
        <Search></Search>
        {/* <div style={{ width: "100%", display: "flex" }}>
        <input onChange={handleChange} placeholder="Search Here" style={{ marginLeft: "auto", marginRight: "50px" ,padding:"5px"}}></input>
      </div> */}


        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            margin: "50px 50px",
            gap: "40px",
          }}
          >
          {state.fixtures?.map((ele) => (
            <div
            onClick={()=>{
              window.location.href = "/video"
            }}
            style={{
              backgroundColor: "#020C52",
              padding: "5px",
              paddingLeft: "40px",
              paddingRight: "40px",
              borderRadius: "10px",
                paddingBottom: "30px",
              }}
            >
              <h2 style={{ color: "white" }}>{ele?.tournament[0].name}</h2>
              <h3 style={{ color: "white" }}>{ele?.round}</h3>
              <p style={{color:"white"}}>v/s</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "left",
                  }}
                >
                  
                  <div style={{ position: "relative" }}>
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "100%",
                        objectFit: "cover",
                      }}
                      alt=""
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                      }
                    ></img>
                    {ele.winner === ele.team1[0].name && (
                      <img
                        alt=""
                        style={{
                          height: "30px",
                          position: "absolute",
                          top: "-28px",
                          left: "7px",
                        }}
                        // crown
                        src={
                          "/crown.png"
                        }
                      ></img>
                    )}
                  </div>
                  <h5
                    style={{
                      color: "white",
                      position: "absolute",
                      bottom: "-50px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {ele.team1[0].name}
                  </h5>
                </div>

                <div
                  style={{
                    borderRadius: "8px",
                    padding: "0px 18px",
                    backgroundColor: "#016151",
                  }}
                >
                  <p style={{ color: "white" }}>
                    {ele.a1}-{ele.a2} , {ele.b1}-{ele.b2}
                  </p>
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "100%",
                        objectFit: "cover",
                      }}
                      alt=""
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                      }
                    ></img>
                    {ele.winner === ele.team2[0].name && (
                      <img
                        alt=""
                        style={{
                          height: "50px",
                          position: "absolute",
                          top: "-42px",
                          left: "20px",
                        }}
                        src={
                          "/crown"
                        }
                      ></img>
                    )}
                  </div>
                  <h5
                    style={{
                      color: "white",
                      position: "absolute",
                      bottom: "-50px",
                      whiteSpace: "nowrap",
                      right: "0px",
                    }}
                  >
                    {ele.team2[0].name}
                  </h5>
                </div>
              </div>
              <img
                style={{ height: "80px", position: "relative", top: "20px" }}
                src={
                  "https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fda00ca61-beb4-4735-8ff8-f6cff8597fc3%2Flogo_white.png?table=block&id=8e435d38-571b-4023-a052-a8516ebb7be7&spaceId=0c204483-284c-45aa-a8f3-e48b05979d20&userId=9753495c-0031-457c-af00-98eecfb93aa7&cache=v2"
                }
                alt=""
              ></img>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<First></First>}></Route>
          <Route
            path={"/video"}
            element={
              <>
                <Header></Header>
                <UseRefPlayer></UseRefPlayer>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
