import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './book/header/header.component';
import { CreateComponent } from './book/create/create.component';
import { DetailComponent } from './book/detail/detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './book/edit/edit.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BookModule} from "./book/book.module";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CreateComponent,
    DetailComponent,
    EditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        BookModule,
        MatIconModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
