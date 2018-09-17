import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";


@Component({
    selector: "app-customers-report",
    templateUrl: "./customers-report.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class CustomersReportComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-customers-report',
            ['assets/vendors/custom/datatables/datatables.bundle.js',
                'assets/demo/default/custom/crud/datatables/advanced/column-rendering.js']);

    }

}