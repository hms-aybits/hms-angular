import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { CustomerComponent } from './customer.component';
import { CustomerService } from "./customer.service";
import { ReactiveFormsModule } from "@angular/forms";
import { WidgetsDropzoneComponent } from "../crud/forms/widgets/widgets-dropzone/widgets-dropzone.component";

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': CustomerComponent,
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
        CustomerComponent,
    ],
    providers: [CustomerService]
})
export class CustomerModule {
}