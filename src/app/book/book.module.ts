import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {CKEditorModule} from "ngx-ckeditor";


@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        BookRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        CKEditorModule
    ]
})
export class BookModule {
}
