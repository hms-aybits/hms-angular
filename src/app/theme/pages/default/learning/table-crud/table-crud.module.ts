import { Routes, RouterModule } from '@angular/router';
import { CarService } from "./carservice";
import { DefaultComponent } from "../../default.component";
import { LayoutModule } from "../../../../layouts/layout.module";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TableCrudDemo } from "./tablecruddemo";
import { DialogModule } from "primeng/dialog";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": TableCrudDemo
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, TableModule, DialogModule, FormsModule
    ], exports: [
        RouterModule
    ], declarations: [
        TableCrudDemo,

    ],
    providers: [CarService]
})
export class TableCrudModule {



}