import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from "./configuration.component";
import { DefaultComponent } from "../default.component";
import { LayoutModule } from "../../../layouts/layout.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfigurationService } from "./configuration.service";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { CarService } from "../learning/table-crud/carservice";
import {
    DropdownModule,
    MessageModule,
    MultiSelectModule,
    PanelModule,
    RadioButtonModule,
    ToggleButtonModule
} from "primeng/primeng";
import { HttpClientModule } from "@angular/common/http";
import { MessageService } from "primeng/components/common/messageservice";

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": ConfigurationComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule, ReactiveFormsModule, TableModule, DialogModule, MultiSelectModule, HttpClientModule, DropdownModule, MessageModule, PanelModule, ToggleButtonModule
    ], exports: [
        RouterModule
    ], declarations: [
        ConfigurationComponent
    ],
    providers: [ConfigurationService, CarService, MessageService]
})
export class ConfigurationModule {



}