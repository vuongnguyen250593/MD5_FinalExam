import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../model/book";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  formDetail!: FormGroup;
  id: any;

  constructor(private bookService: BookService, private router: Router, private  activerouter: ActivatedRoute) {

  }

  book:  Book = new Book(0, "", "", "")

  ngOnInit(): void {
    this.activerouter.params.subscribe((data)=>{
      this.id = data['id'];
      this.showDetail();
    })
  }
  showDetail(){
    this.bookService.findById(this.id).subscribe(data=>{
      this.book = data;
    })
  }

}
