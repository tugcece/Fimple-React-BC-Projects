import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import BookList from "./components/BookList";
import Details from "./components/Details";
import axios from "axios";
import "./App.css"; 

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = response.data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        coverImageUrl: item.volumeInfo.imageLinks,
        publishedDate: item.volumeInfo.publishedDate,
      }));

      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="app-container">
      <div className="background-image"></div>
      <SearchForm onSearch={handleSearch} />
      <div className="book-container">
        <BookList books={searchResults} onBookSelect={openModal} />
      </div>
      <Details
        isOpen={modalIsOpen}
        book={selectedBook}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default App;
