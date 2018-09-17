import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataSourcesHtmlComponent } from './data-sources-html.component';
import { DefaultComponent } from "../default.component";
import { LayoutModule } from "../../../layouts/layout.module";

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": DataSourcesHtmlComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
        DataSourcesHtmlComponent
    ]
})
export class DataSourcesHtmlModule {



}