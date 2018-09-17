import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DefaultComponent } from "../default.component";
import { BookingComponent } from "./booking.component";
import { LayoutModule } from "../../../layouts/layout.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MultiSelectModule } from "primeng/primeng";
import { HttpClientModule } from "@angular/common/http";
import { BookingService } from "./booking.service";

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': BookingComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule.forRoot(),
        LayoutModule,
        ReactiveFormsModule,
        FormsModule,
        MultiSelectModule,
    ], exports: [
        RouterModule,
    ], declarations: [
        BookingComponent,
    ],
    providers: [BookingService,]
})
export class BookingModule {
}