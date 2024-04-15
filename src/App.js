import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
import SingleMovie from "./Pages/SingleMovie";
import Trending from "./Pages/Trending";
import TV from "./Pages/TV";

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Trending />} exact />
            // Home page is denoted with '/' symbol
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/search" element={<Search />} />
            // Custom Search Page
            <Route path="*" element={<Error />} /> // Error Page
        </Routes>
        <Footer />
        </BrowserRouter>
        </>
    );
};

export default App;