import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HallBookingComponent } from "./hall-booking.component";
import { DefaultComponent } from "../../default.component";
import { LayoutModule } from "../../../../layouts/layout.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/primeng";

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": HallBookingComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule, ReactiveFormsModule, CalendarModule
    ], exports: [
        RouterModule
    ], declarations: [
        HallBookingComponent
    ],
    providers: [DatePipe]
})
export class HallBookingModule {



}