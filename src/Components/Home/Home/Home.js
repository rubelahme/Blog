import React from "react";
import Header from "../Header/Header";

import BookList from "../BookList/BookList";
import FooterList from "../FooterList/FooterList";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <BookList></BookList>
      <FooterList></FooterList>
    </div>
  );
};

export default Home;
