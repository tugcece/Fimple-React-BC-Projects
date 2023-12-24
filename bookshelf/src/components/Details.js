import React from "react";
import Modal from "react-modal";

const Details = ({ isOpen, book, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Detail Modal"
      className="modal"
      overlayClassName="overlay"
    >
      {book && (
        <div className="modal-content">
          <div className="modal-left">
            <img src={book.coverImageUrl} alt={book.title} />
          </div>
          <div className="modal-right">
            <h2>{book.title}</h2>
            <p>Sayfa Sayısı: {book.pageCount}</p>
            <p>Yayın Tarihi: {book.publishedDate}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Details;
