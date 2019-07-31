import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks() {
    return await this.booksService.getAllBooks();
  }

  @Get(':id')
  async getBook(@Param('id') id) {
    return await this.booksService.getBook();
  }

  @Post()
  async createBook() {
    return await this.booksService.createBook();
  }

  @Put(':id')
  async updateBook(@Param('id') id) {
    return await this.booksService.updateBook(id);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id) {
    return await this.booksService.deleteBook(id);
  }

  @Delete()
  async deleteAllBooks() {
    return await this.booksService.deleteAllBooks();
  }
}
