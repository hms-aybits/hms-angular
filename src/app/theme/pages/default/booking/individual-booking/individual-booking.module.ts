import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DefaultComponent } from "../../default.component";
import { LayoutModule } from "../../../../layouts/layout.module";
import { CustomerService } from "../../customers/customer.service";
import { IndividualBookingComponent } from "./individual-booking.component";
import { MultiSelectModule } from "primeng/primeng";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': IndividualBookingComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, ReactiveFormsModule, ReactiveFormsModule,
        FormsModule,
        MultiSelectModule, NgbModule.forRoot(),
    ], exports: [
        RouterModule,
    ], declarations: [
        IndividualBookingComponent
    ],
    providers: [CustomerService]
})
export class IndividualBookingModule {
}