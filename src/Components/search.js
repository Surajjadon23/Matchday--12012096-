import React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router';
 import { Form, FormControl, Button } from "react-bootstrap";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-none " style={{paddingLeft:"1000px"}}>
      <Form className='d-flex search-nav'>
        <FormControl
          type='search'
          placeholder='Search for matches'
          className='me-2'
          aria-label="Search"
          // value={search}
          // onChange={handleChange}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </nav>
  )
}

// import React, { useState, useEffect } from "react";
// import "./search.css";
// import axios from "axios";

// function App() {
//   const [loading, setLoading] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [searchTitle, setSearchTitle] = useState("");

//   useEffect(() => {
//     const loadPosts = async () => {
//       setLoading(true);
//       const response = await axios.get(
//         "https://matchday.ai/referee/champ/fixture/dummy-matches?page=1"
//       );
//       setPosts(response.data);
//       setLoading(false);
//     };

//     loadPosts();
//   }, []);

//   return (
//     <div className="App">
//       <h3>Search Filter</h3>
//       <input
//         style={{ width: "30%", height: "25px" }}
//         type="text"
//         placeholder="Search..."
//         onChange={(e) => setSearchTitle(e.target.value)}
//       />
//       {loading ? (
//         <h4>Loading ...</h4>
//       ) : (
//         posts
//           .filter((value) => {
//             if (searchTitle === "") {
//               return value;
//             } else if (
//               value.title.toLowerCase().includes(searchTitle.toLowerCase())
//             ) {
//               return value;
//             }
//           })
//           .map((item) => <h5 key={item.id}>{item.title}</h5>)
//       )}
//     </div>
//   );
// }

// export default App;
