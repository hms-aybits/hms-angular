import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from "../../default.component";
import { LayoutModule } from "../../../../layouts/layout.module";
import { CustomersReportComponent } from "./customers-report.component";

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': CustomersReportComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
        CustomersReportComponent
    ]
})
export class CustomersReportModule {
}