import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import BookLesson from "./components/BookLesson";
import EditLesson from "./components/EditLesson";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";



function App() {
  return (
    <div>
      <BrowserRouter>
      <MyNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookLesson />} />
          <Route path="/book/:id" element={<BookLesson />} />
          {/* <Route path="/:edit" element={<EditLesson />} /> */}
         </Routes>
        <MyFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
