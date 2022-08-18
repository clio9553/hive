import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./core_widgets/Footer";
import Home from "./pages/Home";
// ? css files
import "../styles/global.css";
import PostDetails from "./pages/PostDetails";
import NewPost from "./pages/NewPost";
import { Toaster } from 'react-hot-toast'
import { AuthWrapper } from "./pages/AuthWrapper";

const App = () => {

  const [isLoggedin, setisLoggedin] = useState(false)

  const handleSignIn = () => {
    setisLoggedin(true)

  }
  const signOut = () => {
    setisLoggedin(false)
  }

  return <>
    { isLoggedin ? (
      <Router>
        <Routes>
          <Route exact path="/create-post" element={<NewPost />} />
          <Route path="/:id" element={<PostDetails />} />
          <Route exact path="/" element={<Home signOutCallback={signOut} />} />
        </Routes>
        <Footer />
      </Router>
    ) : <Router>
      <Routes>
        <Route exact path="/" element={<AuthWrapper toggleSigneedIn={handleSignIn} />} />
      </Routes>
    </Router>}
    <div><Toaster /></div>
  </>
}

export default App;
