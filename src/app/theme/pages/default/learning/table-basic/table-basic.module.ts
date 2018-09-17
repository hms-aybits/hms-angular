import { Routes, RouterModule } from '@angular/router';
import { CarService } from "./carservice";
import { DefaultComponent } from "../../default.component";
import { TabledemoComponent } from "./tabledemo.component";
import { LayoutModule } from "../../../../layouts/layout.module";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": TabledemoComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, TableModule
    ], exports: [
        RouterModule
    ], declarations: [
        TabledemoComponent,

    ],
    providers: [CarService]
})
export class TableBasicModule {



}