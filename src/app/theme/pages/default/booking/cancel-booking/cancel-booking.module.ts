import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { DefaultComponent } from "../../default.component";
import { LayoutModule } from "../../../../layouts/layout.module";
import { CustomerService } from "../../customers/customer.service";
import { CancelBookingComponent } from "./cancel-booking.component";

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': CancelBookingComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, ReactiveFormsModule,
    ], exports: [
        RouterModule,
    ], declarations: [
        CancelBookingComponent,
    ],
    providers: [CustomerService]
})
export class CancelBookingModule {
}