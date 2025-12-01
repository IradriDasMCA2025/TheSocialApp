import { Routes, Route, createBrowserRouter } from "react-router-dom";
import './App.css'

import LandingPage from "./Landing/LandingPage.jsx";
import Dashboard from "./admin/Dashboard/Dashboard.jsx";
import BlogEditorPage from "./admin/blog/NewBlog.jsx";
import ProfilePage from "./admin/Profile/ProfilePage.jsx";
import SupportUsPage from "./admin/SupportUs/SupportUsPage.jsx";
import VideoChatInterface from "./videoChat/VideoChat.jsx";
import TextChatInterface from "./TextChat/TextChatInterface.jsx";


function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/admin/dashboard' element={<Dashboard />}></Route>
          <Route path='/admin/blog/new' element={<BlogEditorPage />}></Route>
          <Route path='/admin/profile' element={<ProfilePage />}></Route>
          <Route path='/video-chat' element={<VideoChatInterface />}></Route>
          <Route path='/chat' element={<TextChatInterface />}></Route>

          <Route path='/support' element={<SupportUsPage />}></Route>
          <Route path='/*' element={<h1>Under Progress </h1>}></Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
