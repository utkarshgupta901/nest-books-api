import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  async getAllBooks() {
    return 'get all books ';
  }

  async getBook() {
    return 'get book';
  }

  async createBook() {
    return 'books created';
  }

  async updateBook(id) {
    return 'update books' + id;
  }

  async deleteAllBooks() {
    return 'Delete all books';
  }

  async deleteBook(id) {
    return 'Delete book' + id;
  }
}
