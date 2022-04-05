import { Component, OnInit } from '@angular/core';
import {Book} from "./model/book";
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "./service/book.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];

  formBook!: FormGroup;

  constructor(private bookService: BookService,private http:HttpClient,private router :Router) {
  }

  book: Book = new Book(0, "", "","")

  ngOnInit(): void {
    this.formBook = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(""),
      price: new FormControl(""),
      description: new FormControl(""),
    })

    this.findAll()
  }

  findAll(){
    this.bookService.findAll().subscribe(data => {
      this.books = data
    })
  }

  delete(id: number) {

    let message = confirm("bạn có chắc muốn xóa không")
    if (message){
      this.bookService.delete(id).subscribe(() => {
        this.findAll();
      })
    }else {
      this.findAll();
    }

  }
}
