// apiService.js
import axios from 'axios';

const baseURL = 'https://lms.upseba.com.bd/';

const apiService = axios.create({
  baseURL,
});

export const addAuthor = (authorData) => {
  return apiService.post('api/add_author', authorData);
};
export const borrowBook = (borrowBook) => {
  return apiService.post('api/borrow-book', borrowBook);
};
export const ListAuthor = (ListAuthor) => {
  return apiService.get('api/authors', ListAuthor);
};
export const UpdateAuthor = (UpdateAuthor) => {
  return apiService.patch(`api/update_author${this.slug}`, UpdateAuthor);
};

export const addBook = (bookData) => {
  return apiService.post('api/add_book', bookData);
};
export const ListBook = (ListBook) => {
  return apiService.get('api/books', ListBook);
};

export const UpdateBook = (bookId, updatedBookData) => {
  return apiService.patch(`api/update_book/${bookId}`, updatedBookData);
};

export default apiService;