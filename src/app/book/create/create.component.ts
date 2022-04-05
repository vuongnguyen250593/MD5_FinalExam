import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
    })
  }

  saveBook() {

    this.bookService.create(this.formGroup.value).subscribe(() => {
      alert("create thanh cong")
      this.router.navigate(['/book']);
    })

  }
}
